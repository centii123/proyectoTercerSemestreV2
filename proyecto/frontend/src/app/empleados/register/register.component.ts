import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateEmpleadoModel, EmpleadoModel, UpdateEmpleadoModel } from 'src/app/models/empleado.model';
import { RolModel } from 'src/app/models/rol.model';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  claveV: string = '';
  ngOnInit(): void {
    this.getRoles()
  }
  constructor(private empleadosService: EmpleadosService,private rolesService: RolesService,private router: Router) {}
  roles: RolModel[] = [{id_rol: 1, descripcion: 'Rol1'}];

  empleado: CreateEmpleadoModel = {
    cedula_empleados: 0,
    nombres:'',
    apellidos: '',
    email: '',
    clave: '',
    id_rol: 0
  };
  async getRoles(){
    const response = this.rolesService.getAll().subscribe((response) => {
      this.roles = response;
    });
  }


  register(empleado:CreateEmpleadoModel){
    try {
      if (empleado.clave === this.claveV) {
        this.registerEmpleado(empleado)
        this.router.navigate(['empleados/login']);
      }else {
        throw new Error("La contraseña no coincide");
      }
    } catch (error) {
      console.log(error)
    }
  }

  registerEmpleado(empleado: CreateEmpleadoModel) {
    const response = this.empleadosService
      .store(empleado)
      .subscribe((response) => {
        console.log(response);
      });
  }
  updateEmpleado(empleado: UpdateEmpleadoModel) {
    const response = this.empleadosService
      .update(empleado.cedula_empleados, empleado)
      .subscribe((response) => {
        console.log(response);
      });
  }
}

import { RolModel } from './rol.model';

export interface EmpleadoModel {
  cedula_empleados: number;
  nombres: string;
  apellidos: string;
  email: string;
  clave: string;
  id_rol: RolModel;
}

export interface CreateEmpleadoModel extends Omit<EmpleadoModel, 'id_rol'> {
    id_rol: number;
}

export interface UpdateEmpleadoModel extends Omit<EmpleadoModel, 'id_rol'> {
    id_rol: number;
}

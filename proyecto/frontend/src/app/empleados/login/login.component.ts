import { Component,OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    
  }
  constructor (private loginService: LoginService) {
  }
  logeo = {
    email: '',
    clave: ''
  }

  login(){
    try {
      this.logearEmpleado()
    } catch (error) {
      console.log(error)
    }
  }
  logearEmpleado() {
    const response = this.loginService
      .login(this.logeo)
      .subscribe((response) => {
        console.log(response);
     });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  //Formulario
  FormLogin: FormGroup;
  TempEmail: string = "correo@gmail.com";
  TempPassword: string = "password"

  constructor(FormLoginBuilder: FormBuilder,private router:Router) {

    this.FormLogin = FormLoginBuilder.group({
      InputEmail: new FormControl(),
      InputPassword: new FormControl()
    })
  }

  TempAuth() {
    

    if (this.FormLogin.get('InputEmail')?.value === this.TempEmail && this.FormLogin.get('InputPassword')?.value === this.TempPassword ) {
      alert("inicio correcto");

      this.router.navigateByUrl('Panel-Principal');
    } else {
      alert("Incorrecto")
    }


  }


  ngOnInit() {
  }

}

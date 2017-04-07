import { LoginService } from './../services/login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userCredentials: { username: string, password: string } = {username: '', password:''};

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.userCredentials)
  }  
}

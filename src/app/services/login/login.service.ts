import { ServerGuildService } from './../server-guild/server-guild.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

@Injectable()
export class LoginService {

  urlToRedirectTo: string;

  constructor(
    private router: Router,
    private serverGuildService: ServerGuildService) { }


  setUrlAfterLogin(url: string) {
    this.urlToRedirectTo = url;
  }  

  login({username, password}) {
    return this.serverGuildService.authenticate()
      .subscribe(() => {
        console.log('Homing Pigeon came back');

        localStorage.setItem('princePictureToken', '1234')
        if (this.urlToRedirectTo) {
          this.router.navigate([this.urlToRedirectTo]);
          this.urlToRedirectTo = null;
        }
      })
  }
}

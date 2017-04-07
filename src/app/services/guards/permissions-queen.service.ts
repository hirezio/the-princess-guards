import { ServerGuildService } from './../server-guild/server-guild.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

@Injectable()
export class PermissionsQueenService {

  constructor(private serverGuildService: ServerGuildService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    
    const isWorthy = localStorage.getItem('isWorthy');

    if (isWorthy) {
      console.log('From localstorage');
      return Observable.of(true);
    }

    console.log('sending the permission Homing Pigeon');    
    return this.serverGuildService.authorize()
      .do(() => {
        console.log('Permission Homing Pigeon came back');
        localStorage.setItem('isWorthy', "true");
      })
  } 

}
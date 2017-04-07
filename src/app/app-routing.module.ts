import { PermissionsQueenService } from './services/guards/permissions-queen.service';
import { IdentityGuardService } from './services/guards/identity-guard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PrincessComponent } from './princess/princess.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'princessCastle',
    component: PrincessComponent,
    canActivate: [
      IdentityGuardService,
      PermissionsQueenService
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'prefix' }
]


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    IdentityGuardService,
    PermissionsQueenService
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

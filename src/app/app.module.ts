import { LoginService } from './services/login/login.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PrincessComponent } from './princess/princess.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ServerGuildService } from './services/server-guild/server-guild.service';

@NgModule({
  declarations: [
    AppComponent,
    PrincessComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    LoginService,
    ServerGuildService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

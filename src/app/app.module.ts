import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './auth/home/home.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import {routes} from './routes';
import {PublicGuard} from './common/guards/public.guard';
import {AuthGuard} from './common/guards/auth.guard';
import {AuthenticationService} from './common/services/authentication.service';
import {Ng2Webstorage} from 'ngx-webstorage';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    Ng2Webstorage
  ],
  providers: [
    PublicGuard, AuthGuard, AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenubarComponent } from './menubar/menubar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';

import { ListUserService } from './crud/service/list.service';

import { ListUserComponent } from './crud/user/list-user/list-user.component';
import { DeleteUserComponent } from './crud/user/delete-user/delete-user.component';
import { CreateUserComponent } from './crud/user/create-user/create-user.component';
import { UpdateUserComponent } from './crud/user/update-user/update-user.component';
import { CreateUserService } from './crud/service/create.service';
<<<<<<< HEAD
import { SortPipe } from './crud/pipe/pipe.component';
=======
>>>>>>> f528f089771d5d2836e86b0ea4e34abee03d1328

// import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HeaderComponent,
    HomeComponent,

    ListUserComponent,
    DeleteUserComponent,
    CreateUserComponent,
    UpdateUserComponent,

    SortPipe

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers:
  [
    ListUserService,
    CreateUserService,
<<<<<<< HEAD

=======
>>>>>>> f528f089771d5d2836e86b0ea4e34abee03d1328
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

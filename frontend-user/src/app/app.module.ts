
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

import { UpdateUserService } from 'src/app/crud/service/update.service';
import { ListUserService } from './crud/service/list.service';
import { CreateUserService } from './crud/service/create.service';

import { ListUserComponent } from './crud/user/list-user/list-user.component';
import { DeleteUserComponent } from './crud/user/delete-user/delete-user.component';
import { CreateUserComponent } from './crud/user/create-user/create-user.component';
import { UpdateUserComponent } from './crud/user/update-user/update-user.component';
import { AddUserComponent } from './crud/user/update-user/add-user/add-user.component';

import { SortPipe } from './crud/pipe/pipe.component';
import { DeleteUserService } from './crud/service/delete.service';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
    AddUserComponent,

    SortPipe,
    

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,

    FormsModule,
    // Ng2SearchPipeModule,
    
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers:
  [
    ListUserService,
    CreateUserService,

    UpdateUserService,
    DeleteUserService,

    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { AddUserComponent } from './crud/user/update-user/add-user/add-user.component';
import { NgModule } from '@angular/core';
import { RouterModule,Router, Routes } from '@angular/router';

import { DeleteUserComponent } from '../app/crud/user/delete-user/delete-user.component';
import { UpdateUserComponent } from '../app/crud/user/update-user/update-user.component';
import { CreateUserComponent } from '../app/crud/user/create-user/create-user.component';
import { ListUserComponent } from '../app/crud/user/list-user/list-user.component';


import { CrudComponent } from '../app/crud/crud.component';

import { HomeComponent } from '../app/home/home.component';


const routes: Routes = [
  //#####-----User------########
  {path:'listar/user', component:ListUserComponent},
  {path:'cadastrar/user', component:CreateUserComponent},
  {path:'atualizar/user', component:UpdateUserComponent},
  {path:'deletar/user', component:DeleteUserComponent},
  {path: 'adicionar/user/:id', component:AddUserComponent},


  //######----GERAL------#########
  {path:'home', component:HomeComponent},
  {path:'', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// @ts-ignore
export class AppRoutingModule { }

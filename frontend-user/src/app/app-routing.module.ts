import { DeleteUserComponent } from './crud/user/delete-user/delete-user.component';
import { UpdateUserComponent } from './crud/user/update-user/update-user.component';
import { CreateUserComponent } from './crud/user/create-user/create-user.component';
import { NgModule } from '@angular/core';

import { CrudComponent } from '../app/crud/crud.component';

import { HomeComponent } from '../app/home/home.component';

import { RouterModule, Routes } from '@angular/router';

import { ListUserComponent } from '../app/crud/user/list-user/list-user.component';




const routes: Routes = [
  //#####-----User------########
  {path:'listar/user', component:ListUserComponent},
  {path:'cadastrar/user', component:CreateUserComponent},
  {path:'atualisar/user', component:UpdateUserComponent},
  {path:'deletar/user', component:DeleteUserComponent},


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

import { NgModule } from '@angular/core';

import { CrudComponent } from '../app/crud/crud.component';

import { HomeComponent } from '../app/home/home.component';

import { RouterModule, Routes } from '@angular/router';

import { ListUserComponent } from '../app/crud/user/list-user/list-user.component';




const routes: Routes = [
  //#####-----User------########
  {path:'list/user', component:ListUserComponent},
  


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

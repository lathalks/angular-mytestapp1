import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDepartmentComponent } from './Department/list-department/list-department.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';

import { MyComponent } from './my.component';

const routes: Routes = [
  {path:'department', component:ListDepartmentComponent},
  {path:'my', component:MyComponent},
  {path:'employee', component:ListEmployeeComponent},
  {path:"**", redirectTo:'my'}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }

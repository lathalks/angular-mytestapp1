import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import{MyComponent} from './my.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import {HttpClientModule} from '@angular/common/http';

import { EmployeeService } from './employee/employee.service';
import { ListDepartmentComponent } from './Department/list-department/list-department.component';
import { DepartmentService } from './Department/department.service';
import { CreateDepartmentComponent } from './Department/create-department/create-department.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule,AppRoutingModule  ],
  declarations: [ AppComponent, HelloComponent,MyComponent, ListEmployeeComponent, ListDepartmentComponent, CreateDepartmentComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ EmployeeService, DepartmentService]
})
export class AppModule { }

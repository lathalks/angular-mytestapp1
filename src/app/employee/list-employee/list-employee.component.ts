import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

public employees=[];
  constructor(private _empService : EmployeeService) { }

  ngOnInit() {
this._empService.getEmployee().subscribe(data=>this.employees=data);
  }

}
import { Component, OnInit } from '@angular/core';
import {DepartmentService} from '../department.service'
@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent implements OnInit {

department=[];
  constructor(private service: DepartmentService) { }

  ngOnInit() {
this.service.getDepartment().subscribe(data=>this.department=data)
  }

}
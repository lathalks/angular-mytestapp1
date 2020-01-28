import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '/model/employee.ts';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EmployeeService {
private _jsonFileURL="./assets/data/employee.json";
  constructor(private http:HttpClient) { }

 public getEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>(this._jsonFileURL);
  }
}
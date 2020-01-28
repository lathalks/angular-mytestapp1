import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Department} from '/model/department';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DepartmentService {
  private _jsonFileURL="assets/data/department.json"

  constructor(private http:HttpClient) { }

getDepartment() :Observable<Department[]>
{
  return this.http.get<Department[]>(this._jsonFileURL)
}
}
import { Injectable } from '@angular/core';
import {Department} from '../models/department';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  url = 'http://localhost:4200/api/department/'

  constructor(private http: HttpClient) { }

  getAllDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.url);
  }

  getDepartmentById(deptId: string): Observable<Department> {
    return this.http.get<Department>(this.url + deptId);
  }

  createDepartment(dept: Department): Observable<Department> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post<Department>(this.url, dept, httpOptions);
  }

  updateDepartment(dept: Department): Observable<Department> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.put<Department>(this.url, dept, httpOptions);
  }

  deleteDepartmentById(deptId: string): Observable<Department> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.delete<Department>(this.url + deptId, httpOptions);
  }
}

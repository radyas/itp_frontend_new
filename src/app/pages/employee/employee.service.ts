import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = 'http://localhost:4200/api/users'

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }

  getEmployeeById(employeeId: string): Observable<Employee> {
    return this.http.get<Employee>(this.url + employeeId);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post<Employee>(this.url, employee, httpOptions);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.put<Employee>(this.url, employee, httpOptions);
  }

  deleteEmployeeById(employeeid: string): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.delete<number>(this.url + employeeid, httpOptions);
  }
}

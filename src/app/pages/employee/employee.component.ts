import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {Observable, Subscription} from 'rxjs';
import {Employee} from '../../models/employee';
import {DepartmentService} from '../../services/department.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees: Subscription
  results: any
  datas: any
  deptData: any
  departments: any

  constructor(private emp: EmployeeService, private dept: DepartmentService) { }

  ngOnInit() {
    this.employees = this.emp.getAllEmployees().subscribe(
        data => {
          this.results = data;
          this.datas = this.results.results;
        },
        error => {
          console.log(error)
        }
    );
    this.dept.getAllDepartments().subscribe(
        data => {
            this.deptData = data;
            this.departments = this.deptData.results;
        },
        error => {
            console.log(error)
        }
    )
  }

}

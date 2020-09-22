import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './employee.service';
import {Observable, Subscription} from 'rxjs';
import {Employee} from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees: Subscription
  results: any
  datas: any

  constructor(private emp: EmployeeService) { }

  ngOnInit() {
    this.employees = this.emp.getAllEmployees().subscribe(
        data => {
          this.results = data;
          this.datas = this.results.results;
        },
        error => {
          console.log(error)
        }
    )
  }

}

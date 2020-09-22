import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import {EmployeeRoutingModule} from './employee-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

@NgModule({
    declarations: [EmployeeComponent, AddEmployeeComponent],
    imports: [
        CommonModule,
        EmployeeRoutingModule
    ]
})
export class EmployeeModule { }

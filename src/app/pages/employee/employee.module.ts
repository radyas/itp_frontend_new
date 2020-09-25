import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import {EmployeeRoutingModule} from './employee-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [EmployeeComponent, AddEmployeeComponent],
    imports: [
        CommonModule,
        EmployeeRoutingModule,
        ReactiveFormsModule
    ]
})
export class EmployeeModule { }

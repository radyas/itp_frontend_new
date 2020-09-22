import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent} from './employee.component';
import {AddEmployeeComponent} from './add-employee/add-employee.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'view',
                component: EmployeeComponent,
                data: {
                    title: 'Manage Employee'
                }
            },
            {
                path: 'add',
                component: AddEmployeeComponent,
                data: {
                    title: 'Add Employee'
                }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EmployeeRoutingModule { }

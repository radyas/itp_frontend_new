import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {EmployeeService} from '../../../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  employeeForm: any
  private dataSaved: boolean;
  private employeeIdUpdate: any;
  private message: string;

  constructor(private fb: FormBuilder, private emp: EmployeeService) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirm: ['', [Validators.required]],
      nic: ['', [Validators.required]]
    })
  }

  onFormSubmit(value: any) {
    this.dataSaved = false;
    const employee = this.employeeForm.value;
    employee.username = employee.email;
    employee.nic = employee.email;
    console.log(employee)
    this.CreateEmployee(employee);
    this.employeeForm.reset();
  }

  loadEmployeeToEdit(employeeId: string) {
    this.emp.getEmployeeById(employeeId).subscribe(employee => {
      this.message = null;
      this.dataSaved = false;
      this.employeeIdUpdate = employee.id;
      this.employeeForm.controls['first_name'].setValue(employee.first_name);
      this.employeeForm.controls['last_name'].setValue(employee.last_name);
      this.employeeForm.controls['dob'].setValue(employee.dob);
      this.employeeForm.controls['address'].setValue(employee.address);
      this.employeeForm.controls['phone'].setValue(employee.phone);
      this.employeeForm.controls['password'].setValue(employee.password);
      this.employeeForm.controls['nic'].setValue(employee.nic);
      // this.employeeForm.controls['nic'].setValue(employee.nic);
    });

  }

  private CreateEmployee(employee: any) {
    if (this.employeeIdUpdate == null) {
      this.emp.createEmployee(employee).subscribe(
          () => {
            this.dataSaved = true;
            this.message = 'Record saved Successfully';
            this.employeeIdUpdate = null;
            this.employeeForm.reset();
          }
      );
    } else {
      employee.EmpId = this.employeeIdUpdate;
      this.emp.updateEmployee(employee).subscribe(() => {
        this.dataSaved = true;
        this.message = 'Record Updated Successfully';
        this.employeeIdUpdate = null;
        this.employeeForm.reset();
      });
    }
  }

  resetForm() {
    this.employeeForm.reset();
    this.message = null;
    this.dataSaved = false;
  }
}

export class Employee {
    id?: number;
    first_name: string;
    last_name: string;
    dob: Date;
    address: string;
    email: string;
    phone: string;
    password: string;
    confirm: string;
    is_staff = false;
    is_superuser: false;
    is_active = true;
    username: string;
    nic: string;
}

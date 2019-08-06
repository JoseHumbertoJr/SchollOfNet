import { Component, OnInit } from '@angular/core';
import employees from '../employees';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  name = '';
  salary = 0;
  bonus = 0;
  employees = employees;

  constructor() { }

  ngOnInit() {
  }
  addEmployee(event){
    this.employees.push({name: this.name, salary: this.salary,bonus: this.bonus});
    console.log(this.employees);
  }

}

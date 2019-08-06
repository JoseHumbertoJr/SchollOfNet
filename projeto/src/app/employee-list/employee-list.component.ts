import { Component, OnInit } from '@angular/core';
import employess from '../employees';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees_ = employess;

  constructor() { }

  ngOnInit() {
  }

  getSalaryColor(employee){
    return employee.salary > 20000 ? 'green' : 'red';
  }

}

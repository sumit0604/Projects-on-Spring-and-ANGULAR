import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee= new Employee();

  constructor(private httpemp:EmployeeserviceService, private router:Router) { }

  ngOnInit(): void {
  }


  onsubmit()
  {
    console.log(this.employee)
    this.httpemp.creatēemp(this.employee).subscribe(data=>{
      console.log(data)
      this.router.navigate(["/list"])
    },
    error=> console.log(error)
    )
  }

}

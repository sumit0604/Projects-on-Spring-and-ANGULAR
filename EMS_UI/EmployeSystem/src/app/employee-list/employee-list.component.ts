import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee:any;
 
  constructor(private empservice: EmployeeserviceService, private router:Router) { }

  ngOnInit(): void {
    this.getemployee();
  }

  private getemployee()
  {
      this.empservice.getalldata().subscribe(data=>{
        this.employee = data
      })
  }
  updteEmployee(id:number)
  { 
      this.router.navigate(["/update",id]);
  }
  deleteEmployee(id:number)
  {
    this.empservice.deleteEmp(id).subscribe(data=>{
      console.log(data);
      this.getemployee();
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {

  id!:number
  emps :any

  constructor(private empservice: EmployeeserviceService,private route:ActivatedRoute,private routes:Router) { }

  ngOnInit(): void {
    this.emps = new Employee();
    
    this.id = this.route.snapshot.params['id'];
    this.empservice.getEmpById(this.id).subscribe(data=>
      {
       console.log(data)
       this.emps = data;
      });
  }
  updateemployee()
  {
    this.empservice.updatedata(this.id,this.emps).subscribe(data=>
      {
        console.log(data);     
      })
      this.emps = new Employee();
      
      
  }
  onsubmit()
{
this.updateemployee();
this.routes.navigate(['list'])
}
}

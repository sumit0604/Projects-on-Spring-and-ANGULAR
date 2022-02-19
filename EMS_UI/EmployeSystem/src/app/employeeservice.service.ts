import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  private BaseUrl = "Http://localhost:8080/Employee"
  private update = "Http://localhost:8080/Employee/update"
 

  constructor(private httpclient:HttpClient) { }

  getalldata(){
    return this.httpclient.get(`${this.BaseUrl}`);
  }

  creatēemp(employee:Employee): Observable<Object>
  {
      return this.httpclient.post("Http://localhost:8080/Employee/add", employee);
  }

  getEmpById(id:number) : Observable<Object>
  {
    return this.httpclient.get<Employee>(`${this.BaseUrl}/${id}`);
  }
  updatedata(id:number,employee:Employee)
  {
    return this.httpclient.put(`${this.update}/${id}`,employee)
  }
  deleteEmp(id:number)
  {
    return this.httpclient.delete<Employee>(`${this.BaseUrl}/${id}`);
  }
}

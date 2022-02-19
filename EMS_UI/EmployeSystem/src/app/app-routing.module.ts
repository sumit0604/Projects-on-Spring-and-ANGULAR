import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DeveloperComponent } from './developer/developer.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ServicecomponentComponent } from './servicecomponent/servicecomponent.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';

const routes: Routes = [

  {path:"list", component:EmployeeListComponent},
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"create", component:CreateEmployeeComponent},
  {path:"home", component:HomepageComponent},
  {path:'update/:id', component:UpdateEmpComponent},
  {path:'developer', component:DeveloperComponent},
  {path:'services',component:ServicecomponentComponent},
  {path:'login',component:LoginComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

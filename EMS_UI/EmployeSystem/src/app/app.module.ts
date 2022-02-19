import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { HomepageComponent } from './homepage/homepage.component';

import { FormsModule, NgModel } from '@angular/forms';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { DeveloperComponent } from './developer/developer.component';
import { LoginComponent } from './login/login.component';
import { ServicecomponentComponent } from './servicecomponent/servicecomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    HomepageComponent,
    UpdateEmpComponent,
    DeveloperComponent,
    LoginComponent,
    ServicecomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

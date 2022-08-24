import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logindata ={
    username:"",
    password:""
  }

  constructor(private snack: MatSnackBar,private loginservice:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  SubmitForm(){
    console.log("Button fired......");
    if(this.logindata.username.trim()=='' || this.logindata.username == null)
    {
      this.snack.open("Username is Required!!","X",{
        duration: 3000,
        verticalPosition:"top",
        horizontalPosition:"center"
      })
      return; 
    }

    if(this.logindata.password.trim()=='' || this.logindata.password == null)
    {
      this.snack.open("Username is Required!!","X",{
        duration: 3000,
        verticalPosition:"top",
        horizontalPosition:"center"
      })
      return; 
    }

    //Generate Token for Valid Usename and Password
    console.log("Token is genrating here,,,,..");
    
    this.loginservice.tokenvalidation(this.logindata).subscribe((data:any)=>{
      console.log("successs");
      // console.log(data);
      
      
      //login code.......

       this.loginservice.loginUser(data.token);
      

      this.loginservice.getCurrentUser().subscribe(user=>{
        this.loginservice.userdetail(user);
        // console.log(user);

        //redirectiing according to role.....
        if(this.loginservice.getuserrole()=="ADMIN"){
          window.location.href ='/admin';
          // this.router.navigate(["/admin"])
        }
        else if(this.loginservice.getuserrole()=="NORMAL"){
          window.location.href ='/user-dashboard/0';
          // this.router.navigate(["/user-dashboard"])
        }
        else{
          this.loginservice.loggedout();
        }
      })
    },
    (error)=>{
      console.log("error occur");
      this.snack.open("Login Failed!!","",{
        duration:4000
      })
    }
    );

  }

}

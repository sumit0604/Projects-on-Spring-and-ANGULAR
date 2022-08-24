import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
public user ={
  username:" ",
  password:" ",
  firstname:" ",
  lastname:" ",
  email:" ",
  phone:" "
}
  constructor(private userservice:UserService,private snackbar:MatSnackBar,private route:Router) { }

  ngOnInit(): void {}
  submit_form()
  {
    console.log(this.user);
    
    //------------Form validation
    
    if(this.user.username == null || this.user.username== " " 
    || this.user.email==null || this.user.email==" "||
     this.user.firstname==null || this.user.firstname==" "||
      this.user.lastname==null || this.user.lastname ==" "|| 
      this.user.phone==null || this.user.phone ==" "||
      this.user.password==null || this.user.password ==""
      ){
      // alert("username is null!! fill it");
      this.snackbar.open("All fields are required","ok",{
        duration: 4000,
        verticalPosition:"top",
        horizontalPosition:"center"
      });
      return;
    }
    
    //adding data from service.ts
    this.userservice.adduser(this.user).subscribe((data)=>{
      console.log(data);
      // alert("Data has been submitted");
      Swal.fire('successfully registered!!','','success');
      
      
    },
    (error)=>{
      console.log(error)
      // alert("something went wRong");
      Swal.fire('Something went Wrong with you Data!!','',"error")
    })
    
  }

}


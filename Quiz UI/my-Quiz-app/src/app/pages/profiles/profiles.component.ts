import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  user:any;
  constructor(private login:LoginService) { }

  ngOnInit(): void {
    // this.user = this.login.getUser();
    this.login.getCurrentUser().subscribe(data=>{
      this.user = data;
      console.log(data);
      
    })
  }


}

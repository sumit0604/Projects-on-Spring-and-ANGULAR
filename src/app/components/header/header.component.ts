import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isloggedIn = false;
  user= null;

  constructor(public login:LoginService,private route:Router) { }

  ngOnInit(): void {
    this.isloggedIn = this.login.isloggedIn();
    this.user = this.login.getUser();
  }
  logout()
  {
    this.login.loggedout();
    window.location.reload();
    }

}

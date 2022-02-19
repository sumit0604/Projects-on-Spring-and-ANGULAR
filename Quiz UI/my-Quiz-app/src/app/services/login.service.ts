import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  //get details of current User....
  getCurrentUser()
  {
    return this.http.get(`${baseUrl}/current-user`);
  }



  //token validation from backend....

  tokenvalidation(logindata:any)
  {
    return this.http.post(`${baseUrl}/generate-token`,logindata);
  }

  //store token in local storage........

  loginUser(token:any)
  {
    localStorage.setItem("token",token)
    return true;
  }

  //User is loggedIn or Not......

  public isloggedIn()
  {
    let tokenstr = localStorage.getItem('token');
    if(tokenstr== undefined || tokenstr==null || tokenstr==' ')
    {
      return false;
    }
    else
    {
      return true;
    }

  }

  //logged out the user
  
  public loggedout()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //get token for user side

  public getToken()
  {
    console.log("gettoken is calling");
  
    return localStorage.getItem('token');;
  }


  //set user details----

  userdetail(user: any)
  {
    return localStorage.setItem('user',JSON.stringify(user));
  }

  //getuser
  public getUser()
  {
    let userstr = localStorage.getItem('user');
    if(userstr!=null)
    {
      return JSON.parse(userstr);
    }
    else{
      this.loggedout();
      return null;
    }
  }

  //get user role...

  public getuserrole()
  {
    let user = this.getUser();
   return user.authorities[0].authority; 
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName;
  password;
  constructor(private route : Router) { }

  onLogin(){
    if(this.userName==='admin' && this.password==='admin'){
      alert('Login Success!');
      localStorage.setItem('user', 'admin');
      this.route.navigate(['allproducts']);
    }
    else
    alert('Invalid username/password!');
    
  }

  ngOnInit() {
  }

}

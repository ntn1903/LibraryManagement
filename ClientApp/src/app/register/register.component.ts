import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLogin: boolean = false;
  user: User = {
    id: '',
    name: '',
    email: '',
    username: '',
    password: '',
    budget: 0
  }
  constructor() { }

  ngOnInit(): void {
  }

  register(){

  }

}

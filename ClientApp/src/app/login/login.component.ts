import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin: boolean = true;
  user: User = {
    id: '',
    name: '',
    email: '',
    username: '',
    password: '',
    budget: 0
  }
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  login() {

  }

  register(){
    this.userService.create(this.user).subscribe({
      next: (r) => { this.router.navigate(['/book-for-rent']); }
    });
  }

  changeType() {
    this.isLogin = !this.isLogin;
  }

}

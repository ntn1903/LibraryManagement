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
    budget: 0,
    role: ''
  }
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { sessionStorage.clear(); }

  ngOnInit(): void {

  }

  login() {
    const userLogin = {
      username: this.user.username,
      password: this.user.password,
    }
    this.userService.login(userLogin).subscribe({
      next: (result) => {
        if (result) {
          sessionStorage.setItem('id', result.id);
          sessionStorage.setItem('username', result.username);
          sessionStorage.setItem('role', result.role)
          this.router.navigate(['/book-for-rent']);
        }
        else alert("Username or Password is incorrect!")
      }
    })
  }
}

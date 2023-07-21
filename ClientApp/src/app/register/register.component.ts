import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {
    id: '',
    name: '',
    email: '',
    username: '',
    password: '',
    budget: 0,
    role: ''
  }
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  register() {
    this.userService.create(this.user).subscribe({
      next: (r) => {
        if (r) {
          alert("Create account successful!")
          this.router.navigate(['/']);
        }
      }
    });
  }

}

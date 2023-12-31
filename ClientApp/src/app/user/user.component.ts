import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  constructor(private router: Router, private userService: UserService) {
    this.userService.getList().subscribe({
      next: (user) => { this.users = user },
      error: (error) => { console.log(error) }
    })
  }


  ngOnInit(): void {
  }

  deleteUser(u: User) {
    var answer = window.confirm("Do you want to delete?");
    if (answer)
      this.userService.delete(u.id).subscribe({ next: (r) => { this.router.navigate(['/user']); } })
  }

}

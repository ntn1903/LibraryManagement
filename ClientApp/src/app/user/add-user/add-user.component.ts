import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  isEdit: boolean = false;
  user: User = {
    id: '',
    name: '',
    email: '',
    username: '',
    password: '',
    budget: 0,
  }
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (p) => {
        const id = p.get('id');
        if (id) {
          this.isEdit = true;
          this.userService.read(id).subscribe({
            next: (data) => { this.user = data; }
          })
        }
      }
    })
  }

  addUser() {
    if (this.user.id)
      // this.userService.update(this.user.id, this.user).subscribe({
      //   next: (r) => { this.router.navigate(['/user']); }
      // });
      console.log()

    else
      this.userService.create(this.user).subscribe({
        next: (r) => { this.router.navigate(['/user']); }
      });
  }

  back() {
    this.router.navigate(['/user']);
  }

}

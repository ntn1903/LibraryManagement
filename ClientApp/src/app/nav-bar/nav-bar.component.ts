import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isExpanded = false;
  isMenuRequired: boolean = false;
  isAdminUser: boolean = false;
  currentUserId: any = '';

  budget: number = 0;

  constructor(private router: Router, private userService: UserService) {
  }
  ngAfterViewInit(): void {
    console.log('bbbbbbbbbbbbbbbbbbbb', sessionStorage.getItem('id'))
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    let currentUrl = this.router.url;
    if (currentUrl == '/' || currentUrl == '/register')
      this.isMenuRequired = false;
    else {
      this.isMenuRequired = true;

    }
  }
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}

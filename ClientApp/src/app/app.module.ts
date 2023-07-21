import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BookComponent } from './book/book.component';
import { MatDialogModule } from '@angular/material';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { AddBookComponent } from './book/add-book/add-book.component';
import { RouterModule, Routes } from '@angular/router';
import { BookForRentComponent } from './book-for-rent/book-for-rent.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { RentDetailComponent } from './rent-detail/rent-detail.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'book', component: BookComponent, canActivate:[AuthGuard] },
  { path: 'book/add', component: AddBookComponent, canActivate:[AuthGuard] },
  { path: 'book/edit/:id', component: AddBookComponent, canActivate:[AuthGuard] },
  { path: 'book-for-rent', component: BookForRentComponent, canActivate:[AuthGuard] },
  { path: 'my-profile', component: MyProfileComponent, canActivate:[AuthGuard] },
  { path: 'detail', component: RentDetailComponent, canActivate:[AuthGuard] },
  { path: 'user', component: UserComponent, canActivate:[AuthGuard] },
  { path: 'user/add', component: AddUserComponent, canActivate:[AuthGuard] },
  { path: 'user/edit/:id', component: AddUserComponent, canActivate:[AuthGuard] },
  { path: 'nav', component: NavBarComponent, canActivate:[AuthGuard] },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    BookComponent,
    AddBookComponent,
    BookForRentComponent,
    MyProfileComponent,
    RentDetailComponent,
    UserComponent,
    AddUserComponent,
    LoginComponent,
    NavBarComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

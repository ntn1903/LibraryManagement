import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
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
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // { path: '', component: BookForRentComponent, pathMatch: 'full' },
  // { path: 'counter', component: CounterComponent },
  // { path: 'fetch-data', component: FetchDataComponent },
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'book', component: BookComponent },
  { path: 'book/add', component: AddBookComponent },
  { path: 'book/edit/:id', component: AddBookComponent },
  { path: 'book-for-rent', component: BookForRentComponent },
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'detail', component: RentDetailComponent },
  { path: 'user', component: UserComponent },
  { path: 'user/add', component: AddUserComponent },
  { path: 'user/edit/:id', component: AddUserComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
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
    RegisterComponent,
    LoginComponent,
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

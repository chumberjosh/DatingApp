import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';
// we imported the alertfiy service here

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService,
    private router: Router) { }
// we added the alertify service as a private constructor here

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in successfully');
// if login is successfull then do that
// if they log in successfully run the .success function
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.router.navigate(['/members']);
    });
// if there is an error (not successful) then do that
// if theres an error then run the .error function
  }

loggedIn() {
  return this.authService.loggedIn();
}
// Once you are logged in put a token in localStorage
// if there is an error here, change this logged in function to this:

logout() {
  localStorage.removeItem('token');
  this.alertify.message('logged out');
  this.router.navigate(['/home']);
}
// Once you are logged out remove the token from the local storage
// if they log out run the .message function (.message is just different because of the color)

}

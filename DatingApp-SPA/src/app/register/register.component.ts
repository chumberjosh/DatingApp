import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
// on initialise cancelRegister (so on initialisation the registration form doesn't show (which is right))

constructor(private authService: AuthService, private alertify: AlertifyService) { }
// use the authorisation service
  ngOnInit() {
  }
// on initialisation do that

  register() {
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success('registration successful');
// if registration was successful then do that
    }, error => {
      this.alertify.error(error);
// if there is an error then do that
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
// if it gets cancelled then cancel the whole function
  }

}

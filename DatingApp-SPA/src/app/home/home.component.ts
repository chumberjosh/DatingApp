import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@Angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
// on Initialisation of the webpage register mode is set to false by default

  constructor(private http: HttpClient) { }
// this is a private constructor, they are used to create classes with no instance fields or methods
  ngOnInit() {

  }
// whatevers here will run on initialisation

  registerToggle() {
    this.registerMode = true;
  }
// on registerToggle, registerMode = true, as default it is false but this changes it to true

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }
// on cancelRegisterMode it will cancel registerMode (registerMode is a boolean because it is a true or false)

}

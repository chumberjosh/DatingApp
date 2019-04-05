import { Injectable } from '@angular/core';
declare let alertify: any;
// we declare alertify because we need to tell ts lint that we are using it
// we dont need to declare it because it's already in it

@Injectable({
  providedIn: 'root'
})

export class AlertifyService {
constructor() { }

  confirm(message: string, okCallback: () => any) {
    alertify.confirm(message, function(e) {
// this is the 'are you sure you want to do this' function
      if (e) {
// e = user click event
        okCallback();
      } else {}
// else happens if the user clicks cancel and you dont need to do anything if the user clicks cancel
    });
  }

  success(message: string) {
    alertify.success(message);
  }
// this is what comes up if there is a success

  error(message: string) {
    alertify.error(message);
  }
// this is what comes up if there is an error

  warning(message: string) {
    alertify.warning(message);
  }
// this is what happens when there is a warning

  message(message: string) {
    alertify.message(message);
  }
// this is for a message
}

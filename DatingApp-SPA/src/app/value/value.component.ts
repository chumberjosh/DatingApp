import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@Angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;              // values will be stored in this property (read below)

  constructor(private http: HttpClient) { }

  ngOnInit() {              // ng onInitialisation
    this.getValues();       // execute 'getValues' (below) and then store it in the values property (above)
  }

  getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
    }, error => {       // in the event of an error the console will log the error
      console.group(error);
    });
  }
}

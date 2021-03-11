import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// model
import { Cambio } from './models/Cambio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  CambioList: Cambio[];

  constructor(private http: HttpClient) { }

  ngOnInit(){

    this.http.get("http://localhost:8098/change/list").subscribe(
      (resp:any) => {
        console.log(resp);
        this.CambioList = resp;
      }),
      (error:any) => {
        console.log(error)
      }
      
  }
}

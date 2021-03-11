import { Component, OnInit } from '@angular/core';

// service
import { CambioService } from '../../../services/cambio.service';

// toastr
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Cambio } from '../../../models/Cambio';

@Component({
  selector: 'app-tipo-cambio-update',
  templateUrl: './tipo-cambio-update.component.html',
  styleUrls: ['./tipo-cambio-update.component.css']

})
export class TipoCambioUpdateComponent implements OnInit {
  EdadPosibleMuerte: number = 0;
  totalEdad: number = 0;
  contador: number = 0;
  CambioList: Cambio[];

  constructor(private http: HttpClient,
    private cambioService: CambioService) { }

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

  onEdit(cambio: any) {
    this.cambioService.updateChange = Object.assign({}, cambio);
  }

}

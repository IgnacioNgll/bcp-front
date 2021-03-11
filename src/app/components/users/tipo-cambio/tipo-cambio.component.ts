import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CambioService } from '../../../services/cambio.service';


@Component({
  selector: 'app-tipo-cambio',
  templateUrl: './tipo-cambio.component.html',
  styleUrls: ['./tipo-cambio.component.css']
})
export class TipoCambioComponent implements OnInit {
  monto: number = 0;
  monedaOrigen: number = 0;
  monedaDestino: number = 0;
  listFinal: any[] = [];

  constructor(private http: HttpClient,
    private cambioService: CambioService) { }

  ngOnInit(){      
  }

  insertForm() {

    this.http.get("http://localhost:8098/change/exchange" + '/'+this.monto+ '/'+this.monedaOrigen+ '/'+this.monedaDestino).subscribe(
      (resp:any) => {
        this.listFinal = resp;
        this.cambioService.resultado.emit({data:this.listFinal});
        console.log(this.listFinal);
      }),
      (error:any) => {
        console.log(error)
      }
  }

}

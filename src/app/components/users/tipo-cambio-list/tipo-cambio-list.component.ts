import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CambioService } from '../../../services/cambio.service';

@Component({
  selector: 'app-tipo-cambio-list',
  templateUrl: './tipo-cambio-list.component.html',
  styleUrls: ['./tipo-cambio-list.component.css']
})

export class TipoCambioListComponent implements OnInit {
  public listaData: Array<any> = [];

  constructor(private cambioService: CambioService) { }

  ngOnInit() {
    this.cambioService.resultado.subscribe(data => {
    this.listaData.push(data);
    })
  }

}

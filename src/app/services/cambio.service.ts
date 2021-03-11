import { Injectable, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Injectable()
export class CambioService {

 @Output() resultado: EventEmitter<any> = new EventEmitter();

  insertUser(cambio: any)
  {

  }

  updateChange(cambio: any)
  {

  }

}

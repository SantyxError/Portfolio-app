import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicioDeFavoritosService {
  [x: string]: any;
  @Output() disparadorDeFavoritos: EventEmitter<any> = new EventEmitter();
  constructor() {}
}

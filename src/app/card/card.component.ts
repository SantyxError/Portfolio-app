import { ServicioDeFavoritosService } from './../servicio-de-favoritos.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() dataEntrante: any;
  public image!: string;

  constructor(private servicioFavorito: ServicioDeFavoritosService) {}

  ngOnInit(): void {
    this.image = 'https://picsum.photos/536/354';
  }

  agregarFavorito(event: Event): void {
    event.stopPropagation(); 
    console.log('Añadiendo a favoritos:', this.dataEntrante);
    this.servicioFavorito.disparadorDeFavoritos.emit({
      data: this.dataEntrante,
    });
  }
}

import { Component } from '@angular/core';
import { ServicioDeFavoritosService } from '../servicio-de-favoritos.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private servicioFavorito: ServicioDeFavoritosService) {}

  public listDeVideos: Array<any> = [];

  ngOnInit(): void {
    this.servicioFavorito.disparadorDeFavoritos.subscribe((data) => {
      console.log('Recibiendo data...', data);
      this.listDeVideos.push(data);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'portfolio-app';
  public listDeVideos: Array<any> = [];

  constructor(private restService: RestService) {}

  ngOnInit(): void {
    this.cargarData(); // Llama al método cargarData en ngOnInit
  }

  cargarData() {
    this.restService.getData().subscribe(
      (data) => {
        this.listDeVideos = data.posts; // Asigna los videos al array
        console.log(this.listDeVideos); // Muestra los videos en la consola
      },
      (error) => {
        console.error('Error al cargar los datos:', error); // Manejo de errores
      }
    );
  }
}

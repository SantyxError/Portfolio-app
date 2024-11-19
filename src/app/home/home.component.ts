import { Component } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public listDeVideos: Array<any> = [];

  constructor(private restService: RestService) {}

  ngOnInit(): void {
    this.cargarData();
  }

  cargarData() {
    this.restService.get('assets/data.json').subscribe(
      (data) => {
        this.listDeVideos = data.posts;
        console.log(this.listDeVideos);
      },
      (error) => {
        console.error('Error al cargar los datos:', error);
      }
    );
  }
}

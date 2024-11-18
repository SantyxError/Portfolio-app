import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  public respuesta: any = [];

  constructor(
    private RestService: RestService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: any) => {
      const id = paramMap.get('id');
      this.cargarData(id);
    });
  }

  cargarData(id: string) {
    this.RestService.getData().subscribe(
      (respuesta) => {
        this.respuesta = respuesta.posts.find(
          (post: any) => post.id === parseInt(id)
        );
        console.log(this.respuesta);
      },
      (error) => {
        console.error('Error al cargar los datos', error);
      }
    );
  }
}

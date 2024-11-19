import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  public respuesta: any = {};
  public comentarios: any = [];
  public form: FormGroup | undefined;

  constructor(
    private RestService: RestService,
    private route: ActivatedRoute,
    private FormBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: any) => {
      const id = paramMap.get('id');
      this.cargarData(id);
    });

    this.form = this.FormBuilder.group({
      textAreaComentario: ['', Validators.required],
    });
  }

  cargarData(id: string) {
    this.RestService.get('assets/data.json').subscribe(
      (respuesta) => {
        this.respuesta = respuesta.posts.find(
          (post: any) => post.id === parseInt(id)
        );
        this.comentarios = this.respuesta?.comments || [];
        console.log(this.respuesta);
      },
      (error) => {
        console.error('Error al cargar los datos', error);
      }
    );
  }

  public enviarData() {
    if (this.form?.valid) {
      const nuevoComentario = {
        author: 'SantyxError', 
        text: this.form?.value.textAreaComentario,
      };

      if (this.respuesta) {
        this.respuesta.comments.push(nuevoComentario); 
        this.comentarios = this.respuesta.comments; 
        console.log('Comentario enviado:', nuevoComentario);
        this.form?.reset();
      }
    }
  }
}

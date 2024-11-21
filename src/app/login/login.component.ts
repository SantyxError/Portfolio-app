import { CookieService } from 'ngx-cookie-service';
import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private RestService: RestService,
    private cookieService: CookieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  enviarDatos(): void {
    if (this.form.valid) {
      this.RestService.validateLogin(
        this.form.value.email,
        this.form.value.password
      ).subscribe(
        (res: any) => {
          if (res.success) {
            console.log('Login Exitoso!!');
            this.cookieService.set('token_access', 'dummy_token', 4, '/');
            this.router.navigate(['/']);
          } else {
            console.error('Credenciales incorrectas');
          }
        },
        (err) => {
          console.error('Error en el login:', err);
        }
      );
    } else {
      console.error('Formulario no válido');
    }
  }
}

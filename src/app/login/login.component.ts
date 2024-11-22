import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../rest.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private restService: RestService,
    private cookieService: CookieService,
    private router: Router // Inyecta Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  enviarDatos() {
    const { email, password } = this.form.value;
    this.restService.validateLogin(email, password).subscribe((result) => {
      if (result.success) {
        alert(`Bienvenido ${result.user.name}`);
        this.cookieService.set('token_access', email); // Guarda el token
        this.router.navigate(['/']); // Redirige al inicio
      } else {
        alert('Credenciales incorrectas');
      }
    });
  }
}

import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(public cookieService: CookieService, private router: Router) {} // Cambiar a 'public'

  logout() {
    this.cookieService.delete('token_access'); // Borra el token
    alert('Has cerrado sesión');
    this.router.navigate(['/']); // Redirige al inicio
  }
}

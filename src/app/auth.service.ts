import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false); // Estado de login
  isLoggedIn$ = this.loggedIn.asObservable(); // Observable para los componentes

  constructor(private cookieService: CookieService) {
    // Comprobar si el usuario está logueado al cargar la aplicación
    const token = this.cookieService.get('token_access');
    this.loggedIn.next(!!token);
  }

  login(token: string): void {
    this.cookieService.set('token_access', token, 4, '/'); // Guarda el token por 4 horas
    this.loggedIn.next(true); // Cambia el estado a logueado
  }

  logout(): void {
    this.cookieService.delete('token_access'); // Elimina el token
    this.loggedIn.next(false); // Cambia el estado a no logueado
  }
}

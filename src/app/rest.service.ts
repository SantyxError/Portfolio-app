import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import * as bcrypt from 'bcryptjs'; // Importar bcryptjs para comparar contraseñas encriptadas

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get<any>(url);
  }

  post(url: string, body: any) {
    return this.http.post<any>(url, body);
  }

  getUsers(): Observable<any> {
    return this.http.get<any>('assets/login.json'); // Ruta al archivo
  }

  // Validar credenciales ingresadas
  validateLogin(email: string, password: string): Observable<any> {
    return this.getUsers().pipe(
      map((data) => {
        const user = data.users.find(
          (user: any) => user.email === email && user.password === password
        );
        return user ? { success: true, user } : { success: false };
      })
    );
  }
}

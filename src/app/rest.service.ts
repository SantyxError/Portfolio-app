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
    return this.http.get<any>('assets/login.json'); // Obtener los usuarios desde el archivo JSON
  }

  // Comprobar las credenciales
  validateLogin(email: string, password: string): Observable<any> {
    return this.getUsers().pipe(
      map((data) => {
        const user = data.users.find((user: any) => user.email === email);

        // Si se encuentra el usuario, se compara la contraseña encriptada
        if (user && bcrypt.compareSync(password, user.password)) {
          return { success: true, user };
        } else {
          return { success: false };
        }
      })
    );
  }
}

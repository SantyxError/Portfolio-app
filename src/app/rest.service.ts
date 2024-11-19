import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}

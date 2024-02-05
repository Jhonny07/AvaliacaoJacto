import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TMDBService {
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  callApi(urlapi: string, method: number, opt?: any): Observable<any> {
    const url = `${this.apiUrl}/${urlapi}`;
    if (method === 0) {
      return this.http.get<any>(url, opt);
    } else if (method === 1) {
      return this.http.post<any>(url, opt);
    } else {
      throw new Error('Método inválido');
    }
  }
}

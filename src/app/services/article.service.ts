import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(`${environment.apiBaseUrl}/articles`);
  }

  create(article : Article): Observable<Article> {
    return this.httpClient.post<Article>(`${environment.apiBaseUrl}/articles`, Article);
  }

  update(article : Article): Observable<Article> {
    return this.httpClient.put<Article>(`${environment.apiBaseUrl}/articles`, Article);
  }

  delete(id: number): void {
    this.httpClient.delete(`${environment.apiBaseUrl}/articles/`+id);
  }
}

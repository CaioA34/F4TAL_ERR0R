import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment'; // O caminho pode variar

@Injectable({
  providedIn: 'root'
})
export class WsBase {

  // Pega a URL base do arquivo de environment correto
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  /**
   * Método GET que retorna um Observable (padrão Angular).
   * @param endpoint O caminho do recurso (ex: 'users/1')
   */
  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`);
  }

  /**
   * Método POST que retorna um Observable.
   * @param endpoint O caminho do recurso
   * @param body O corpo da requisição
   */
  post<T>(endpoint: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body);
  }

  /**
   * Método PUT que retorna um Observable.
   * @param endpoint O caminho do recurso
   * @param body O corpo da requisição
   */
  put<T>(endpoint: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}`, body);
  }

  /**
   * Método POST que retorna uma Promise (para uso com async/await).
   * @param endpoint O caminho do recurso
   * @param body O corpo da requisição
   */
  postPromise<T>(endpoint: string, body: any): Promise<T> {
    return firstValueFrom(this.http.post<T>(`${this.baseUrl}/${endpoint}`, body));
  }

  /**
   * Método GET para baixar um arquivo, retornando um Observable<Blob>.
   * @param endpoint O caminho do arquivo
   */
  getFile(endpoint: string): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/${endpoint}`, {
      responseType: 'blob'
    });
  }

  /**
   * Método GET para baixar um arquivo, retornando uma Promise<Blob>.
   * @param endpoint O caminho do arquivo
   */
  getFilePromise(endpoint: string): Promise<Blob> {
    return firstValueFrom(this.http.get(`${this.baseUrl}/${endpoint}`, {
      responseType: 'blob'
    }));
  }

  /**
   * Método POST que envia dados e espera um arquivo (Blob) como resposta, retornando uma Promise<Blob>.
   * @param endpoint O caminho do recurso
   * @param body O corpo da requisição
   */
  postPromiseBlob(endpoint: string, body: any): Promise<Blob> {
    return firstValueFrom(this.http.post(`${this.baseUrl}/${endpoint}`, body, {
      responseType: 'blob'
    }));
  }
}

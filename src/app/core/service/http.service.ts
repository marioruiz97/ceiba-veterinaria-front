import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Options {
  headers?: HttpHeaders;
}

@Injectable()
export class HttpService {
  private API_ENDPOINT = environment.endpoint;

  constructor(private httpClient: HttpClient) {}

  public createDefaultOptions(): Options {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }

  postRequest<T, R>(path: string, data: T): Promise<R> {
    return this.httpClient
      .post<R>(
        `${this.API_ENDPOINT}/${path}`,
        data,
        this.createDefaultOptions()
      )
      .toPromise();
  }

  patchRequest<T, R>(path: string, data: T): Promise<R> {
    return this.httpClient
      .patch<R>(
        `${this.API_ENDPOINT}/${path}`,
        data,
        this.createDefaultOptions()
      )
      .toPromise();
  }

  getRequest<T>(path: string): Observable<T> {
    return this.httpClient.get<T>(
      `${this.API_ENDPOINT}/${path}`,
      this.createDefaultOptions()
    );
  }

  deleteRequest<R>(path: string): Promise<R> {
    return this.httpClient
      .delete<R>(`${this.API_ENDPOINT}/${path}`)
      .toPromise();
  }
}

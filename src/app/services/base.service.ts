import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import * as helpers from '../helpers/general';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends helpers.Resource> {
  url: string;

  // Base url
  constructor(
    private httpClient: HttpClient) {
    this.url = environment.apiEndpoint;
  }


  public create(item: T, endpoint: string): Observable<T> {
    return this.httpClient
      .post<T>(`${this.url}/${endpoint}`, item)
      .pipe(map(data => data as T));
  }

  public update(item: T, endpoint: string): Observable<T> {
    return this.httpClient
      .put<T>(`${this.url}/${endpoint}/${item.id}`,
        item)
      .pipe(map(data => data as T));
  }

  read(id: number, endpoint: string): Observable<T> {
    return this.httpClient
      .get(`${this.url}/${endpoint}/${id}`)
      .pipe(map((data: any) => data as T));
  }

  list(queryOptions: helpers.QueryOptions, endpoint: string): Observable<T[]> {
    let address = `${this.url}/${endpoint}`;
    if (queryOptions) {
      address += `?${queryOptions.toQueryString()}`;
    }

    return this.httpClient
      .get(address)
      .pipe(map((data: any) => data as T[]));
  }

  delete(id: number, endpoint: string) {
    return this.httpClient
      .delete(`${this.url}/${endpoint}/${id}`);
  }
}
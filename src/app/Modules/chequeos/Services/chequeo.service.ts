import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chequeo } from 'src/app/core/Models/Chequeo';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ChequeoService {
  constructor(private httpClient: HttpClient) {}
  private url = environment.urlRestApi;

  public getChequeosPendientes(): Observable<any> {
    return this.httpClient.get<any>(this.url + '/chequeos').pipe(
      map((response) => {
        return response.data;
      })
    );
  }
}

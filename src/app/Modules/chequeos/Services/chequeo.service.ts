import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Chequeo } from 'src/app/core/Models/Chequeo';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Articulo } from 'src/app/core/Models/Articulo';
@Injectable({
  providedIn: 'root',
})
export class ChequeoService {
  constructor(private httpClient: HttpClient) {}
  private url: string = environment.urlRestApi;

  private chequeos: Chequeo[] = [];

  public getChequeosPendientes(): Observable<any> {
    return this.httpClient.get<any>(this.url + '/chequeos').pipe(
      map((response) => {
        return response.data;
        //this.chequeos = response.data;
      })
    );
  }

  public getChequeos(): Chequeo[] {
    this.getChequeosPendientes().subscribe();
    return this.chequeos;
  }
}

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

  private url2: string =
    'https://api.giphy.com/v1/gifs/trending?api_key=dKCDb0n6mIbZUAODrZ897y9MK47HWiT3&limit=5';

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

  public getGift(): Observable<any> {
    return this.httpClient.get<any>(this.url2);
  }
}

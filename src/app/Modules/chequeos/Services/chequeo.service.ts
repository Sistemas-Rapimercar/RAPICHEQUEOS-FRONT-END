import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Chequeo } from 'src/app/core/Models/Chequeo';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ChequeoService {
  constructor(private httpClient: HttpClient) {
    //sessionStorage.setItem('cantidad_chequeos', '0');
  }
  private url: string = environment.urlRestApi;
  private chequeos: Chequeo[] = [];
  @Output() obs = new EventEmitter<any>();

  public getChequeosPendientesInServer(): Observable<any> {
    return this.httpClient.get<any>(this.url + '/chequeos').pipe(
      map((response) => {
        this.chequeos = response.data;
        this.setChequeosPendientesInStorage();

        return response.data;
      })
    );
  }

  public getChequeosPendientesInStorage(): Chequeo[] {
    this.chequeos = [];
    for (
      let i = 0;
      i < parseInt(sessionStorage.getItem('cantidad_chequeos')!);
      i++
    ) {
      this.chequeos.push(JSON.parse(sessionStorage.getItem('chequeo:' + i)!));
    }

    return this.chequeos;
  }

  public setChequeosPendientesInStorage(): void {
    sessionStorage.setItem(
      'cantidad_chequeos',
      this.chequeos.length.toString()
    );
    let i = 0;
    this.chequeos.forEach((item) => {
      sessionStorage.setItem('chequeo:' + i, JSON.stringify(item));
      i++;
    });
    this.getChequeosPendientesInStorage();
  }
}

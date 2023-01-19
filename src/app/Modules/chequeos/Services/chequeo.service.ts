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
  constructor(private httpClient: HttpClient) {
    this.createIndexedDB('CHEQUEOS', 1);
  }

  db: IDBDatabase;

  createIndexedDB(dbName: string, version: number) {
    try {
      let request = indexedDB.open(dbName, version);
      let db = request.result;
      this.db = request.result;
      let objectStore = db.createObjectStore('myObjectStore', {
        keyPath: 'id',
        autoIncrement: true,
      });
      objectStore.createIndex('name', 'name', { unique: false });
      objectStore.createIndex('email', 'email', { unique: true });
      console.log('IndexedDB created successfully');
    } catch (error) {
      console.log('Error creating IndexedDB: ' + error);
    }
  }

  public addChequeo(chequeo: Chequeo) {
    let transaction = this.db.transaction(['chequeos'], 'readwrite');
    let objectStore = transaction.objectStore('chequeos');
    let request = objectStore.add(chequeo);

    request.onsuccess = (event: Event) => {
      console.log('Chequeo added successfully: ' + event.target);
    };

    request.onerror = (event: Event) => {
      console.log('Error adding chequeo: ' + event.target);
    };
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Itasks } from './interfaces/itasks';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getTodoListData(): Observable<Itasks[]> {
    return this.http.get<Itasks[]>('https://api.myjson.com/bins/pnhha');
  }
}

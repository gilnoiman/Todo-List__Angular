import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getTodoListData() {
    return this.http.get('https://api.myjson.com/bins/pnhha');
  }
}

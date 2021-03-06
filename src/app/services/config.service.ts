import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get('commands/config');
  }

  resetDb() {
    return this.http.post('commands/resetdb', undefined);
  }

}

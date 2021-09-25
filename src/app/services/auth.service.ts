import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IUser } from "../models/user.user";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  list(): Observable<IUser[]> {
    return this.http.get<IUser[]>('api/users');
  }

}

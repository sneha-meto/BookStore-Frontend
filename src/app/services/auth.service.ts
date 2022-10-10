import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = "http://localhost:58958/api";
  
  // private options = { headers: new HttpHeaders({
  // 'Content-Type': 'application/json',
  // 'Access-Control-Allow-Origin': 'http://localhost:4200/' }) };

  constructor(private http: HttpClient) { }

  register(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/register`, data)
  }
  login(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, data)
  }

  searchUsers(type:any,key:any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/auth/search/${type}/${key}`)
  }

  activateUser(userId:any,active:any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/auth/${userId}/${active}`,{})
  }


  logout() {
    localStorage.clear()
  }
  checkToken(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;

    }
  }
}

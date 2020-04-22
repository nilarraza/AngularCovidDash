import { Covid } from './covid';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Covidmain } from './covidmain';

@Injectable({
  providedIn: 'root'
})
export class DashService {

  constructor(private http:HttpClient) { }

  public getCovid(): Observable<Covidmain>{
    return this.http.get<Covidmain>("https://www.hpb.health.gov.lk/api/get-current-statistical");
  }
 
}

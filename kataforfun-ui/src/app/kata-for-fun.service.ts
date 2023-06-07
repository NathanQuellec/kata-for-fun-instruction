import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Result } from './model/result';

@Injectable({
  providedIn: 'root'
})

export class KataForFunService {

  private readonly ENDPOINT: string = "/kata-for-fun/";

  constructor(private http: HttpClient) { }

  getConvertedNumber(inputNumber: number): Observable<Result> {
    return this.http.get<Result>(environment.serverApi + this.ENDPOINT + inputNumber);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class ConverterService {

  constructor( private http:HttpClient) { }

  getData(selectedCountry: any, selectedCountry2: any): Observable<any> {
    const headers = {
      'X-RapidAPI-Key': '42b0f52196mshef169a3a69256ebp104b31jsn4f7bba9b8d0d',
      'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
    }
    let from = (selectedCountry ? selectedCountry.code: 'AED');
    let to = (selectedCountry2 ? selectedCountry2.code: 'INR');
    let param1 = new HttpParams()
    param1 = param1.append('from',from);
    param1 = param1.append('to',to);
    // let param2 = new HttpParams().set('to',to);
    // let url = ;
    return this.http.get('https://currency-exchange.p.rapidapi.com/exchange',{headers, params:param1})

  }
}

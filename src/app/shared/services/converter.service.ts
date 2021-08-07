import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  constructor() { }
  convertUserInput(input: string): Observable<string> {
    const val = input.split('#').filter(Boolean);
    let result = '';
    val.forEach(d => {
      const letter = Number(d) % 26;
      result = result.concat(String.fromCharCode(letter + 65));
    });
    return of(result);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


// HINT!: you can check api documentation in https://pokeapi.co/
@Injectable()
export class ApiService {
  private url = "https://pokeapi.co/api/v2/pokemon"
  public constructor(
    private  httpClient: HttpClient,
     
  ) {}

   getList (): Observable<any> {
    return this.httpClient.get<any>(this.url)  
  }

  getPokemonById(id: string): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.httpClient.get<any>(url);
  }

}
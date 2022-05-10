import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuscarCepService {

  constructor(private http: HttpClient) {}

  buscarEndereco(cep: string) {
    return this.http.get('https://ws.apicep.com/cep.json?code=' + cep);
  }

}

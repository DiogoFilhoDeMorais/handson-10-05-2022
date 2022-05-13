import { Component, OnInit } from '@angular/core';
import { BuscarCepService } from '../services/buscar-cep.service';

@Component({
  selector: 'app-buscar-cep',
  templateUrl: './buscar-cep.component.html',
  styleUrls: ['./buscar-cep.component.scss']
})
export class BuscarCepComponent implements OnInit {

  endereco: any = null;
  campoDeBuscas: any;

  constructor(private buscar: BuscarCepService) { }

  ngOnInit(): void {
    this.campoDeBuscas = document.getElementById('campoDeBuscas');
  }

  search(): void {
    const cep = this.campoDeBuscas.value;

    this.buscar.buscarEndereco(cep).subscribe(
      resposta => {
        this.endereco = resposta;
      },
      erro => {
        this.endereco = null;
      }
    );
  }

  clear(): void {
    this.endereco = null;
    console.log('A variável no componente pai recebeu NULO');
  }

}

import { Component, OnInit } from '@angular/core';
import { BuscarCepService } from '../services/buscar-cep.service';

@Component({
  selector: 'app-buscar-cep',
  templateUrl: './buscar-cep.component.html',
  styleUrls: ['./buscar-cep.component.scss']
})
export class BuscarCepComponent implements OnInit {

  endereco: any = null;

  constructor(private buscar: BuscarCepService) { }

  ngOnInit(): void {
    this.buscar.buscarEndereco('76400-000').subscribe(
      resposta => {
        this.endereco = resposta;
      }
    );
  }

}

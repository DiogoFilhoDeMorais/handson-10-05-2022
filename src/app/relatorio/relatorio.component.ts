import { Component, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent implements OnInit {

  @Input() endereco: any;
  @Output() limpar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  ngOnInit(): void {
  }

  clear(): void {
    this.limpar.next(true);
  }

}

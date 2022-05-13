import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BuscarCepComponent } from './buscar-cep/buscar-cep.component';

import { HttpClientModule } from '@angular/common/http';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    BuscarCepComponent,
    RelatorioComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

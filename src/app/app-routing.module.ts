import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BuscarCepComponent } from "./buscar-cep/buscar-cep.component";
import { HomeComponent } from "./home/home.component";

const routa: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'buscar',
    component: BuscarCepComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routa)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CabeceradosComponent } from './cabecerados/cabecerados.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { PieComponent } from './pie/pie.component';
import { PiedosComponent } from './piedos/piedos.component';
import { InicioComponent } from './inicio/inicio.component';
import { JoyeriaComponent } from './joyeria/joyeria.component'; 
import { ZapatosComponent } from './zapatos/zapatos.component'; 
import { AccesoriosComponent } from './accesorios/accesorios.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule,JoyeriaComponent,ZapatosComponent,AccesoriosComponent,CabeceraComponent,PiedosComponent ,CabeceradosComponent, NavegacionComponent, PieComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
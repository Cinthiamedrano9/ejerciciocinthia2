import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MidescripcionpersonalComponent } from './midescripcionpersonal/midescripcionpersonal.component';
import { LugardenacimientoComponent } from './lugardenacimiento/lugardenacimiento.component';
import { MismetaspropuestasComponent } from './mismetaspropuestas/mismetaspropuestas.component';



@NgModule({
  declarations: [
   MidescripcionpersonalComponent,
   LugardenacimientoComponent,
   MismetaspropuestasComponent
  ],
  exports:[
    MidescripcionpersonalComponent,
    LugardenacimientoComponent,
    MismetaspropuestasComponent
  ]
  ,
  imports: [
    CommonModule
  ]
})
export class PagesModule { }

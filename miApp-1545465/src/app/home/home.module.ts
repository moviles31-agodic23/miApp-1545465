import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { TarjetasComponent } from '../tarjetas/tarjetas.component';

import { AgregarTarjetasComponent } from '../agregar-tarjetas/agregar-tarjetas.component';
import { LoginComponent } from '../login/login.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, TarjetasComponent, AgregarTarjetasComponent, LoginComponent]
})
export class HomePageModule {}

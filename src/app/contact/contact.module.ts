import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ContactPageRoutingModule } from './contact-routing.module';
import { ContactPage } from './contact.page';

@NgModule({
  imports: [
    CommonModule,            // Proporciona directivas comunes, como ngIf y ngFor
    FormsModule,            // Necesario para usar ngModel en formularios
    IonicModule,            // Importa los componentes de Ionic
    ContactPageRoutingModule // Módulo de enrutamiento específico para ContactPage
  ],
  declarations: [ContactPage] // Declara el componente ContactPage
})
export class ContactPageModule {}

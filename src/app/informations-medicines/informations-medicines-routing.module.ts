import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { InformationsMedicinesComponent } from './informations-medicines.component';

const routes: Routes = [
  {
    path: '',
    component: InformationsMedicinesComponent,
    data: {
      title: 'ข้อมูลยา',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - ข้อมูลยา',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationsMedicinesRoutingModule { }

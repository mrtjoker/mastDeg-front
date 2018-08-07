import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MedicinesComponent} from './medicines.component';

const routes: Routes = [
  {
    path: '',
    component: MedicinesComponent,
    data: {
      title: 'Medicines',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - medicines',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicinesRoutingModule { }

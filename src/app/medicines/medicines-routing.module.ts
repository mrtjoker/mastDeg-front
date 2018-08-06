import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MedicinesComponent} from './medicines.component';

const routes: Routes = [
  {
    path: '',
    component: MedicinesComponent,
    data: {
      title: 'Medicines',
      icon: 'icon-layout-cta-right',
      caption: 'ข้อมูลยา',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicinesRoutingModule { }

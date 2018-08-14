import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchMedicinesComponent} from './search-medicines.component';

const routes: Routes = [
  {
    path: '',
    component: SearchMedicinesComponent,
    data: {
      title: 'Search Medicines',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - search-medicines',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchMedicinesRoutingModule { }

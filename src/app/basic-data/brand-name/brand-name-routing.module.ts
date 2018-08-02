import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrandNameComponent} from './brand-name.component';

const routes: Routes = [
  {
    path: '',
    component: BrandNameComponent,
    data: {
      title: 'BrandName',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - brandName',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandNameRoutingModule { }

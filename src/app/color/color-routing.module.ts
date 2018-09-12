import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ColorComponent} from './color.component';

const routes: Routes = [
  {
    path: '',
    component: ColorComponent,
    data: {
      title: 'Color',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - color',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorRoutingModule { }

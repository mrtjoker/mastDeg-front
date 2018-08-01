import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShapeComponent} from './shape.component';

const routes: Routes = [
  {
    path: '',
    component: ShapeComponent,
    data: {
      title: 'Shape',
      icon: 'icon-home',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - shape',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShapeRoutingModule { }

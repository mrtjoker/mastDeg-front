import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'ข้อมูลพื้นฐาน',
      status: false
    },
    children: [
      {
        path: 'mims',
        loadChildren: './mims/mims.module#MimsModule'
      },
      {
        path: 'shape',
        loadChildren: './shape/shape.module#ShapeModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicDataRoutingModule { }

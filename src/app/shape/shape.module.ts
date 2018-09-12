import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShapeComponent} from './shape.component';
import {ShapeRoutingModule} from './shape-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { ShapeService } from '../shared/service/shape.service';
import { FormsModule } from '../../../node_modules/@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ShapeRoutingModule,
    SharedModule,
    ChartModule,
    NgxDatatableModule,
    FormsModule
  ],
  declarations: [
    ShapeComponent
  ],
  providers: [ShapeService]
})
export class ShapeModule { }

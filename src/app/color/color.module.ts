import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ColorComponent} from './color.component';
import {ColorRoutingModule} from './color-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { ColorService } from '../shared/service/color.service';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { ShapeComponent } from '../shape/shape.component';
import { ShapeService } from '../shared/service/shape.service';
@NgModule({
  imports: [
    CommonModule,
    ColorRoutingModule,
    SharedModule,
    ChartModule,
    NgxDatatableModule,
    FormsModule
  ],
  declarations: [
    ColorComponent,
    ShapeComponent
  ],
  providers: [ColorService,ShapeService],
  exports: [
    ColorComponent
  ]
})
export class ColorModule { }

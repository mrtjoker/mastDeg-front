import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrandNameComponent} from './brand-name.component';
import {BrandNameRoutingModule} from './brand-name-routing.module';
import {ChartModule} from 'angular2-chartjs';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
@NgModule({
  imports: [
    CommonModule,
    BrandNameRoutingModule,
    ChartModule,
    NgxDatatableModule,
  ],
  declarations: [
    BrandNameComponent
  ],
  providers: []
})
export class BrandNameModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrandNameComponent} from './brand-name.component';
import {BrandNameRoutingModule} from './brand-name-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { BrandNameService } from '../../shared/service/brand-name.service';
import { FormsModule } from '../../../../node_modules/@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    BrandNameRoutingModule,
    SharedModule,
    ChartModule,
    NgxDatatableModule,
    FormsModule
  ],
  declarations: [
    BrandNameComponent
  ],
  providers: [BrandNameService]
})
export class BrandNameModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FactoryComponent} from './factory.component';
import {FactoryRoutingModule} from './factory-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { FactoryService } from '../../shared/service/factory.service';
import { FormsModule } from '../../../../node_modules/@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FactoryRoutingModule,
    SharedModule,
    ChartModule,
    NgxDatatableModule,
    FormsModule
  ],
  declarations: [
    FactoryComponent
  ],
  providers: [FactoryService]
})
export class FactoryModule { }

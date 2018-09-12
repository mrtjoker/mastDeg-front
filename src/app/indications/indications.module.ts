import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicationsComponent } from './indications.component';
import { IndicationsRoutingModule } from './indications-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ChartModule } from 'angular2-chartjs';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { IndicationsService } from '../shared/service/indications.service';
import { FormsModule } from '../../../node_modules/@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    IndicationsRoutingModule,
    SharedModule,
    ChartModule,
    NgxDatatableModule,
    FormsModule
  ],
  declarations: [
    IndicationsComponent
  ],
  providers: [IndicationsService]
})
export class IndicationsModule { }

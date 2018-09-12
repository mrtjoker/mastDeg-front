import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContraindicationsComponent} from './contraindications.component';
import {ContraindicationsRoutingModule} from './contraindications-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { ContraindicationsService } from '../shared/service/contraindications.service';
import { FormsModule } from '../../../node_modules/@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ContraindicationsRoutingModule,
    SharedModule,
    ChartModule,
    NgxDatatableModule,
    FormsModule
  ],
  declarations: [
    ContraindicationsComponent
  ],
  providers: [ContraindicationsService]
})
export class ContraindicationsModule { }

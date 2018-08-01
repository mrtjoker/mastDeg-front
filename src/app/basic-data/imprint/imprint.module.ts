import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImprintComponent} from './imprint.component';
import {ImprintRoutingModule} from './imprint-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { ImprintService } from '../../shared/service/imprint.service';
import { FormsModule } from '../../../../node_modules/@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ImprintRoutingModule,
    SharedModule,
    ChartModule,
    NgxDatatableModule,
    FormsModule
  ],
  declarations: [
    ImprintComponent
  ],
  providers: [ImprintService]
})
export class ImprintModule { }

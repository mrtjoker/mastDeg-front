import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PresentationComponent} from './presentation.component';
import {PresentationRoutingModule} from './presentation-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { PresentationService } from '../../shared/service/presentation.service';
import { FormsModule } from '../../../../node_modules/@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    PresentationRoutingModule,
    SharedModule,
    ChartModule,
    NgxDatatableModule,
    FormsModule
  ],
  declarations: [
    PresentationComponent
  ],
  providers: [PresentationService]
})
export class PresentationModule { }

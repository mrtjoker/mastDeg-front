import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PresentationPackComponent} from './presentation-pack.component';
import {PresentationPackRoutingModule} from './presentation-pack-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { PresentationPackService } from '../shared/service/presentation-pack.service';
import { FormsModule } from '../../../node_modules/@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    PresentationPackRoutingModule,
    SharedModule,
    ChartModule,
    NgxDatatableModule,
    FormsModule
  ],
  declarations: [
    PresentationPackComponent
  ],
  providers: [PresentationPackService]
})
export class PresentationPackModule { }

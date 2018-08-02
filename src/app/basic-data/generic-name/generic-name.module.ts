import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericNameComponent } from './generic-name.component';
import { GenericNameRoutingModule } from './generic-name-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ChartModule } from 'angular2-chartjs';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { GenericNameService } from '../../shared/service/generic-name.service';
import { FormsModule } from '../../../../node_modules/@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    GenericNameRoutingModule,
    SharedModule,
    ChartModule,
    NgxDatatableModule,
    FormsModule
  ],
  declarations: [
    GenericNameComponent
  ],
  providers: [GenericNameService]
})
export class GenericNameModule { }

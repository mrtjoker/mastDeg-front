import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MimsComponent} from './mims.component';
import {MimsRoutingModule} from './mims-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {ChartModule} from 'angular2-chartjs';
import { SelectOptionService } from '../../shared/elements/select-option.service';
import {TagInputModule} from 'ngx-chips';
import {FormsModule} from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    MimsRoutingModule,
    SharedModule,
    ChartModule,
    FormsModule,
    TagInputModule
  ],
  declarations: [
    MimsComponent
  ],
  providers: [SelectOptionService]
})
export class MimsModule { }

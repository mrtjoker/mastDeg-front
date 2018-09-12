import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolumeComponent } from './volume.component';
import { VolumeRoutingModule } from './volume-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ChartModule } from 'angular2-chartjs';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { DosageComponent } from '../dosage/dosage.component';
import { PresentationComponent } from '../presentation/presentation.component';
import { PresentationPackComponent } from '../presentation-pack/presentation-pack.component';
import { DosageService } from '../shared/service/dosage.service';
import { PresentationService } from '../shared/service/presentation.service';
import { PresentationPackService } from '../shared/service/presentation-pack.service';

@NgModule({
  imports: [
    CommonModule,
    VolumeRoutingModule,
    SharedModule,
    ChartModule,
    NgxDatatableModule,
    FormsModule
  ],
  declarations: [
    VolumeComponent,
    DosageComponent,
    PresentationComponent,
    PresentationPackComponent
  ],
  providers: [
    DosageService,
    PresentationService,
    PresentationPackService
  ],
})
export class VolumeModule { }

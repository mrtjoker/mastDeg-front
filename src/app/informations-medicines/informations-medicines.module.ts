import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationsMedicinesComponent } from './informations-medicines.component';
import { InformationsMedicinesRoutingModule } from './informations-medicines-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ChartModule } from 'angular2-chartjs';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { BrandNameComponent } from '../brand-name/brand-name.component';
import { GenericNameComponent } from '../generic-name/generic-name.component';
import { MimsComponent } from '../mims/mims.component';
import { ThaiFDAComponent } from '../thai-fda/thai-fda.component';
import { UsFDAComponent } from '../us-fda/us-fda.component';
import { FactoryComponent } from '../factory/factory.component';
import { BrandNameService } from '../shared/service/brand-name.service';
import { GenericNameService } from '../shared/service/generic-name.service';
import { MimsService } from '../shared/service/mims.service';
import { ThaiFDAService } from '../shared/service/thai-fda.service';
import { UsFDAService } from '../shared/service/us-fda.service';
import { FactoryService } from '../shared/service/factory.service';

@NgModule({
  imports: [
    CommonModule,
    InformationsMedicinesRoutingModule,
    SharedModule,
    ChartModule,
    NgxDatatableModule,
    FormsModule
  ],
  declarations: [
    InformationsMedicinesComponent,
    BrandNameComponent,
    GenericNameComponent,
    MimsComponent,
    ThaiFDAComponent,
    UsFDAComponent,
    FactoryComponent
  ],
  providers: [
    BrandNameService,
    GenericNameService,
    MimsService,
    ThaiFDAService,
    UsFDAService,
    FactoryService
  ],
})
export class InformationsMedicinesModule { }

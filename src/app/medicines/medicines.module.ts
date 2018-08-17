import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicinesComponent } from './medicines.component';
import { MedicinesRoutingModule } from './medicines-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ChartModule } from 'angular2-chartjs';
import { SelectOptionService } from '../shared/elements/select-option.service';
import { TagInputModule } from 'ngx-chips';
import { FormsModule } from '@angular/forms';
import { MedicinesService } from '../shared/service/medicines.service';
import { NgxDatatableModule } from '../../../node_modules/@swimlane/ngx-datatable';
import { ArchwizardModule } from '../../../node_modules/ng2-archwizard/dist';
import { IndicationsService } from '../shared/service/indications.service';
import { DosageService } from '../shared/service/dosage.service';
import { AdviceService } from '../shared/service/advice.service';
import { ContraindicationsService } from '../shared/service/contraindications.service';
import { WarningService } from '../shared/service/warning.service';
import { AdverseReactionsService } from '../shared/service/adverse-reactions.service';
import { InteractionsService } from '../shared/service/interactions.service';
import { BrandNameService } from '../shared/service/brand-name.service';
import { GenericNameService } from '../shared/service/generic-name.service';
import { MimsService } from '../shared/service/mims.service';
import { PresentationPackService } from '../shared/service/presentation-pack.service';
import { PresentationService } from '../shared/service/presentation.service';
import { UsFDAService } from '../shared/service/us-fda.service';
import { ThaiFDAService } from '../shared/service/thai-fda.service';
import { ImprintService } from '../shared/service/imprint.service';
import { FormService } from '../shared/service/form.service';
import { ColorService } from '../shared/service/color.service';
import { FactoryService } from '../shared/service/factory.service';
import { ShapeService } from '../shared/service/shape.service';
@NgModule({
  imports: [
    CommonModule,
    MedicinesRoutingModule,
    SharedModule,
    ChartModule,
    FormsModule,
    TagInputModule,
    NgxDatatableModule,
    ArchwizardModule
  ],
  declarations: [
    MedicinesComponent
  ],
  providers: [
    SelectOptionService,
    MedicinesService,
    IndicationsService,
    DosageService,
    AdviceService,
    ContraindicationsService,
    WarningService,
    AdverseReactionsService,
    InteractionsService,
    BrandNameService,
    GenericNameService,
    MimsService,
    ShapeService,
    PresentationService,
    PresentationPackService,
    ThaiFDAService,
    UsFDAService,
    FormService,
    ImprintService,
    ColorService,
    FactoryService
  ]
})
export class MedicinesModule { }
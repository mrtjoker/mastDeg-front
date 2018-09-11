import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AllBasicDataComponent } from './all-basic-data.component';
import { FormsModule } from '@angular/forms';
import { AllBasicDataRoutingModule } from './all-basic-data-routing.module';
import { AdverseReactionsComponent } from '../basic-data/adverse-reactions/adverse-reactions.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AdverseReactionsService } from '../shared/service/adverse-reactions.service';
import { AdviceComponent } from '../basic-data/advice/advice.component';
import { AdviceService } from '../shared/service/advice.service';
import { BrandNameComponent } from '../basic-data/brand-name/brand-name.component';
import { ColorComponent } from '../basic-data/color/color.component';
import { ContraindicationsComponent } from '../basic-data/contraindications/contraindications.component';
import { DosageComponent } from '../basic-data/dosage/dosage.component';
import { FactoryComponent } from '../basic-data/factory/factory.component';
import { FormComponent } from '../basic-data/form/form.component';
import { GenericNameComponent } from '../basic-data/generic-name/generic-name.component';
import { ImprintComponent } from '../basic-data/imprint/imprint.component';
import { IndicationsComponent } from '../basic-data/indications/indications.component';
import { InteractionsComponent } from '../basic-data/interactions/interactions.component';
import { PresentationComponent } from '../basic-data/presentation/presentation.component';
import { PresentationPackComponent } from '../basic-data/presentation-pack/presentation-pack.component';
import { ShapeComponent } from '../basic-data/shape/shape.component';
import { ThaiFDAComponent } from '../basic-data/thai-fda/thai-fda.component';
import { UsFDAComponent } from '../basic-data/us-fda/us-fda.component';
import { WarningComponent } from '../basic-data/warning/warning.component';
import { BrandNameService } from '../shared/service/brand-name.service';
import { ColorService } from '../shared/service/color.service';
import { ContraindicationsService } from '../shared/service/contraindications.service';
import { DosageService } from '../shared/service/dosage.service';
import { FactoryService } from '../shared/service/factory.service';
import { FormService } from '../shared/service/form.service';
import { GenericNameService } from '../shared/service/generic-name.service';
import { ImprintService } from '../shared/service/imprint.service';
import { IndicationsService } from '../shared/service/indications.service';
import { InteractionsService } from '../shared/service/interactions.service';
import { PresentationService } from '../shared/service/presentation.service';
import { PresentationPackService } from '../shared/service/presentation-pack.service';
import { ShapeService } from '../shared/service/shape.service';
import { ThaiFDAService } from '../shared/service/thai-fda.service';
import { UsFDAService } from '../shared/service/us-fda.service';
import { WarningService } from '../shared/service/warning.service';
import { MimsService } from '../shared/service/mims.service';
import { MimsComponent } from '../basic-data/mims/mims.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    AllBasicDataRoutingModule,
    NgxDatatableModule,
  ],
  declarations: [
    AllBasicDataComponent,
    AdverseReactionsComponent,
    AdviceComponent,
    BrandNameComponent,
    ColorComponent,
    ContraindicationsComponent,
    DosageComponent,
    FactoryComponent,
    FormComponent,
    GenericNameComponent,
    ImprintComponent,
    IndicationsComponent,
    InteractionsComponent,
    MimsComponent,
    PresentationComponent,
    PresentationPackComponent,
    ShapeComponent,
    ThaiFDAComponent,
    UsFDAComponent,
    WarningComponent
  ],
  providers: [
    AdverseReactionsService,
    AdviceService,
    BrandNameService,
    ColorService,
    ContraindicationsService,
    DosageService,
    FactoryService,
    FormService,
    GenericNameService,
    ImprintService,
    IndicationsService,
    InteractionsService,
    MimsService,
    PresentationService,
    PresentationPackService,
    ShapeService,
    ThaiFDAService,
    UsFDAService,
    WarningService
  ]
})
export class AllBasicDataModule { }
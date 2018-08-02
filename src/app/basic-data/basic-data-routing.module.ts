import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'ข้อมูลพื้นฐาน',
      status: false
    },
    children: [
      {
        path: 'adverseReactions',
        loadChildren: './adverse-reactions/adverse-reactions.module#AdverseReactionsModule'
      },
      {
        path: 'advice',
        loadChildren: './advice/advice.module#AdviceModule'
      },
      {
        path: 'brandName',
        loadChildren: './brand-name/brand-name.module#BrandNameModule'
      },
      {
        path: 'color',
        loadChildren: './color/color.module#ColorModule'
      },
      {
        path: 'contraindications',
        loadChildren: './contraindications/contraindications.module#ContraindicationsModule'
      },
      {
        path: 'dosage',
        loadChildren: './dosage/dosage.module#DosageModule'
      },
      {
        path: 'factory',
        loadChildren: './factory/factory.module#FactoryModule'
      },
      {
        path: 'form',
        loadChildren: './form/form.module#FormModule'
      },
      {
        path: 'genericName',
        loadChildren: './generic-name/generic-name.module#GenericNameModule'
      },
      {
        path: 'imprint',
        loadChildren: './imprint/imprint.module#ImprintModule'
      },
      {
        path: 'indications',
        loadChildren: './indications/indications.module#IndicationsModule'
      },
      {
        path: 'interactions',
        loadChildren: './interactions/interactions.module#InteractionsModule'
      },
      {
        path: 'mims',
        loadChildren: './mims/mims.module#MimsModule'
      },
      {
        path: 'presentation',
        loadChildren: './presentation/presentation.module#PresentationModule'
      },
      {
        path: 'presentationPack',
        loadChildren: './presentation-pack/presentation-pack.module#PresentationPackModule'
      },
      {
        path: 'shape',
        loadChildren: './shape/shape.module#ShapeModule'
      },
      {
        path: 'thaiFDA',
        loadChildren: './thai-fda/thai-fda.module#ThaiFDAModule'
      },
      {
        path: 'usFDA',
        loadChildren: './us-fda/us-fda.module#UsFDAModule'
      },
      {
        path: 'warning',
        loadChildren: './warning/warning.module#WarningModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicDataRoutingModule { }

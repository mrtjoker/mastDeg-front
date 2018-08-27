import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IOption } from 'ng-select';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/first';
import { mergeMap } from 'rxjs/operators';
import { MedicinesService } from '../shared/service/medicines.service';
import { IndicationsService } from '../shared/service/indications.service';
import { DosageService } from '../shared/service/dosage.service';
import { AdviceService } from '../shared/service/advice.service';
import { WarningService } from '../shared/service/warning.service';
import { ContraindicationsService } from '../shared/service/contraindications.service';
import { InteractionsService } from '../shared/service/interactions.service';
import { AdverseReactionsService } from '../shared/service/adverse-reactions.service';
import { BrandNameService } from '../shared/service/brand-name.service';
import { GenericNameService } from '../shared/service/generic-name.service';
import { MimsService } from '../shared/service/mims.service';
import { PresentationService } from '../shared/service/presentation.service';
import { PresentationPackService } from '../shared/service/presentation-pack.service';
import { ThaiFDAService } from '../shared/service/thai-fda.service';
import { UsFDAService } from '../shared/service/us-fda.service';
import { FormService } from '../shared/service/form.service';
import { ImprintService } from '../shared/service/imprint.service';
import { ColorService } from '../shared/service/color.service';
import { FactoryService } from '../shared/service/factory.service';
import { ShapeService } from '../shared/service/shape.service';
@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.scss',
    '../../assets/icon/icofont/css/icofont.scss',
    '../../../node_modules/famfamfam-flags/dist/sprite/famfamfam-flags.min.css']
})
export class MedicinesComponent implements OnInit {
  public rowsFilter = [];
  public tempFilter = [];
  public table: any;
  public value: string;
  public tmp = {};
  public brandName = [];
  public genericName = [];
  public mimsClass = [];
  public presentation = [];
  public presentationPack = [];
  public initialThaiFDA = [];
  public usFDA = [];
  public form = [];
  public imprint = [];
  public shape = [];
  public color = [];
  public indications = [];
  public dosage = [];
  public advice = [];
  public contraindications = [];
  public warning = [];
  public adverseReactions = [];
  public interactions = [];
  public factory = [];
  public temp = {
    adverseReactions: '',
    advice: '',
    color: '',
    colorCode: '',
    brandName: '',
    contraindications: '',
    dosage: '',
    form: '',
    shape: '',
    genericName: '',
    imprint: '',
    indications: '',
    interactions: '',
    mimsClass: '',
    presentation: '',
    presentationPack: '',
    initialThaiFDA: '',
    thaiFDAEN: '',
    thaiFDATH: '',
    usFDA: '',
    warning: '',
    registrationNumber: '',
    numberFD: '',
    allowFacturer: '',
    manuFacturer: '',
    distributor: '',
    marketer: '',
    _id: ''
  };
  public tempView = {
    adverseReactions: '',
    advice: '',
    color: '',
    colorCode: '',
    brandName: '',
    contraindications: '',
    dosage: '',
    form: '',
    shape: '',
    genericName: '',
    imprint: '',
    indications: '',
    interactions: '',
    mimsClass: '',
    presentation: '',
    presentationPack: '',
    initialThaiFDA: '',
    thaiFDAEN: '',
    thaiFDATH: '',
    usFDA: '',
    warning: '',
    registrationNumber: '',
    numberFD: '',
    allowFacturer: '',
    manuFacturer: '',
    distributor: '',
    marketer: '',
  };

  constructor(
    private brandNameService: BrandNameService,
    private genericNameService: GenericNameService,
    private mimsService: MimsService,
    private presentationService: PresentationService,
    private presentationPackService: PresentationPackService,
    private thaiFDAService: ThaiFDAService,
    private usFDAService: UsFDAService,
    private formService: FormService,
    private imprintService: ImprintService,
    private shapeService: ShapeService,
    private colorService: ColorService,
    private medicinesService: MedicinesService,
    private indicationsService: IndicationsService,
    private dosageService: DosageService,
    private adviceService: AdviceService,
    private contraindicationsService: ContraindicationsService,
    private warningService: WarningService,
    private adverseReactionsService: AdverseReactionsService,
    private interactionsService: InteractionsService,
    private factoryService: FactoryService
  ) { }

  ngOnInit() {
    this.brandNameService.getAllBrandName().subscribe((result) => {
      result.forEach(element => { this.brandName.push(element.brandName); });
    });
    this.genericNameService.getAllGenericName().subscribe((result) => {
      result.forEach(element => { this.genericName.push(element.genericName); });
    });
    this.mimsService.getAllMims().subscribe((result) => {
      result.forEach(element => { this.mimsClass.push(element.mimsClass); });
    });
    this.presentationService.getAllPresentation().subscribe((result) => {
      result.forEach(element => { this.presentation.push(element.presentation); });
    });
    this.presentationPackService.getAllPresentationPack().subscribe((result) => {
      result.forEach(element => { this.presentationPack.push(element.presentationPack); });
    });
    this.thaiFDAService.getAllThaiFDA().subscribe((result) => {
      result.forEach(element => { this.initialThaiFDA.push(element.initialThaiFDA); });
    });
    this.usFDAService.getAllUsFDA().subscribe((result) => {
      result.forEach(element => { this.usFDA.push(element.usFDA); });
    });
    this.imprintService.getAllImprint().subscribe((result) => {
      result.forEach(element => { this.imprint.push(element.imprint); });
    });
    this.formService.getAllForm().subscribe((result) => {
      result.forEach(element => { this.form.push(element.form); });
    });
    this.shapeService.getAllShape().subscribe((result) => {
      result.forEach(element => { this.shape.push(element.shape); });
    });
    this.colorService.getAllColor().subscribe((result) => {
      result.forEach(element => { this.color.push(element.color); });
    });
    this.indicationsService.getAllIndications().subscribe((result) => {
      result.forEach(element => { this.indications.push(element.indications); });
    });
    this.dosageService.getAllDosage().subscribe((result) => {
      result.forEach(element => { this.dosage.push(element.dosage); });
    });
    this.adviceService.getAllAdvice().subscribe((result) => {
      result.forEach(element => { this.advice.push(element.advice); });
    });
    this.contraindicationsService.getAllContraindications().subscribe((result) => {
      result.forEach(element => { this.contraindications.push(element.contraindications); });
    });
    this.warningService.getAllWarning().subscribe((result) => {
      result.forEach(element => { this.warning.push(element.warning); });
    });
    this.adverseReactionsService.getAllAdverseReactions().subscribe((result) => {
      result.forEach(element => { this.adverseReactions.push(element.adverseReactions); });
    });
    this.interactionsService.getAllInteractions().subscribe((result) => {
      result.forEach(element => { this.interactions.push(element.interactions); });
    });
    this.factoryService.getAllFactory().subscribe((result) => {
      result.forEach(element => { this.factory.push(element.factory); });
    });
    this.medicinesService.getAllMedicines().subscribe((results) => {
      this.tempFilter = [...results];
      this.rowsFilter = results;
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.tempFilter.filter(function (d) {
      return d.medicine.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rowsFilter = temp;
    this.table.offset = 0;
  }

  clearTemp() {
    this.temp = {
      adverseReactions: '',
      advice: '',
      color: '',
      colorCode: '',
      brandName: '',
      contraindications: '',
      dosage: '',
      form: '',
      shape: '',
      genericName: '',
      imprint: '',
      indications: '',
      interactions: '',
      mimsClass: '',
      presentation: '',
      presentationPack: '',
      initialThaiFDA: '',
      thaiFDAEN: '',
      thaiFDATH: '',
      usFDA: '',
      warning: '',
      registrationNumber: '',
      numberFD: '',
      allowFacturer: '',
      manuFacturer: '',
      distributor: '',
      marketer: '',
      _id: ''
    };
  }
  clearTempView() {
    this.tempView = {
      adverseReactions: '',
      advice: '',
      color: '',
      colorCode: '',
      brandName: '',
      contraindications: '',
      dosage: '',
      form: '',
      shape: '',
      genericName: '',
      imprint: '',
      indications: '',
      interactions: '',
      mimsClass: '',
      presentation: '',
      presentationPack: '',
      initialThaiFDA: '',
      thaiFDAEN: '',
      thaiFDATH: '',
      usFDA: '',
      warning: '',
      registrationNumber: '',
      numberFD: '',
      allowFacturer: '',
      manuFacturer: '',
      distributor: '',
      marketer: '',
    };
  }

  openMyModal(event) {
    document.querySelector('#' + event).classList.add('md-show');
  }

  closeMyModal(event) {
    ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
  }

  insertVal() {
    this.medicinesService.addMedicines(this.temp).pipe(
      mergeMap(() => this.medicinesService.getAllMedicines()))
      .subscribe((results) => {
        console.log(results);
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
    this.clearTemp();
  }

  openView(event) {
    document.querySelector('#' + event).classList.add('md-show');
  }

  openMyModalData(data) {
    this.clearTempView();
    this.tempView = {
      adverseReactions: data.adverseReactions,
      advice: data.advice,
      color: data.color[0].value,
      colorCode: '',
      brandName: data.brandName[0].value,
      contraindications: data.contraindications,
      dosage: data.dosage,
      form: data.form[0].value,
      shape: data.shape[0].value,
      genericName: data.genericName[0].value,
      imprint: data.imprint[0].value,
      indications: data.indications,
      interactions: data.interactions,
      mimsClass: data.mimsClass[0].value,
      presentation: data.presentation[0].value,
      presentationPack: data.presentationPack[0].value,
      initialThaiFDA: data.initialThaiFDA[0].value,
      thaiFDAEN: '',
      thaiFDATH: '',
      usFDA: data.usFDA[0].value,
      warning: data.warning,
      registrationNumber: data.registrationNumber,
      numberFD: data.numberFD,
      allowFacturer: data.allowFacturer[0].value,
      manuFacturer: data.manuFacturer[0].value,
      distributor: data.distributor[0].value,
      marketer: data.marketer[0].value,
    };
  }

  openUpdate(event) {
    document.querySelector('#' + event).classList.add('md-show');
  }

  loadDataUpdate(value) {
    this.clearTemp();
    this.temp = value;
  }

  update() {
    this.medicinesService.updateMedicines(this.temp._id, this.temp).pipe(
      mergeMap(() => this.medicinesService.getAllMedicines()))
      .subscribe((results) => {
        this.tempFilter = [...results];
      });
    this.clearTemp();
  }

  delete(value) {
    this.medicinesService.deleteMedicines(value._id).pipe(
      mergeMap(() => this.medicinesService.getAllMedicines()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }


}

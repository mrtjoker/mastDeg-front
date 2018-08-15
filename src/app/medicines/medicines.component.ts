import { Component, OnInit } from '@angular/core';
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
    this.formService.getAllForm().subscribe((result) => {
      result.forEach(element => { this.form.push(element.form); });
    });
    this.imprintService.getAllImprint().subscribe((result) => {
      result.forEach(element => { this.imprint.push(element.imprint); });
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
      result.forEach(element => { this.factory.push(element.factory) });
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

  insert() {
    this.tmp = { medicine: this.value };
    this.value = '';
    this.medicinesService.addMedicines(this.tmp).pipe(
      mergeMap(() => this.medicinesService.getAllMedicines()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  update(value) {
    this.medicinesService.updateMedicines(value._id, value).pipe(
      mergeMap(() => this.medicinesService.getAllMedicines()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  delete(value) {
    this.medicinesService.deleteMedicines(value._id).pipe(
      mergeMap(() => this.medicinesService.getAllMedicines()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
  }

  openMyModal(event) {
    document.querySelector('#' + event).classList.add('md-show');
  }

  closeMyModal(event) {
    ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
  }

  save(event) {
    ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
  }

  insertVal() {
    this.medicinesService.addMedicines(this.temp).pipe(
      mergeMap(() => this.medicinesService.getAllMedicines()))
      .subscribe((results) => {
        this.tempFilter = [...results];
        this.rowsFilter = results;
      });
    this.temp = {
      adverseReactions: '',
      advice: '',
      color: '',
      colorCode: '',
      brandName: '',
      contraindications: '',
      dosage: '',
      form: '',
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
}
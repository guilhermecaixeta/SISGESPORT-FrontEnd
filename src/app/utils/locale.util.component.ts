import { Injectable } from '@angular/core';
import { NgbDatepickerI18n, NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { isNullOrUndefined } from 'util';

const I18N_VALUES = {
  'pt': {
    weekdays: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
    months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  }
  // other languages you would support
};

// Define a service holding the language. You probably already have one if your app is i18ned. Or you could also
// use the Angular LOCALE_ID value
@Injectable()
export class I18n {
  language = 'pt';
}

// Define custom service providing the months and weekdays translations
@Injectable()
export class CustomLocalePtBR implements IMixtin {
  parse(value: string): NgbDateStruct { //parse receive your string dd/mm/yyy
    //return a NgbDateStruct
    //calculate year,month and day from "value"
    return { day: +String(value).substr(0, 2), month: +String(value).substr(3, 2), year: +String(value).substr(6, 4) }
  }

  constructor(private _i18n: I18n) { }

  getWeekdayShortName(weekday: number): string {
    return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
  }
  getMonthShortName(month: number): string {
    return I18N_VALUES[this._i18n.language].months[month - 1];
  }
  getMonthFullName(month: number): string {
    return this.getMonthShortName(month);
  }

  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}/${date.month}/${date.year}`;
  }

  format(date: NgbDateStruct): string { //receive a NgbDateStruct
    if (!isNullOrUndefined(date))
      return `${String(date.day).length == 1 ? '0' + date.day : date.day}/${String(date.month).length == 1 ? '0' + date.month : date.month}/${date.year}`;
    else return null;
  }
}

interface IFormat extends NgbDateParserFormatter { }

interface II18n extends NgbDatepickerI18n { }

interface IMixtin extends IFormat, II18n {

} 
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  public languages: any = [
    { l: 'en', t: 'Eng' },
    { l: 'am', t: 'Հայ' },
    { l: 'ru', t: 'Рус' },
  ]

  constructor(private translate: TranslateService) {
    translate.setDefaultLang(this.getLanguage());
  }

  useLanguage(language: string): void {
    localStorage.setItem('lang', language)
    this.translate.use(language);
  }

  getLanguage(): string {
    let lang = localStorage.getItem('lang')
    if (!lang) {
      lang = 'en'
    }
    return lang
  }
}

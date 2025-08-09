import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private defaultLang = 'en';

  constructor(private translate: TranslateService) {
    // Set up supported languages
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang(this.defaultLang);

    const browserLang = translate.getBrowserLang();
    this.useLanguage(browserLang && translate.getLangs().includes(browserLang) ? browserLang : this.defaultLang);
  }

  useLanguage(lang: string): void {
    this.translate.use(lang);
  }

  getCurrentLanguage(): string {
    debugger
    return this.translate.currentLang || this.defaultLang;
  }

  get(key: string | string[]): string {
    return this.translate.instant(key);
  }

  getAsync(key: string | string[]) {
    return this.translate.get(key); // returns Observable
  }

  // Optionally: store the selected language in localStorage
  saveLanguagePreference(lang: string): void {
    localStorage.setItem('app_lang', lang);
  }

  loadLanguagePreference(): void {
    const savedLang = localStorage.getItem('app_lang');
    if (savedLang) {
      this.useLanguage(savedLang);
    }
  }
}

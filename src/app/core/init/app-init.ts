import { TranslateService } from '@ngx-translate/core';

export function appInitializerFactory(translate: TranslateService): () => Promise<void> {
  return () => {
    return new Promise<void>((resolve) => {
      const browserLang = window.location.pathname.split('/')[1]; // 'en' or 'ar'
      const lang = ['en', 'ar'].includes(browserLang) ? browserLang : 'en';
      translate.use(lang).subscribe({
        next: () => resolve(),
        error: () => resolve() // even on error, we resolve so app starts
      });
    })
  };
}

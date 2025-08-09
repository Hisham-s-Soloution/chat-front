import { HttpInterceptorFn } from '@angular/common/http';
// import {Inject} from '@angular/core';
// import {TranslationService} from '../i18n/translation-service';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  // const translationService: TranslationService = Inject(TranslationService);
  debugger
  const clonedRequest = req.clone({
    setHeaders: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Accept-Language': "en"
    }
  });
  return next(clonedRequest);
};

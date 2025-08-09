import {
  APP_INITIALIZER,
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection
} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import {HttpClient, provideHttpClient, withInterceptors} from '@angular/common/http';
import {MessageService} from 'primeng/api';
import {httpErrorInterceptor} from './core/interceptors/http-error-interceptor';
import {loaderInterceptor} from './core/interceptors/loader-interceptor';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {HttpLoaderFactory} from './core/i18n/translation-loader';
import {appInitializerFactory} from './core/init/app-init';
import {headerInterceptor} from './core/interceptors/header-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([
      httpErrorInterceptor,
      headerInterceptor,
      loaderInterceptor
    ])),
    MessageService,
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideAnimationsAsync('animations'),
    providePrimeNG({
      ripple: true,
      inputVariant: 'filled',
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false
        }
      },
    }),
    importProvidersFrom(TranslateModule.forRoot({
      fallbackLang: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    })),
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService],
      multi: true
    }
  ]
};

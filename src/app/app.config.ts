import { registerLocaleData } from '@angular/common';
import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

import es from '@angular/common/locales/es';
import { es_ES, provideNzI18n } from 'ng-zorro-antd/i18n';
registerLocaleData(es);

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideExperimentalZonelessChangeDetection(),
    provideNzI18n(es_ES),
    importProvidersFrom(FormsModule),
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
};

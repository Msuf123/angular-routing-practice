import { ApplicationConfig } from '@angular/core';
import { TitleStrategy, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { TitleService } from './service/title.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),{provide:TitleStrategy,useClass:TitleService}]
};

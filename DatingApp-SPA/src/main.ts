import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// if the environment is in 'production' then 'enableProdMode' which means to disable development mode
// (hover over 'enableProdMode' to see what it actually does)

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
// this is the function that works with bootstrap to make it dynamic works with different screen sizes

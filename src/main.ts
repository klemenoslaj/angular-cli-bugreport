import 'angular';
import { enableProdMode } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './ng2/app.module';
import { environment } from './environments/environment';
import { appNg1Module } from './ng1/app-ng1.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(moduleRef => {
    const adapter = moduleRef.injector.get(UpgradeModule) as UpgradeModule;

    adapter.bootstrap(document as any, [appNg1Module], {
        strictDi: true
    });
  })
  .catch(err => console.log(err));

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

/*import { LoginPageModule } from './app/login/login.module';

platformBrowserDynamic().bootstrapModule(LoginPageModule)
  .catch(err => console.log(err));*/

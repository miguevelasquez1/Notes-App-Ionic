import { platformBrowserDynamic } from 'angular-ts-decorators';
import'@uirouter/angularjs';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

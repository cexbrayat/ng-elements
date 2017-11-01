import 'zone.js/dist/zone';
//import '@webcomponents/custom-elements/src/native-shim';

import { registerAsCustomElements } from '@angular/elements';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { PonyComponent, PonyModule } from './pony.module';

registerAsCustomElements(
  [PonyComponent], 
  () => platformBrowserDynamic().bootstrapModule(PonyModule)
)


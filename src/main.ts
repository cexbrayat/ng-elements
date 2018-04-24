import 'zone.js/dist/zone';
//import '@webcomponents/custom-elements/src/native-shim';

import { createCustomElement } from '@angular/elements';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { PonyComponent, PonyModule } from './pony.module';

platformBrowserDynamic().bootstrapModule(PonyModule)
  .then(({ injector }) => {
    // get the ES6 class
    const PonyElement = createCustomElement(PonyComponent, { injector });
    // use it to register the custom element
    customElements.define('ns-pony', PonyElement);
  });


import {Injectable, NgModule} from '@angular/core';

class LibraryService {
  doStuff() {
    console.log('stuff done');
  }
}
LibraryService.decorators = [
  { type: Injectable },
];
/** @nocollapse */
LibraryService.ctorParameters = () => [];

class LibraryModule {
}
LibraryModule.decorators = [
  { type: NgModule, args: [{
              providers: [
                  LibraryService,
              ]
          },] }
];
/** @nocollapse */
LibraryModule.ctorParameters = () => [];

export {LibraryModule, LibraryService};
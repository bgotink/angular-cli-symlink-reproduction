import {Injectable, NgModule} from '@angular/core';

var LibraryService = (function () {
  function LibraryService() {}
  LibraryService.prototype.doStuff = function() {
    console.log('stuff done');
  };
  LibraryService.decorators = [
    { type: Injectable },
  ];
  /** @nocollapse */
  LibraryService.ctorParameters = function() {return [];};
  return LibraryService;
})();

var LibraryModule = (function () {
  function LibraryModule() {
  }
  LibraryModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    LibraryService,
                ]
            },] }
  ];
  /** @nocollapse */
  LibraryModule.ctorParameters = function() {return [];};
  return LibraryModule;
})();

export {LibraryModule, LibraryService};
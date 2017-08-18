(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.repro = global.repro || {}, global.repro.library = {}),global.ng.core));
}(this, (function (exports,_angular_core) { 'use strict';

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

/**
 * Generated bundle index. Do not edit.
 */

exports.LibraryModule = LibraryModule;
exports.LibraryService = LibraryService;

Object.defineProperty(exports, '__esModule', { value: true });

})));


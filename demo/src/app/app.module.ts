import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LibraryModule } from '@repro/library';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibraryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

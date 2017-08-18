import { Component } from '@angular/core';
import { LibraryService } from '@repro/library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(libraryService: LibraryService) {
    libraryService.doStuff();
  }
}

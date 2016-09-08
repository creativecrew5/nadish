/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  template: ` 
    <header>
      <h1>
        Google auth Login
      </h1>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main> 
    <footer> 
    </footer>
  `
})
export class App { 
  
  name = 'Angular 2 Google Auth'; 

  constructor(public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
 
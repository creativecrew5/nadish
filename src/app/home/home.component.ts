import { Component, NgZone} from '@angular/core';
import { AppConfig } from '../app.config';
import { AppState } from '../app.service'; 

declare var gapi:any;

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [ 
    AppConfig
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.style.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.template.html'
})
export class Home {
  // Set our default values
  userProfile = { 
  }; 
  // TypeScript public modifiers
  constructor(public appState: AppState, public appConfig: AppConfig, public _zone: NgZone) {

  }

  ngOnInit() {
    
    gapi.signin2.render(
      'googleLogin',{
      onSuccess:this.onGoogleLoginSuccess,
      scope: "profile",
      theme: "dark"
    }); 

  }
  
  onGoogleLoginSuccess = (loggedInUser) => {
     this._zone.run(() => {
        let profile = loggedInUser.getBasicProfile(); 
        this.userProfile = {
            id:profile.getId(),
            name:profile.getName(),
            image:profile.getImageUrl(),
            email:profile.getEmail()  
        };
    });
  } 

}

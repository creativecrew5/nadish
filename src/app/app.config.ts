export class AppConfig { 
  config = {};
  constructor() {
 
  } 
  get(prop?: any) { 
    return this.config.hasOwnProperty(prop) ? this.config[prop] : null;
  } 

}
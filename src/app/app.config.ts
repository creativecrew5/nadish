export class AppConfig { 
   config = {
    ID:'366660555051-2j1psaps2nph96e2jvpr50q4j9vmo3bg.apps.googleusercontent.com',
    SECRET:'i5WVk8aKkc-tRxhcUOuUQ_co'
  };
  constructor() {
  
  	

  } 
  get(prop?: any) { 
    return this.config.hasOwnProperty(prop) ? this.config[prop] : null;
  } 

}
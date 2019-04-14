import { AppController } from "./app.controller";

export const AppComponent = {
  selector: 'app',
  template: require(`./app.template.html`),
  controller: AppController
};

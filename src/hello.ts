import {Component, bootstrap} from 'angular2/angular2';

@Component({
    selector: 'hello-app',
    template: `
        <h1>Hi there , {{name}}!</h1>
        Say hello to: <input [value]="name" (input)="name = $event.target.value">
    `
})
export class HelloApp {
    name: string = 'World';
}

bootstrap(HelloApp);

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    template: `
        <h1>{{title}}</h1>
        <h2>Test</h2>

        <progress max="100" [value]="value"></progress>
    `
})
export class AppComponent {
    title = 'Programmable idle';
    value = 24;
}

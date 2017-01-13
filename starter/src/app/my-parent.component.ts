import { Component } from '@angular/core'

@Component({
    selector: 'my-parent',
    styles: ['.app {background: cyan;}'],
    template: `
    <div class="app">
     <h2>Parent</h2>
      <div>This div is defined in the Parent's template</div>
      <my-child>
        <div class="header" >Child got this header from parent, including the date: {{todaysDate}}</div>
        <div class="footer">Child got this footer from parent</div>
      </my-child>
    </div>
` })

export class MyParentComponent {
    todaysDate: string = new Date().toLocaleDateString();
}
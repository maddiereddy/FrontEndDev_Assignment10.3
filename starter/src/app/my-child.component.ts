import { Component } from '@angular/core'

@Component({
    selector: 'my-child',
    styles: ['.child {background: lightgreen;}'],
    template: `
    <div class="child">
     <h2>Child</h2>
      <ng-content select=".header" ></ng-content>
      <div>This content is defined in child</div>
      <ng-content select=".footer"></ng-content>
</div> `
})
export class MyChildComponent {}
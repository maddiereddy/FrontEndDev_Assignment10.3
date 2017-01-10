import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { MyChildComponent } from './my-child.component'
import { MyParentComponent } from './my-parent.component'
import { AppComponent } from './app.component'

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, MyParentComponent, MyChildComponent ],
  bootstrap: [AppComponent]
})

export class AppModule { }

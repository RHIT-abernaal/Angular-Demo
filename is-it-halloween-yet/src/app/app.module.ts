import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PictureDisplayerComponent } from './picture-displayer/picture-displayer.component';

@NgModule({
  // Has two components to control page behavior
  declarations: [
    AppComponent,
    PictureDisplayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

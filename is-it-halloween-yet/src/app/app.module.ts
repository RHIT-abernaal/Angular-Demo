import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PictureDisplayerComponent } from './picture-displayer/picture-displayer.component';

@NgModule({
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

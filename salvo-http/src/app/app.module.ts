import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'; //Importa Il modulo http
import { FooComponentComponent } from './foo/foo.component';

@NgModule({
  declarations: [
    AppComponent,
    FooComponentComponent
  ],
  imports: [
    BrowserModule, HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestLibModule } from 'test-lib';
import { EmptyComponent } from './app/empty/empty.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

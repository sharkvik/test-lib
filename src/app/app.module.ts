import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NvmLoaderModule } from 'nvm-loader';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NvmLoaderModule.forChild([{path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyContentComponent } from './lazy-content/lazy-content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LazyContentComponent],
  entryComponents: [LazyContentComponent]
})
export class LazyModule {
  static entry = LazyContentComponent;
}

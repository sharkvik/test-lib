import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyContentComponent } from './lazy-content/lazy-content.component';
import { TestLibModule } from 'test-lib';

@NgModule({
  imports: [
    CommonModule,
    TestLibModule
  ],
  declarations: [LazyContentComponent],
  entryComponents: [LazyContentComponent]
})
export class LazyModule {
  static entry = LazyContentComponent;
}

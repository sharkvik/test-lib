import { Component, OnInit } from '@angular/core';
import { TestLibService } from 'test-lib';

@Component({
  selector: 'app-lazy-content',
  template: `
    <p>
      lazy-content works!
    </p>

    <lib-test-lib></lib-test-lib>
    {{testLibService.label}}
  `,
  styles: []
})
export class LazyContentComponent implements OnInit {

  constructor(public testLibService: TestLibService) { }

  ngOnInit() {
  }

}

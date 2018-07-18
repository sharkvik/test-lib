import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-content',
  template: `
    <p>
      lazy-content works!
    </p>
  `,
  styles: []
})
export class LazyContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

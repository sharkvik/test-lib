import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty',
  template: `
    <p>
      empty works!
    </p>
  `,
  styles: []
})
export class EmptyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

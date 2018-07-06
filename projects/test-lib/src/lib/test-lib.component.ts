import { Component, OnInit } from '@angular/core';
import { TestLibService } from './test-lib.service';

@Component({
  selector: 'lib-test-lib',
  template: `
    <p>
      test-lib works!<br/>
      {{this.testLibService.label}}
    </p>
  `,
  styles: []
})
export class TestLibComponent implements OnInit {

  constructor(public testLibService: TestLibService) { }

  public ngOnInit() {
    this.testLibService.label = "shared-service";
  }
}

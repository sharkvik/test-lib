import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TestLibService } from 'test-lib';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
        Welcome to {{title}}!
      </h1>
    </div>
    <h2>Here are some links to help you start: </h2>
    <lib-test-lib></lib-test-lib>
    {{testLibService.label}}
    <ul>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://github.com/angular/angular-cli/wiki">CLI Documentation</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    // this.testLibService.label = "service-inside";
    console.log(this.testLibService.label);
  }
  ngOnInit(): void {
  }
  title = 'app';
  constructor(public testLibService: TestLibService){
    this.testLibService.label = "service-inside";
    console.log(this.testLibService.label);
  }
}

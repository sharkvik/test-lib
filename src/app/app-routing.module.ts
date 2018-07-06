import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestLibModule} from 'test-lib';
import { EmptyComponent } from './app/empty/empty.component';

const routes: Routes = [
  { path: 'test', loadChildren: 'test-lib/bundles/test-lib.umd.min.js#TestLibModule' },
  { path: '', component: EmptyComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

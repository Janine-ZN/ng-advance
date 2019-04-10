import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JsonServeComponent } from './json-server/json-server.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ObserverSubsciberComponent } from './observer-subsciber.component';

const routes: Routes = [
  { path: '', redirectTo: 'json-server', pathMatch: 'full' },
  { path: 'json-server', component: JsonServeComponent }
];

@NgModule({
  declarations: [
    JsonServeComponent,
    ObserverSubsciberComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ObserverSubscriberModule { }

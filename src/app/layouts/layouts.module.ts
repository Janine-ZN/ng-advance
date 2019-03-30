import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { LayoutsComponent } from './layouts.component';

@NgModule({
  declarations: [LayoutsComponent],
  imports: [
    SharedModule,
    HttpClientModule
  ]
})
export class LayoutsModule { }

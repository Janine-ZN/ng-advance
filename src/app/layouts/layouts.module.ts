import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
// import { NgZorroAntdModule } from 'ng-zorro-antd';
import { LayoutsComponent } from './layouts.component';

@NgModule({
  declarations: [LayoutsComponent],
  imports: [
    SharedModule,
    // NgZorroAntdModule
  ]
})
export class LayoutsModule { }

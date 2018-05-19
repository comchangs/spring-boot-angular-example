import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";
import { NaviComponent } from "./navi/navi.component";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [NaviComponent],
  exports: [NaviComponent]
})
export class CoreModule { }

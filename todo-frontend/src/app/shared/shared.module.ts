import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundDirective } from './background.directive';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ClarityModule } from "@clr/angular";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [BackgroundDirective],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BackgroundDirective,
    ClarityModule
  ]
})
export class SharedModule { }

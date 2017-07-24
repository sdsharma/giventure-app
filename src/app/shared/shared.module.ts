import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClarityModule } from 'clarity-angular/clarity.module';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    RouterModule
  ],
  declarations: [
    BannerComponent
],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ClarityModule,
    ReactiveFormsModule,
    BannerComponent
  ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }

}
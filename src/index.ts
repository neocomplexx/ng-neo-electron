import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Electron from 'electron';
import { NeoElectronService } from './neo-electron.service';

export * from './neo-electron.service';
export interface ElectronWindow extends Window {
  require(module: string): Electron.RendererInterface;
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [

  ],
  exports: [

  ]
})
export class NeoElectronModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NeoElectronModule,
      providers: [NeoElectronService]
    };
  }
}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProcessesPage } from './processes';

@NgModule({
  declarations: [
    ProcessesPage,
  ],
  imports: [
    IonicPageModule.forChild(ProcessesPage),
  ],
})
export class ProcessesPageModule {}

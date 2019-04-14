import { NgModule } from '@angular/core';
import { ItsgComponent } from './itsg.component';
import { IComponent } from './i/i.component';
import { TComponent } from './t/t.component';
import { SComponent } from './s/s.component';
import { GComponent } from './g/g.component';
import { ItsgPipe } from './itsg.pipe';

@NgModule({
  declarations: [ItsgComponent, IComponent, TComponent, SComponent, GComponent, ItsgPipe],
  imports: [
  ],
  exports: [ItsgComponent, IComponent, TComponent, SComponent, GComponent]
})
export class ItsgModule { }

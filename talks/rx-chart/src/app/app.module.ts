import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScatterChartOldComponent } from './scatter-chart-old/scatter-chart-old.component';
import { ScatterChartRxComponent } from './scatter-chart-rx/scatter-chart-rx.component';

@NgModule({
  declarations: [
    AppComponent,
    ScatterChartOldComponent,
    ScatterChartRxComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

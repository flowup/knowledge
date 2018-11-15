import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="generatePoints()">generate points</button>
    <textarea>{{points | json}}</textarea>
    <!--<app-scatter-chart-old imageUrl="/assets/point.png"-->
                           <!--[data]="points">-->
    <!--</app-scatter-chart-old>-->
    <app-scatter-chart-rx imageUrl="/assets/point.png"
                           [data]="points">
    </app-scatter-chart-rx>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  points: [number, number][] = [];

  constructor() {
    this.generatePoints();
  }

  generatePoints(): void {
    this.points = Array.from(
      {length: 5},
      (): [number, number] => [Math.random(), Math.random()]
    );
  }
}

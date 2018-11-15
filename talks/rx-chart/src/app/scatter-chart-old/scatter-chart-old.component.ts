import { Component, AfterViewInit, OnChanges, ViewChild, Input, ElementRef, SimpleChanges } from '@angular/core';
import { redrawChart } from '../app-utils';

@Component({
  selector: 'app-scatter-chart-old',
  template: '<canvas #chartCanvas width="500" height="500"></canvas>',
  styleUrls: ['./scatter-chart-old.component.scss']
})
export class ScatterChartOldComponent implements AfterViewInit, OnChanges {
  @ViewChild('chartCanvas') canvas: ElementRef;
  @Input() imageUrl: string;
  @Input() data: [number, number][];

  private image: HTMLImageElement;

  ngOnChanges(changes: SimpleChanges): void {
    const {data, imageUrl} = changes;

    if (data.currentValue !== data.previousValue &&
        this.canvas.nativeElement != null &&
        this.image != null) {
      redrawChart(this.canvas.nativeElement, this.data, this.image);
    }

    if (imageUrl.currentValue !== imageUrl.previousValue) {
      const image = new Image();
      image.src = this.imageUrl;
      image.addEventListener('load', () => {
      if (this.data != null &&
          this.canvas.nativeElement != null) {
        this.image = image;
        redrawChart(this.canvas.nativeElement, this.data, this.image);
      }
    });
    }
  }

  ngAfterViewInit(): void {
    if (this.data != null && this.image != null) {
      redrawChart(this.canvas.nativeElement, this.data, this.image);
    }
  }
}

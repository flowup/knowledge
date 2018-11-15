import { Component, ViewChild, ElementRef, Input, OnDestroy } from '@angular/core';
import { combineLatest, Subject, fromEvent } from 'rxjs';
import { mapTo, switchMap, take } from 'rxjs/operators';
import { redrawChart } from '../app-utils';

@Component({
  selector: 'app-scatter-chart-rx',
  template: '<canvas #chartCanvas width="500" height="500"></canvas>',
  styleUrls: ['./scatter-chart-rx.component.scss']
})
export class ScatterChartRxComponent implements OnDestroy {
  private readonly canvas$ = new Subject<HTMLCanvasElement>();
  private readonly data$ = new Subject<[number, number][]>();
  private readonly imageUrl$ = new Subject<string>();

  @ViewChild('chartCanvas')
  set chartCanvas(canvas: ElementRef<HTMLCanvasElement>) {
    this.canvas$.next(canvas.nativeElement);
  }

  @Input()
  set data(data: [number, number][]) {
    this.data$.next(data);
  }

  @Input()
  set imageUrl(url: string) {
    this.imageUrl$.next(url);
  }

  constructor() {
    const image$ = this.imageUrl$.pipe(
      switchMap(url => {
        const image = new Image();
        image.src = url;

        return fromEvent(image, 'load').pipe(
          take(1),
          mapTo(image)
        );
      })
    );

    combineLatest(this.canvas$, this.data$, image$)
      .subscribe(([canvas, data, image]) => {
        redrawChart(canvas, data, image);
      });
  }

  ngOnDestroy(): void {
    this.canvas$.complete();
    this.data$.complete();
    this.imageUrl$.complete();
  }
}

import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ScrollerService } from '../shared/scroller.service';
import { movieType } from '../shared/types/movieRes.interface';
import { SliderDirective } from './slider.directive';

@Component({
  selector: 'app-dyna-slider',
  templateUrl: './dyna-slider.component.html',
  styleUrls: ['./dyna-slider.component.scss'],
  providers: [ScrollerService]
})

export class DynaSliderComponent implements OnInit {

  @ViewChild(SliderDirective) sliderEl: SliderDirective;

  counter: number = 0;
  firstLapRight: boolean = true;
  firstLapLeft: boolean = true;

  @Input() sliderObjects: movieType[] = [];

  @ViewChild('el') scrollBox: HTMLElement;

  @ViewChild('left') leftSlider: object;

  constructor(
    private scrollService: ScrollerService,
  ) { }

  ngOnInit(): void {
    this.sliderObjects.push(...this.sliderObjects, ...this.sliderObjects)
  }

  scrollFunction(direction: string) {
    this.scrollService.scroll(
      this.scrollBox,
      this.leftSlider,
      direction,
      this.sliderEl.counter,
      this.sliderEl.firstLapRight,
      this.sliderEl.firstLapLeft
    );
  }

}
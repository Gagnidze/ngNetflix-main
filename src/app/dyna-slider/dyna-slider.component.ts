import { AfterViewInit, Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';
import { RequestsService } from '../shared/requests.service';
import { ScrollerService } from '../shared/scroller.service';
import { movieType } from '../shared/types/movieRes.interface';

@Component({
  selector: 'app-dyna-slider',
  templateUrl: './dyna-slider.component.html',
  styleUrls: ['./dyna-slider.component.scss'],
  providers: [ScrollerService]
})

export class DynaSliderComponent implements OnInit {

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

    console.log('here')
    console.log(this.sliderObjects)


    this.scrollService.scroll(
      this.scrollBox,
      this.leftSlider,
      direction,
      this.counter,
      this.firstLapRight,
      this.firstLapLeft
    );

    if (direction === 'right') {
      if (this.counter === 4 && this.firstLapRight) {
        this.firstLapRight = false;
        this.counter = 0;
      } else if (this.counter === 3 && !this.firstLapRight) {
        this.counter = 0;
      } else {
        this.counter++;
      }
      console.log(this.counter)
    } else if (direction === 'left') {
      if(this.firstLapRight && this.counter === 1) {
        this.firstLapRight = false;
      }
      if (this.counter === 0) {
        this.counter = 3;
      } else {
        this.counter--;
      }
      console.log(this.counter)
    }

  }

}
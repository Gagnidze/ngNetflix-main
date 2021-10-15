import { AfterViewInit, Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';
import { RequestsService } from '../shared/requests.service';
import { ScrollerService } from '../shared/scroller.service';

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

  @Input() sliderObjects: object[] = [];

  @ViewChild('el') scrollBox: HTMLElement;

  @ViewChild('left') leftSlider: object;


  // @ViewChild(SliderDirective, {static: true}) sliderHost: SliderDirective;

  // genres = [
  //   { id: 28, name: 'Action' },
  //   { id: 12, name: 'Adventure' },
  //   { id: 16, name: 'Animation' },
  //   { id: 35, name: 'Comedy' },
  //   { id: 80, name: 'Crime' },
  //   { id: 99, name: 'Documentary' },
  //   { id: 18, name: 'Drama' },
  //   { id: 10751, name: 'Family' },
  //   { id: 14, name: 'Fantasy' },
  //   { id: 36, name: 'History' },
  //   { id: 27, name: 'Horror' },
  //   { id: 10402, name: 'Music' },
  //   { id: 9648, name: 'Mystery' },
  //   { id: 10749, name: 'Romance' },
  //   { id: 878, name: 'Science Fiction' },
  //   { id: 10770, name: 'TV Movie' },
  //   { id: 53, name: 'Thriller' },
  //   { id: 10752, name: 'War' },
  //   { id: 37, name: 'Western' }
  // ]

  constructor(
    private reqService: RequestsService,
    private scrollService: ScrollerService,
    private componentFactoryResolver: ComponentFactoryResolver
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
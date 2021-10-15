import { AfterViewInit, Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { MovieComponent } from '../shared/movie/movie.component';
import { RequestsService } from '../shared/requests.service';
import { ScrollerService } from '../shared/scroller.service';
import { SliderDirective } from './slider.directive';


@Component({
  selector: 'app-dyna-slider',
  templateUrl: './dyna-slider.component.html',
  styleUrls: ['./dyna-slider.component.scss']
})

export class DynaSliderComponent implements OnInit, AfterViewInit {

  @Input() sliderObjects = {};

  // @ViewChild(SliderDirective) sliderHost: SliderDirective;

  @ViewChild('el') scrollBox: object;

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


    // this.genres.forEach((el, i) => {
    //   this.reqService.getMovies(el.id)
    // });

    // this.reqService.movies.subscribe(
    //   (res) => {
    //     this.allMovies.push(res);

    // setTimeout(() => {



    //   const comFactory = this.componentFactoryResolver.resolveComponentFactory(MovieComponent)
    //   const hostViewContainerRef = this.sliderHost.viewContainerRef;
    //   const componentRef =
    //   hostViewContainerRef.createComponent<MovieComponent>(comFactory);
    //   componentRef.instance.movieData = this.allMovies;

    //   console.log('reeeeeeeeeeeeeeeee')
    // }, 1000);




    // }
    // )
  }

  ngAfterViewInit() {
    // const movie = new MovieComponent();


    // console.log(comFactory)
    // console.log(this.sliderHost)
    // console.log('ge')

    // hostViewContainerRef.clear();

    // hostViewContainerRef.createComponent<MovieComponent>(comFactory)



    // console.log(hostViewContainerRef)

    // console.log(componentRef)
    // const componentRef = viewContainerRef.createComponent<AdComponent>(componentFactory);
    // componentRef.instance.data = adItem.data;

  }

  scrollFunction(direction: string) {
    console.log(this.leftSlider)
    console.log(this.scrollBox)
    this.scrollService.scroll(this.scrollBox, this.leftSlider, direction);
  }

}
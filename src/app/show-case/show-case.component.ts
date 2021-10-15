import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RequestsService } from '../shared/requests.service';
import { ScrollerService } from '../shared/scroller.service';

@Component({
  selector: 'app-show-case',
  templateUrl: './show-case.component.html',
  styleUrls: ['./show-case.component.scss']
})
export class ShowCaseComponent implements OnInit {

  allMovies: object[] = [];

  @ViewChildren('el') scrollBox: object;

  @ViewChildren('left') leftSlider: object;

  genres = [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 10402, name: 'Music' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 10770, name: 'TV Movie' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
    { id: 37, name: 'Western' }
  ]

  constructor(
    private reqService: RequestsService,
    private scrollService: ScrollerService
  ) { }

  ngOnInit(): void {


    this.genres.forEach((el, i) => {
      this.reqService.getMovies(el.id)
    });

    this.reqService.movies.subscribe(
      (res) => {
        this.allMovies.push(res);
      }
    )

  }

  scrollFunction(i: number, direction: string) {
    // uncomment this if needed
    // this.scrollService.scroll(this.scrollBox, this.leftSlider, direction, i);
  }

}




// import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
// import { RequestsService } from '../shared/requests.service';
// import { ScrollerService } from '../shared/scroller.service';

// @Component({
//   selector: 'app-show-case',
//   templateUrl: './show-case.component.html',
//   styleUrls: ['./show-case.component.scss']
// })
// export class ShowCaseComponent implements OnInit {

//   allMovies: object[] = [];

//   @ViewChildren('el') scrollBox: object;

//   @ViewChildren('left') leftSlider: object;

//   genres = [
//     { id: 28, name: 'Action' },
//     { id: 12, name: 'Adventure' },
//     { id: 16, name: 'Animation' },
//     { id: 35, name: 'Comedy' },
//     { id: 80, name: 'Crime' },
//     { id: 99, name: 'Documentary' },
//     { id: 18, name: 'Drama' },
//     { id: 10751, name: 'Family' },
//     { id: 14, name: 'Fantasy' },
//     { id: 36, name: 'History' },
//     { id: 27, name: 'Horror' },
//     { id: 10402, name: 'Music' },
//     { id: 9648, name: 'Mystery' },
//     { id: 10749, name: 'Romance' },
//     { id: 878, name: 'Science Fiction' },
//     { id: 10770, name: 'TV Movie' },
//     { id: 53, name: 'Thriller' },
//     { id: 10752, name: 'War' },
//     { id: 37, name: 'Western' }
//   ]

//   constructor(
//     private reqService: RequestsService,
//     private scrollService: ScrollerService
//     ) { }

//   ngOnInit(): void {


//     this.genres.forEach((el, i) => {
//       this.reqService.getMovies(el.id)
//     });

//     this.reqService.movies.subscribe(
//       (res) => {
//         this.allMovies.push(res);
//       }
//       )

//     }

//     scrollFunction(i: number, direction: string) {
//       // uncomment this if needed
//       // this.scrollService.scroll(this.scrollBox, this.leftSlider, direction, i);
//     }

//   }

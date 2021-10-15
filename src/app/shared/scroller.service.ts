import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollerService {

  scroll(sliderBox, sliderButton, direction: string) {


    let element: HTMLElement = sliderBox.nativeElement;

    let scroller: HTMLElement = sliderButton.nativeElement;

    let scrollPos: number = element.scrollLeft;

    // let posterWidth: number = element.children[1].firstChild.firstChild.parentElement.offsetWidth;
    let posterWidth: number = element.firstChild.firstChild.firstChild.parentElement.offsetWidth;

    if (direction === 'right') {
      element.scrollTo({
        top: 0,
        left: scrollPos += posterWidth * 6.25,
        behavior: 'smooth'
      })
    } else if (direction === 'left') {
      element.scrollTo({
        top: 0,
        left: scrollPos -= posterWidth * 6.25,
        behavior: 'smooth'
      })
    }

    scroller.classList.remove('disable')
  }

  constructor() { }
}
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ScrollerService {

//   scroll(sliderBox, sliderButton, direction: string, i: number) {


//     let element: HTMLElement = sliderBox._results[i].nativeElement;

//     let scroller: HTMLElement = sliderButton._results[i].nativeElement;

//     let scrollPos: number = element.scrollLeft;

//     // let posterWidth: number = element.children[1].firstChild.firstChild.parentElement.offsetWidth;
//     let posterWidth: number = element.firstChild.firstChild.firstChild.parentElement.offsetWidth;

//     if(direction === 'right') {
//       element.scrollTo({
//         top: 0,
//         left: scrollPos += posterWidth * 6.25,
//         behavior: 'smooth'
//       })
//     } else if(direction === 'left') {
//       element.scrollTo({
//         top: 0,
//         left: scrollPos -= posterWidth * 6.25,
//         behavior: 'smooth'
//       })
//     }

//     scroller.classList.remove('disable')
//   }

//     constructor() { }
//   }

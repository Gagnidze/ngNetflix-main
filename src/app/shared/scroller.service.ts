import { Injectable } from '@angular/core';

// let counter: number = 0;

@Injectable({
  providedIn: 'root'
})
export class ScrollerService {



  scroll(sliderBox, sliderButton, direction: string, counter: number, firstLapRight: boolean, firstLapLeft: boolean) {


    let element: HTMLElement = sliderBox.nativeElement;

    let scroller: HTMLElement = sliderButton.nativeElement;

    let scrollPos: number = element.scrollLeft;

    let posterWidth: number = element.firstChild.firstChild.firstChild.parentElement.offsetWidth;

    const POS_FOR_LEFT_RESET: number = 15.255 * posterWidth;
    const POS_FOR_NORMAL_SCROLL: number = 5 * posterWidth;


    if (direction === 'right') {
      if (counter === 3 && !firstLapRight) {
        console.log('right next lap reset')
        element.scrollLeft = 0
        scrollPos = 0
        // counter = 0;
        element.scrollTo({
          top: 0,
          left: scrollPos += POS_FOR_NORMAL_SCROLL,
          behavior: 'smooth'
        })
      } else if (counter === 4 && firstLapRight) {
        console.log('first lap reset')
        element.scrollLeft = 0
        scrollPos = 0
        // counter = 0;
        element.scrollTo({
          top: 0,
          left: scrollPos += POS_FOR_NORMAL_SCROLL,
          behavior: 'smooth'
        })
      } else if (counter < 4) {

        console.log('right regular scroll')
        element.scrollTo({
          top: 0,
          left: scrollPos += POS_FOR_NORMAL_SCROLL,
          behavior: 'smooth'
        })
      } else {
        console.log('right else block')
      }
    } else if (direction === 'left') {
      // ///////////////////////////////////////////////////////////////////
      if (counter === 1) {
        console.log('left next lap reset')

        element.scrollLeft = element.scrollWidth - POS_FOR_LEFT_RESET
        scrollPos = element.scrollWidth - POS_FOR_LEFT_RESET
        // counter = 0;
        element.scrollTo({
          top: 0,
          left: scrollPos -= POS_FOR_NORMAL_SCROLL,
          behavior: 'smooth'
        })
      }
      else if (counter <= 4) {

        console.log('left regular scroll')
        element.scrollTo({
          top: 0,
          left: scrollPos -= POS_FOR_NORMAL_SCROLL,
          behavior: 'smooth'
        })
      } else {
        console.log('right else block')
      }
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

import { Directive, ElementRef, HostListener, Input, ViewContainerRef } from "@angular/core";
import { fromEvent } from "rxjs";

enum Directions {
    Left = 'left-scroll',
    LeftArrow = 'left-scroll-arrow',
    Right = 'right-scroll',
    RightArrow = 'right-scroll-arrow'
}

enum ArgDirections {
    Left = 'left',
    Right = 'right'
}

@Directive({
    selector: '[counterDirective]',
})


export class SliderDirective {
    counter: number = 0;

    firstLapRight: boolean = true;
    firstLapLeft: boolean = true;

    
    
    @Input() direction: string;
    
    constructor(public viewContainerRef: ViewContainerRef, public elRef: ElementRef) { }
    
    // funct() {
        //     fromEvent(this.elRef.nativeElement, 'click').subscribe(console.log)
        // }
        
        @HostListener('click', ['$event.target']) onClick(element: HTMLElement) {
            
        // enum ge {
        
        // }
            
        // console.log(element.children.namedItem('I'))
        // if(element.nodeName === 'I' || element.childNodes) {
        //     console.log(element)
        // }
        // console.log(element.id);
        console.log(Directions.Left)
        if(element.id === Directions.Left || element.id === Directions.LeftArrow) {
            this.direction = ArgDirections.Left
            console.log(this.direction)
        } else if(element.id === Directions.Right || element.id === Directions.RightArrow) {
            this.direction = ArgDirections.Right
        }
        // console.log(element.id)
        // if(element.id === 'left') {
        //     console.log(element.tagName)
        // }

        if (this.direction === ArgDirections.Right) {
            if (this.counter === 4 && this.firstLapRight) {
                this.firstLapRight = false;
                this.counter = 0;
            } else if (this.counter === 3 && !this.firstLapRight) {
                this.counter = 0;
            } else {
                this.counter++;
            }
            console.log(this.counter)
        } else if (this.direction === ArgDirections.Left) {
            if (this.firstLapRight && this.counter === 1) {
                this.firstLapRight = false;
            }
            if (this.counter === 0) {
                this.counter = 3;
            } else {
                this.counter--;
            }
            console.log(this.counter)
        }
        console.log(this.counter)
    }

}
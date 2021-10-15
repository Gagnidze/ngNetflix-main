import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[sliderHost]',
})
export class SliderDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
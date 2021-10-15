import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appSliderHost]',
})
export class SliderDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
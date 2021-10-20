import { Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { DetailsComponent } from '../details/details.component';
import { RefDirective } from '../ref.directive';
import { movieType } from '../types/movieRes.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {

  @ViewChild(RefDirective) detailsRef: RefDirective

  @Input() movieData: movieType[];
  @Input() index: number;

  closeEventSub: Subscription;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }


  ngOnInit(): void {
    console.log(this.movieData)
  }

  showDetails(i: number) {
    console.log(this.movieData[i])

    const detailsComponentFactory = this.componentFactoryResolver.resolveComponentFactory(DetailsComponent);

    const detailsComponentRef = this.detailsRef.viewContainerRef.createComponent(detailsComponentFactory);

    detailsComponentRef.instance.movieDetails = this.movieData[i];

    this.closeEventSub = detailsComponentRef.instance.closeEvent.subscribe(() => {
      detailsComponentRef.destroy();
    })
  }

  ngOnDestroy() {
    this.closeEventSub.unsubscribe();
  }
}
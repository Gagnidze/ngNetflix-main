import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';
import { DetailsComponent } from '../details/details.component';
import { RefDirective } from '../ref.directive';
import { movieType } from '../types/movieRes.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @ViewChild(RefDirective) detailsRef: RefDirective

  @Input() movieData: movieType[];
  @Input() index: number;

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

    detailsComponentRef.instance.closeEvent.subscribe(() => {
      detailsComponentRef.destroy();
    })
  }
}
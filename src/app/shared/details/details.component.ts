import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { movieType } from '../types/movieRes.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() movieDetails: movieType;

  @Output() closeEvent = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.movieDetails);
  }

  close() {
    this.closeEvent.emit();
  }

}

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild('vidRef') video: ElementRef;
  // @ViewChild('playPause') playPause: ElementRef;

  playing: boolean = true;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    console.log(this.video.nativeElement)
    this.video.nativeElement.controls = false;

    // this.playPause.nativeElement
  }

  playPauseMethod() {

    console.log(this.playing);
    
    if(this.playing) {
      // data.play();
      this.video.nativeElement.pause();
      this.playing !== this.playing;
      // console.log(this.playing)
    } else if (!this.playing) {
      // console.log(this.video)
      this.video.nativeElement.play();  
      this.playing !== this.playing;
    }
    this.playing = !this.playing
  }

}

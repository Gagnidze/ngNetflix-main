import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild('vidRef') video: ElementRef;

  playing: boolean = true;
  muted: boolean = true;

  videoElement: HTMLVideoElement;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.video.nativeElement.controls = false;
    this.videoElement = this.video.nativeElement;
  }

  playPauseMethod() {
    if (this.playing) {
      this.videoElement.pause();
    } else if (!this.playing) {
      this.videoElement.play();
    }
    this.playing = !this.playing
  }

  muteUnmuteMethod() {
    if (this.muted) {
      this.videoElement.volume = 0
    } else if (!this.muted) {
      this.videoElement.volume = 1
    }
    this.muted = !this.muted
  }
}

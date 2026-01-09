import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  imports: [NgClass],
  templateUrl: './face-snap.html',
  styleUrls: ['./face-snap.scss']
})

export class FaceSnapComponent implements OnInit {
  @Input() faceSnap! : FaceSnap;

  hasSnaped! : boolean;
  buttonText! : string;
  iconStyle! : string;

  ngOnInit() {
    this.hasSnaped = false;
    this.buttonText = "heart";
    this.iconStyle = "far";
  }

  onAddSnaps() {
    if(this.hasSnaped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  unSnap() {
      this.faceSnap.removeSnap();
      this.iconStyle = "far";
      this.hasSnaped = false;
  }

  snap() {
    this.faceSnap.addSnap();
    this.iconStyle = "fas";
    this.hasSnaped = true;
  }

  get iconClass() {
    return `${this.iconStyle} fa-${this.buttonText}`;
  }

}

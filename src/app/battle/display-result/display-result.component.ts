import { Component, OnInit , Renderer2, ChangeDetectionStrategy , ChangeDetectorRef , Input , Output } from '@angular/core';

@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayResultComponent implements OnInit {
  moviesResult: any;
  constructor(private ref: ChangeDetectorRef) {
  }

  ngOnInit() {

  }

  populatePage() {
    this.ref.detectChanges();
  }
}

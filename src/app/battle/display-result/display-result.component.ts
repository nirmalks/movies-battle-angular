import { Component, OnInit , Renderer2, ChangeDetectionStrategy , ChangeDetectorRef , Input , Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayResultComponent implements OnInit {
  moviesResult: any;
  result: String;
  constructor(private ref: ChangeDetectorRef , iconRegistry: MatIconRegistry , sanitizer: DomSanitizer) {

  }

  ngOnInit() {

  }

  populatePage() {
    this.ref.detectChanges();
  }
}

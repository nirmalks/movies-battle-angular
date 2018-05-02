import { Component, OnInit , Renderer2, ChangeDetectionStrategy , ChangeDetectorRef , Input , Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayResultComponent implements OnInit{
  @Input('moviesResult') moviesResult: any;
  @Input('winner') winner: String;

  result: String;
  constructor(private ref: ChangeDetectorRef , private renderer: Renderer2 , private elRef: ElementRef) {

  }

  ngOnInit() {

  }

}

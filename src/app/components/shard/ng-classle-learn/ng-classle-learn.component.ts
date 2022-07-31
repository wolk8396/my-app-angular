import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-classle-learn',
  templateUrl: './ng-classle-learn.component.html',
  styleUrls: ['./ng-classle-learn.component.scss']
})
export class NgClassleLearnComponent implements OnInit {
  ChangeColorRed: boolean = false;
  ChangeColorBlue: boolean = false;
  borderColor: boolean = false;
  ColorYellow: boolean = false;

  constructor() { }

  @Input() getSomeTing: boolean;


  ngOnInit(): void {
  }

}

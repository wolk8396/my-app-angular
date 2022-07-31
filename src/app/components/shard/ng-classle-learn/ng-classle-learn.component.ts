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
  strBtn: string = 'Hide Frame';

  constructor() { }

  @Input() getSomeTing: boolean;


  ngOnInit(): void {
  }

  changeStr() {
    this.borderColor = !this.borderColor;

    (!this.borderColor) ? this.strBtn = 'Hide Frame' : this.strBtn = 'Show Frame';
  }
}

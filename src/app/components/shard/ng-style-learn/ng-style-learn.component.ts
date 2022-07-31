import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-learn',
  templateUrl: './ng-style-learn.component.html',
  styleUrls: ['./ng-style-learn.component.scss']
})
export class NgStyleLearnComponent implements OnInit {
  backgroundToggle: boolean = false;

  constructor() { }

  @Input() getSomeTing: boolean;

  ngOnInit(): void {
  }

}

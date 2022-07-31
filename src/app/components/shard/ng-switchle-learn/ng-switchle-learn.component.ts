import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switchle-learn',
  templateUrl: './ng-switchle-learn.component.html',
  styleUrls: ['./ng-switchle-learn.component.scss']
})
export class NgSwitchleLearnComponent implements OnInit {
  switch: boolean | number = false || 0;

  constructor() { }

  @Input() getSomeTing: boolean;


  ngOnInit(): void {
  }

}

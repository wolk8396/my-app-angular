import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-ifle-learn',
  templateUrl: './ng-ifle-learn.component.html',
  styleUrls: ['./ng-ifle-learn.component.scss']
})
export class NgIfleLearnComponent implements OnInit {
  paragraph: boolean = false;

  @Input() getSomeTing: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}

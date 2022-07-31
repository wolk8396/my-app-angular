import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-syntax',
  templateUrl: './basic-syntax.component.html',
  styleUrls: ['./basic-syntax.component.scss']
})
export class BasicSyntaxComponent implements OnInit {


  switch: boolean | number = false || 0;
  menu: boolean = false;
  getBoolean1: any;

  constructor() {

  }

//  @Input() getBoolean: boolean;

  ngOnInit(): void {
  }

  getLearnEvenBindings(event: boolean) {
    this.getBoolean1 = event;
    console.log(event);

  }

  ClickMe(MyValue: boolean) {

  }
}

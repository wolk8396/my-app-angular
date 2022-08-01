import { Component, Input, OnInit } from '@angular/core';

export interface user {
  title: string,
  author: string,
  comments:{
    name: string,
    text: string
  }[]
}



@Component({
  selector: 'app-ng-for-learn',
  templateUrl: './ng-for-learn.component.html',
  styleUrls: ['./ng-for-learn.component.scss']
})
export class NgForLearnComponent implements OnInit {
  arr: Array<number> = [1, 1, 5, 8, 9, 10, 12];


  @Input() getSomeTing: boolean;

  objs:user[] = [
    {
      title: "Post 1",
      author:"Jack",
      comments: [
        {name: "Max",   text:"hello word"},
        {name: "Jack",   text:"hello word2"},
        {name: "Kate",   text:"hello word3"},
      ]
    },
    {
      title: "Post 2",
      author:"John",
      comments: [
        {name: "Max",   text:"Hi John"},
        {name: "Jack",   text:"How are you doing"},
        {name: "Kate",   text:"I am fine"},
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

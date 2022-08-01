import { Component, Input, OnInit } from '@angular/core';
import { todoPost } from '../../shard/interface/const';

@Component({
  selector: 'app-componentsin-detail',
  templateUrl: './componentsin-detail.component.html',
  styleUrls: ['./componentsin-detail.component.scss']
})
export class ComponentsinDetailComponent implements OnInit {

  post:todoPost[] = [];
  delete: todoPost[] =[]

  constructor() { }

  ngOnInit(): void {

  }

  getDate(array: todoPost) {
    this.post.push(array);
  }

  removeId(idTodo: string) {

    this.delete = this.post.filter((item) => item.id !== idTodo);

    this.post = this.delete;
  }

}

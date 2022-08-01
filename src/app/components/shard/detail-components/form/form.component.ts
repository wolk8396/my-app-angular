import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { todoPost } from '../../interface/const';
import * as uuid from 'uuid';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  array: todoPost;
  arrJoin: any;
  secondArr: todoPost[] = [];
  strTitle: string = '';
  strText: string = '';


  @Input() getDate:todoPost[];

  @Output() setDate = new EventEmitter<todoPost>();

  @ViewChild('TitleInput') inputRef: ElementRef

  constructor() { }

  ngOnInit(): void {}

  addArray(): void {

    if (this.strTitle.trim() && this.strText) {

      this.array =  {
        title: this.strTitle,
        text: this.strText,
        id: uuid.v4()
      }
    }


    this.setDate.emit(this.array);
    this.strText = this.strTitle = '';
  }

  FocusTitle() {
    this.inputRef.nativeElement.focus()
  }
}



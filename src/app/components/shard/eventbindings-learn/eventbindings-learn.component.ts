import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-eventbindings-learn',
  templateUrl: './eventbindings-learn.component.html',
  styleUrls: ['./eventbindings-learn.component.scss']
})
export class EventbindingsLearnComponent implements OnInit {
  inputValue: string = '';
  eventBinding: boolean = false;

  constructor() { }
  @Input() getSomeTing: boolean;

  @Output() newItemEvent = new EventEmitter<boolean>();
  // EventEmitter
  ngOnInit(): void {
    this.newItemEvent.emit(this.eventBinding);

  }

  onInput2 (event: Event) {
    this.inputValue = (<HTMLInputElement>event.target).value;
  }

  onBlur(str: string) {
    this.inputValue = str;
  }


  onClick() {
    this.getSomeTing =!this.getSomeTing
    console.log(this.getSomeTing);

  }
}

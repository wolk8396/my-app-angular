import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  OnChanges,
  SimpleChange,
  SimpleChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Output,
  EventEmitter
} from '@angular/core';
import { todoPost } from '../../interface/const';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{

  strTitle: string = '';

  @Input() getTodo:todoPost;
  @Output() onRemove = new EventEmitter<string>()
  @ContentChild('getElements') getEelRef: ElementRef;

  constructor() {
    console.log('constructor');
   }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes,'ngOnChanges');
  }

  ngDoCheck(): void {
    // console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    // console.log('AfterContentInit');

  }

  ngAfterContentChecked(): void {
    // console.log('AfterContentChecked');
  }

  ngAfterViewInit(): void {
    // console.log('AfterViewInit');

  }

  ngAfterViewChecked(): void {
    // console.log('AfterViewChecked');
  }

  ngOnDestroy() {

  }

  removeTodo() {
    this.onRemove.emit(this.getTodo.id);



    console.log(this.getTodo.id);

  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-run-page',
  templateUrl: './run-page.component.html',
  styleUrls: ['./run-page.component.scss']
})
export class RunPageComponent implements OnInit {
  // routes: any = routes;

  constructor(private routing: Router) { }

  ngOnInit(): void {
  }

  btn_detail() {
    this.routing.navigate(['detail']);
  }

  btn_main() {
    this.routing.navigate(['']);
  }

  btn_basicSyntax() {
    this.routing.navigate(['basic-syntax']);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  darkMode = false;

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}

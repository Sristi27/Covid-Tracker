import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

  @Input() data;

}

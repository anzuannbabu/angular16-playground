import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

export interface ChildComponentData {
  message:string
}

@Component({
  selector: 'app-about-child',
  templateUrl: './about-child.component.html',
  styleUrls: ['./about-child.component.scss'],
})
export class AboutChildComponent implements OnInit,OnDestroy {

  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.clicked.emit({ message: 'child component initialized' });
  }
  @Input() name!: string;

  @Output() clicked: EventEmitter<ChildComponentData> = new EventEmitter();

  onClickBtn() {
    //publish event
    this.clicked.emit({ message: 'this is message from the child component' });
  }
}

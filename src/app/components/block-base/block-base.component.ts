import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-block-base',
  template: `
    <p>
      block-base works!
    </p>
  `,
  styles: [
  ]
})
export class BlockBaseComponent {

  @Output() deleteItem:EventEmitter<number> = new EventEmitter();

  @Input() idx:number = 0;

  deleteMe()
  {
    this.deleteItem.emit(this.idx);
  }
}

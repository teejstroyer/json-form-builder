import { Component, Input } from '@angular/core';
import { Block } from 'src/app/models/block';

@Component({
  selector: 'app-json-dialog',
  templateUrl: './json-dialog.component.html',
  styleUrls: ['./json-dialog.component.css']
})
export class JsonDialogComponent {
  @Input()
  public root?: Block;
}

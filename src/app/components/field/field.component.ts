import { Component, Input } from '@angular/core';
import { Block } from 'src/app/models/block';
import { BlockBaseComponent } from '../block-base/block-base.component';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent extends BlockBaseComponent {
  @Input()
  public block!: Block;
}

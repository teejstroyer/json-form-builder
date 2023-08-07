import { Component, Input } from '@angular/core';
import { Block } from 'src/app/models/block';
import { BlockBaseComponent } from '../block-base/block-base.component';

@Component({
  selector: 'app-decorator',
  templateUrl: './decorator.component.html',
  styleUrls: ['./decorator.component.css']
})
export class DecoratorComponent extends BlockBaseComponent {
  @Input()
  public block!: Block;
}

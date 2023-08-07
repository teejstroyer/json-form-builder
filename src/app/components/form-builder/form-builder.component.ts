import { Component, Input } from '@angular/core';
import { BlockType } from 'src/app/enums/block-type';
import { Block } from 'src/app/models/block';
import { BlockBaseComponent } from '../block-base/block-base.component';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
})
export class FormBuilderComponent extends BlockBaseComponent {
  @Input()
  root!: Block;

  IsLayoutBlock(block: Block): boolean {
    return block.type === BlockType.Layout;
  }


  IsFieldBlock(block: Block): boolean {
    return block.type === BlockType.Field;
  }

  IsDecoratorBlock(block: Block): boolean {
    return block.type === BlockType.Decorator;
  }
}

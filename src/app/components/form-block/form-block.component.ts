import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BlockType } from 'src/app/enums/block-type';
import { DecoratorType } from 'src/app/enums/decorator-type';
import { FieldType } from 'src/app/enums/field-type';
import { LayoutType } from 'src/app/enums/layout-type';
import { Block } from 'src/app/models/block';
import { DecoratorBlock } from 'src/app/models/decorator-block';
import { FieldBlock } from 'src/app/models/field-block';
import { LayoutBlock } from 'src/app/models/layout-block';

@Component({
  selector: 'app-form-block',
  templateUrl: './form-block.component.html',
  styleUrls: ['./form-block.component.css']
})
export class FormBlockComponent {
  BlockType = BlockType;
  LayoutType = LayoutType;

  @Output() deleteItem: EventEmitter<string> = new EventEmitter();
  @Input() public block!: Block;
  @Input() public set connectedDropListsIds(ids: string[]) { this.allDropListsIds = ids; }
  allDropListsIds: string[] = [];

  deleteSelf() {
    this.deleteItem.emit(this.block.uId);
  }

  isLayoutBlock(block: Block): boolean {
    return block.type === BlockType.Layout;
  }


  isFieldBlock(block: Block): boolean {
    return block.type === BlockType.Field;
  }

  isDecoratorBlock(block: Block): boolean {
    return block.type === BlockType.Decorator;
  }

  drop(event: CdkDragDrop<Block[] | undefined>) {

    if (event.previousContainer === event.container) {
      if (event.container.data === undefined) {
        event.container.data = [];
      }
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (event.previousContainer.data === undefined) {
        event.previousContainer.data = [];
      }
      if (event.container.data === undefined) {
        event.container.data = [];
      }
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  addField() {
    if (this.block.children) {
      this.block.children.push(new FieldBlock("field", FieldType.Text));
    }
    else {
      this.block.children = [new FieldBlock("field", FieldType.Text)];
    }
  }

  addDecorator() {
    if (this.block.children) {
      this.block.children.push(new DecoratorBlock("decorator", DecoratorType.Text));
    }
    else {
      this.block.children = [new DecoratorBlock("decorator", DecoratorType.Text)];
    }
  }

  addColumn() {
    if (this.block.children) {
      this.block.children.push(new LayoutBlock("layout", LayoutType.Column));
    }
    else {
      this.block.children = [new LayoutBlock("layout", LayoutType.Column)];
    }
  }

  addRow() {
    if (this.block.children) {
      this.block.children.push(new LayoutBlock("layout", LayoutType.Row));
    }
    else {
      this.block.children = [new LayoutBlock("layout", LayoutType.Row)];
    }
  }

  removeChild(id: string) {
    if (this.block.children) {
      const index = this.block.children.findIndex(x => x.uId === id);
      this.block.children.splice(index, 1);
    }
  }

  toggleType() {
    if (this.block.layoutType === LayoutType.Column) {
      this.block.layoutType = LayoutType.Row;
    }
    else {
      this.block.layoutType = LayoutType.Column;
    }
  }

}

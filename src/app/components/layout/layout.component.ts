import { Component, Input } from '@angular/core';
import { DecoratorType } from 'src/app/enums/decorator-type';
import { FieldType } from 'src/app/enums/field-type';
import { LayoutType } from 'src/app/enums/layout-type';
import { Block } from 'src/app/models/block';
import { DecoratorBlock } from 'src/app/models/decorator-block';
import { FieldBlock } from 'src/app/models/field-block';
import { LayoutBlock } from 'src/app/models/layout-block';
import { BlockBaseComponent } from '../block-base/block-base.component';
import { BlockType } from 'src/app/enums/block-type';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent extends BlockBaseComponent {
  @Input()
  public block!: Block;

  IsRowBlock(): boolean {
    return this.block.layoutType === LayoutType.Row;
  }

  IsColumnBlock(): boolean {
    return this.block.layoutType === LayoutType.Column;
  }

  AddField() {
    if (this.block.children) {
      this.block.children.push(new FieldBlock("field", FieldType.Text));
    }
    else {
      this.block.children = [new FieldBlock("field", FieldType.Text)];
    }
  }

  AddDecorator() {
    if (this.block.children) {
      this.block.children.push(new DecoratorBlock("decorator", DecoratorType.Text));
    }
    else {
      this.block.children = [new DecoratorBlock("decorator", DecoratorType.Text)];
    }
  }

  AddColumn() {
    if (this.block.children) {
      this.block.children.push(new LayoutBlock("layout", LayoutType.Column));
    }
    else {
      this.block.children = [new LayoutBlock("layout", LayoutType.Column)];
    }
  }

  AddRow() {
    if (this.block.children) {
      this.block.children.push(new LayoutBlock("layout", LayoutType.Row));
    }
    else {
      this.block.children = [new LayoutBlock("layout", LayoutType.Row)];
    }
  }

  RemoveChild(index: number) {
    if (this.block.children) {
      this.block.children.splice(index, 1);
    }
  }

  ToggleType() {
    if (this.block.layoutType === LayoutType.Column) {
      this.block.layoutType = LayoutType.Row;
    }
    else {
      this.block.layoutType = LayoutType.Column;
    }
  }


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

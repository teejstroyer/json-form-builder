import { BlockType } from "../enums/block-type";
import { DecoratorType } from "../enums/decorator-type";
import { FieldType } from "../enums/field-type";
import { LayoutType } from "../enums/layout-type";
import { Block } from "./block";
import * as uuid from 'uuid';

export class LayoutBlock implements Block {
  label: string = "";
  type: BlockType = BlockType.Layout;
  decoratorType?: DecoratorType | undefined;
  fieldType?: FieldType | undefined;
  layoutType?: LayoutType | undefined;
  children: Block[] = [];
  uId: string;

  constructor(label: string, layoutType: LayoutType, children?: Block[]) {
    this.label = label;
    this.layoutType = layoutType;
    this.children = children || [];
    this.uId = uuid.v4();
  }
}

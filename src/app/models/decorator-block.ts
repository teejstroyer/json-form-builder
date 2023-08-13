import { BlockType } from "../enums/block-type";
import { DecoratorType } from "../enums/decorator-type";
import { FieldType } from "../enums/field-type";
import { LayoutType } from "../enums/layout-type";
import { Block } from "./block";
import * as uuid from 'uuid';

export class DecoratorBlock implements Block {
  label: string = "";
  type: BlockType = BlockType.Decorator;
  decoratorType?: DecoratorType | undefined;
  fieldType?: FieldType | undefined;
  layoutType?: LayoutType | undefined;
  children?: Block[];
  uId: string;

  constructor(label: string, decoratorType: DecoratorType) {
    this.label = label;
    this.decoratorType = decoratorType;
    this.uId = uuid.v4();
  }
}

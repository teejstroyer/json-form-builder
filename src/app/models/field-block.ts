import { BlockType } from "../enums/block-type";
import { DecoratorType } from "../enums/decorator-type";
import { FieldType } from "../enums/field-type";
import { LayoutType } from "../enums/layout-type";
import { Block } from "./block";

export class FieldBlock implements Block {
  label: string = "";
  type: BlockType = BlockType.Field;
  decoratorType?: DecoratorType | undefined;
  fieldType?: FieldType | undefined;
  layoutType?: LayoutType | undefined;
  children?: Block[] | [];

  constructor(label: string, fieldType: FieldType) {
    this.label = label;
    this.fieldType = fieldType;
  }
}

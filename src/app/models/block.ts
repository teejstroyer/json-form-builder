import { BlockType } from "../enums/block-type";
import { DecoratorType } from "../enums/decorator-type";
import { FieldType } from "../enums/field-type";
import { LayoutType } from "../enums/layout-type";

export interface Block {
  label: string,
  type: BlockType,
  decoratorType?: DecoratorType,
  fieldType?: FieldType,
  layoutType?: LayoutType,
  children?: Block[]
  uId: string
}

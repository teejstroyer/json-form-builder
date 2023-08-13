import { Component, Input, OnInit } from '@angular/core';
import { Block } from 'src/app/models/block';
import { BlockType } from 'src/app/enums/block-type';
import { LayoutBlock } from 'src/app/models/layout-block';
import { LayoutType } from 'src/app/enums/layout-type';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { JsonDialogComponent } from './json-dialog/json-dialog.component';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
})
export class FormBuilderComponent implements OnInit {

  @Input() template?: Block;
  block: Block = new LayoutBlock("root", LayoutType.Column, []);

  ngOnInit(): void {
    this.block = this.template ?? new LayoutBlock("root", LayoutType.Column, []);
  }

  get connectedDropListsIds(): string[] {
    return this.getIdsRecursive(this.block).reverse();
  }

  constructor(private dialog: MatDialog) { }


  showJSON() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    var dialog = this.dialog.open(JsonDialogComponent, dialogConfig);
    dialog.componentInstance.root = this.block;
  }

  getIdsRecursive(block: Block): string[] {
    if (!block) {
      return [];
    }

    let ids = [block.uId];

    for (let b of block?.children ?? []) {
      if (b.type === BlockType.Layout) {
        ids = ids.concat(this.getIdsRecursive(b));
      }
    }

    return ids;
  }
}

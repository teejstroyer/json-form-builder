import { Component } from '@angular/core';
import { Block } from './models/block';
import { LayoutType } from './enums/layout-type';
import { LayoutBlock } from './models/layout-block';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { JsonDialogComponent } from './components/form-builder/json-dialog/json-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'json-form-builder';
  public root: Block;

  constructor(private dialog: MatDialog) {
    this.root = new LayoutBlock("root", LayoutType.Column, []);
  }

  showJSON() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    var dialog = this.dialog.open(JsonDialogComponent, dialogConfig);
    dialog.componentInstance.root = this.root;
  }
}

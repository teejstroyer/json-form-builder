import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { MatButtonModule } from '@angular/material/button';
import { JsonDialogComponent } from './components/form-builder/json-dialog/json-dialog.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormBlockComponent } from './components/form-block/form-block.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    JsonDialogComponent,
    FormBlockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

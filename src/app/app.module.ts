import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './components/layout/layout.component';
import { DecoratorComponent } from './components/decorator/decorator.component';
import { FieldComponent } from './components/field/field.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import {MatButtonModule} from '@angular/material/button';
import { JsonDialogComponent } from './components/form-builder/json-dialog/json-dialog.component';
import { BlockBaseComponent } from './components/block-base/block-base.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DecoratorComponent,
    FieldComponent,
    FormBuilderComponent,
    JsonDialogComponent,
    BlockBaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

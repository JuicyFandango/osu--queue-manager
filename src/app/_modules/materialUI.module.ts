import { NgModule } from '@angular/core'
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MdButtonModule } from '@angular/material'
import { MdSnackBarModule } from '@angular/material'
import { MdCardModule } from '@angular/material'
import { MdDialogModule } from '@angular/material'
import { MdIconModule } from '@angular/material'
import { MdListModule } from '@angular/material'
import { MdInputModule } from '@angular/material'
import { MdCheckboxModule } from '@angular/material'
import { MdToolbarModule } from '@angular/material'
import { MdTooltipModule } from '@angular/material'
import { MdChipsModule } from '@angular/material'

@NgModule({
  imports: [
    MdButtonModule,
    MdCardModule,
    MdSnackBarModule,
    MdDialogModule,
    MdIconModule,
    MdListModule,
    MdInputModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdTooltipModule,
    MdChipsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
  ],
  exports: [
    MdButtonModule,
    MdCardModule,
    MdSnackBarModule,
    MdDialogModule,
    MdIconModule,
    MdListModule,
    MdInputModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdTooltipModule,
    MdChipsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
  ],
})

export class MaterialUIModule { }

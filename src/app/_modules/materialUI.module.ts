import { NgModule } from '@angular/core'
import { FlexLayoutModule } from "@angular/flex-layout";

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
    FlexLayoutModule,
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
    FlexLayoutModule,
  ],
})

export class MaterialUIModule { }

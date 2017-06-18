import { NgModule } from '@angular/core'

import { MdButtonModule } from '@angular/material'
import { MdSnackBarModule } from '@angular/material'
import { MdCardModule } from '@angular/material'
import { MdDialogModule } from '@angular/material'
import { MdIconModule } from '@angular/material'
import { MdListModule } from '@angular/material'
import { MdInputModule } from '@angular/material'
import { MdCheckboxModule } from '@angular/material'
import { MdToolbarModule } from '@angular/material'

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
  ],
})

export class MaterialUIModule { }

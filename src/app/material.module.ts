import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

const MATERIAL_MODULES = [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule
];
@NgModule({
  imports: [
      ...MATERIAL_MODULES
  ],
  exports: [
      ...MATERIAL_MODULES
  ]
})
export class MaterialModule { }

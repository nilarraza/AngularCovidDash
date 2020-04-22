import { NgModule } from '@angular/core';
import {MatTableModule, MatButtonModule, MatCardModule} from '@angular/material';


const MaterialComponents=[
  MatTableModule,
  MatButtonModule,
  MatCardModule
]

@NgModule({
 
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }

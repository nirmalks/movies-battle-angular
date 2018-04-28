import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material';
@NgModule({
  imports: [MatToolbarModule , MatCardModule , FlexLayoutModule , MatInputModule , MatIconModule],
  exports: [MatToolbarModule , MatCardModule , FlexLayoutModule , MatInputModule , MatIconModule ]
})
export class MaterialModule {}

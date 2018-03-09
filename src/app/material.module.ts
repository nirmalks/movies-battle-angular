import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
@NgModule({
  imports: [MatToolbarModule , MatCardModule , FlexLayoutModule],
  exports: [MatToolbarModule , MatCardModule , FlexLayoutModule]
})
export class MaterialModule {}

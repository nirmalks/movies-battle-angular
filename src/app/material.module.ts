import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [MatToolbarModule , MatCardModule , FlexLayoutModule , MatInputModule ],
  exports: [MatToolbarModule , MatCardModule , FlexLayoutModule , MatInputModule ]
})
export class MaterialModule {}

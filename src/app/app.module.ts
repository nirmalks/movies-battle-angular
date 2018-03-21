import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BattleComponent } from './battle/battle.component';
import { RoutingModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './movies/movies.service';
import { StoreModule } from '@ngrx/store';
import { MoviesReducer } from './reducers/movie.reducers';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects} from './effects/movie.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    BattleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ movies: MoviesReducer }),
    EffectsModule.forRoot([MovieEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25})
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

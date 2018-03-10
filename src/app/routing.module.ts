import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {BattleComponent} from './battle/battle.component';
const appRoutes: Routes = [
  { path: '' , component : HomepageComponent},
  { path: 'battle' , component : BattleComponent},
  // { path: '**', component: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class RoutingModule {}

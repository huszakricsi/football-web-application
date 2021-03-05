import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionComponent } from './competition/competition.component';
import { CompetitionsComponent } from './competitions/competitions.component';

const routes: Routes = [
  { path: '',                component: CompetitionsComponent },
  { path: 'competition/:id', component: CompetitionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionsComponent } from './competitions/competitions.component';
import { DetailedCompetitionComponent } from './detailed-competition/detailed-competition.component';

const routes: Routes = [
  { path: '',                component: CompetitionsComponent },
  { path: 'competition/:id', component: DetailedCompetitionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

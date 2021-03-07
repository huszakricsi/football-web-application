import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { CompetitionComponent } from './components/competition/competition.component';
import { EventComponent } from './components/event/event.component';

const routes: Routes = [
  { path: '',                                          component: CompetitionsComponent },
  { path: 'competition/:competitionId',                component: CompetitionComponent  },
  { path: 'competition/:competitionId/match/:matchId', component: EventComponent        }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

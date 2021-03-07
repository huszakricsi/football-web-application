import Competition from "./competition";
import Odds from "./odds";
import Referee from "./referee";
import Score from "./score";
import Season from "./season";
import Team from "./team";

export default interface Match {
    competition: Competition;
    awayTeam: Team;
    group: string;
    homeTeam: Team;
    id: number;
    lastUpdated: Date;
    matchday: number;
    odds: Odds;
    referees: Referee[];
    score: Score;
    season: Season;
    stage: string;
    status: string;
    utcDate: Date;
    venue: string;
  }
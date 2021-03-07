import TeamHead2Head from "./team-head-2-head";

export default interface Head2Head {
    homeTeam: TeamHead2Head;
    awayTeam: TeamHead2Head;
    numberOfMatches: number;
    totalGoals: number;
  }
import TeamPenaltyInfos from "./team-penalty-infos";
import TeamScoreInfos from "./team-score-infos";

export default interface Score {
    duration: string;
    extraTime: TeamScoreInfos;
    fullTime: TeamScoreInfos;
    halfTime: TeamScoreInfos;
    penalties: TeamPenaltyInfos;
    winner: string;
  }
import Competition from "./competition";
import Match from "./match";

export default interface MatchesRequestResult {
    competition: Competition;
    count: number;
    filter: any;
    matches: Match[];
  }  
import Competition from "./competition";

export default interface CompetitionsRequestResult {
    competitions: Competition[];
    count: number;
    filter: any;
  }
  
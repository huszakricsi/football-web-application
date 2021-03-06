import Area from "./area";
import Season from "./season";

export default interface Competition {
    area: Area;
    code: string;
    currentSeason: Season;
    emblemUrl: string;
    id: number;
    lastUpdated: Date;
    name: string;
    numberOfAvailableSeasons: number;
    plan: string;
  }
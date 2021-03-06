export interface CompetitionRequestResult {
  competition: Competition;
  count: number;
  filter: any;
}

export interface CompetitionsRequestResult {
  competitions: Competition[];
  count: number;
  filter: any;
}

export interface Competition {
  area: Area;
  code: string;
  currentSeason: CurrentSeason;
  emblemUrl: string;
  id: number;
  lastUpdated: string;
  name: string;
  numberOfAvailableSeasons: number;
  plan: string;
}

export interface Area {
  countryCode: string;
  ensignUrl: string;
  id: number;
  name: string;
}

export interface CurrentSeason {
  currentMatchday: string;
  endDate: string;
  id: number;
  startDate: string;
  winner: string;
}

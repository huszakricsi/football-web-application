import Winner from "./winner";

export default interface Season {
    currentMatchday: string;
    endDate: Date;
    id: number;
    startDate: Date;
    winner: Winner;
  }
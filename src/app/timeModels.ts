export class TimeWorkingModels {
  timeStart: TimeModels = { hour: null, minute: null };
  timeEnd: TimeModels = { hour: null, minute: null };
  timeFrom: TimeModels = { hour: null, minute: null };
  timeTo: TimeModels = { hour: null, minute: null };
}

export interface TimeModels {
  hour: number | null;
  minute: number | null;
}

export interface DaySelected {
  daySelect: string[];
  row: number;
}

export interface Reminder {
  text: string;
  id: number;
  listId: number;
  date: string;
  done: boolean;
  flagged: boolean;
  marked: boolean;
  inFlaggedList: boolean;
  inTodayList: boolean;
}

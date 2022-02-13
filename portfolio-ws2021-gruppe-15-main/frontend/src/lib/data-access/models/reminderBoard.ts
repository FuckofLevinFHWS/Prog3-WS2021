import {reminderList} from './reminderList';

export interface reminderBoard {
  reminderLists: reminderList[];
  flagCount: number;
  todayCount: number;
}

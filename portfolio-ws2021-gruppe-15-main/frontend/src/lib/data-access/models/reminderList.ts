import { Reminder } from "./reminder";

export interface reminderList {
  name: string;
  id: number;
  reminders: Reminder[];
  counts: number;
}

import {reminderList} from './reminderList';
import {Reminder} from './reminder';

export class reminderBoard{
  title: string;
  reminderLists : reminderList[] = [];
  selected: Reminder;
  id: number = 1;
  date: string;
  flagCount: number = 0;
  todayCount: number = 0;

  constructor(){
    this.title = "Reminder-Board";
    this.date = new Date().toISOString().split('T')[0];     //<- mach so statt dem ewig langem String
  }

  createList(): reminderList{
    let newReminderList: reminderList = new reminderList(this.reminderLists.length);
    this.reminderLists.push(newReminderList);
    return newReminderList;
  }

  deleteList(id: number): void{
    let i: number = this.getListPosition(id);
    if(i != -1) {
      this.reminderLists[i].getReminders().forEach( (current) => {
        if(current.getFlag()){
          this.setFlagCount(-1);
        }
      })
      this.reminderLists[i].getReminders().forEach( (current ) => {
        if(current.getDate() == this.getDate()){
          this.setTodayCount(-1);
        }
      })
      this.reminderLists.splice(i, 1);
    }
  }

  getListPosition(id: number): number{
    for(let i = 0; i < this.reminderLists.length; i++){
      if(id == this.reminderLists[i].getId()){
        return i;
      }
    }
    return -1;
  }

  getLists(): reminderList[]{
    return this.reminderLists;
  }

  getDate(): string{
    return this.date;
  }

  getReminder(): Reminder{
    return this.selected;
  }

  setReminder(selRem: Reminder): void{
    this.selected = selRem;
  }

  getFlagCount(): number{
    return this.flagCount;
  }

  setFlagCount(change: number): void{
    this.flagCount = this.flagCount + change;
  }

  getTodayCount(): number{
    return this.todayCount;
  }

  setTodayCount(change: number): void{
    this.todayCount = this.todayCount + change;
  }

  //older 3
}


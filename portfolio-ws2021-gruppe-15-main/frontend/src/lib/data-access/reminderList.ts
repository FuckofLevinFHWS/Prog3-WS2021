import { Reminder } from "./reminder";

export class reminderList{
  name: string;
  id: number;
  reminders: Reminder[] = [];
  open: boolean = false;
  selected: boolean = false;

  static counts: number = 0;


  constructor(counted: number){
    this.name = "";
    this.id = counted;
  }

  addReminder(): Reminder{
    let reminder: Reminder = new Reminder(reminderList.counts++);
    this.reminders.push(reminder);
    return reminder;
  }

  removeReminder(id: number):void{
    this.reminders.splice(this.getReminderPosition(id), 1);
  }

  getId(): number{
    return this.id;
  }

  getReminderPosition(id: number): number{
    for(let i = 0; i < this.reminders.length; i++){
      if(id == this.reminders[i].getId()){
        return i;
      }
    }
    return -1;
  }

  setName(newName: string): void{
    this.name = newName;
  }

  getName(): string{
    return this.name;
  }

  getID(): number{
    return this.id;
  }

  getReminders(): Reminder[] {
    return this.reminders;
  }

  getReminder(number: number): Reminder{
    return this.reminders[number];
  }

  isOpen(): boolean{
    return this.open;
  }

  isMarked(): boolean{
    return this.selected;
  }



  //hier muss noch ne openList-Methode hin die Liste angezeigt wird und das open Boolean auf true gesetzt wird
  //vlt vor dem öffnen der neuen Liste alle Listen durchgehen um des was schon offen is zu schließen aka open bool auf flase machen?

}

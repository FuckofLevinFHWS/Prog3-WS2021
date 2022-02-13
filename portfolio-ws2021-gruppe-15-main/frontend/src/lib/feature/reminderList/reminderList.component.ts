import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { reminderList } from "src/lib/data-access/models/reminderList";
import { Reminder} from '../../data-access/models/reminder';
import {BackendService} from "../../data-access/services/backend.service";

@Component({
  selector:'list',
  templateUrl: './reminderList.component.html',
  styleUrls: ['./reminderList.component.scss'],
})
export class ReminderListComponent implements OnInit {
  @Input() reminderListObject: reminderList;
  @Input() selectedOnCreate: boolean;
  @Output() deleteListEvent = new EventEmitter<any>();
  @Output() flagCountListEvent = new EventEmitter<number>();
  @Output() dateCountListEvent = new EventEmitter<number>();

  showTrash: boolean = false;
  selectedObject: Reminder;

  constructor(private backendService: BackendService) {}

  ngOnInit(): void {

  }

  hoverEvent(): void {
    this.showTrash = true;
  }

  mouseOutEvent(): void {
    this.showTrash = false;
  }

  /*
  createReminder(): void{
    let reminder: Reminder = {text:"",id: this.reminderListObject.counts++,date: null,done: false, flagged: false, marked: false, inFlaggedList: false, inTodayList: false}
    this.reminderListObject.reminders.push(reminder);
  }
   */

  deleteList(): void{
    this.deleteListEvent.emit(this.reminderListObject.id);
  }

  getReminderPosition(id: number): number{
    for(let i = 0; i < this.reminderListObject.reminders.length; i++){
      if(id == this.reminderListObject.reminders[i].id){
        return i;
      }
    }
    return -1;
  }

  deleteReminder(id: number):void{
    let position: number = this.getReminderPosition(id);
    if(this.reminderListObject.reminders[position].flagged){
      this.flagCountChange(-1);
    }
    let today: Date = new Date;
    if(this.reminderListObject.reminders[position].date == today.toISOString().split('T')[0]){
      this.dateCountChange(-1);
    }
    this.reminderListObject.reminders.splice(position, 1);

    this.backendService.deleteReminder(this.reminderListObject.id, id);
  }

  flagCountChange(change: number): void{
    this.flagCountListEvent.emit(change);
  }

  dateCountChange(change: number): void{
    this.dateCountListEvent.emit(change);
  }

  reminderChange(rem: Reminder): void{
    this.backendService.putReminder(this.reminderListObject.id, rem).subscribe();
  }
}

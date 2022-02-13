import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { reminderBoard } from "src/lib/data-access/models/reminderBoard";
import {Reminder} from '../../data-access/models/reminder';
import { reminderList } from '../../data-access/models/reminderList';
import {BackendService} from "../../data-access/services/backend.service";

@Component({
  selector: 'board',
  templateUrl: './reminderBoard.component.html',
  styleUrls: ['./reminderBoard.component.scss'],
})

export class ReminderBoardComponent implements OnInit {
  @Input() color: string ='#333';
  @Output() newClickEvent = new EventEmitter<any>();
  @Output() selectListEvent = new EventEmitter<number>()
  boardObject: reminderBoard;
  listObject: reminderList;
  extraHere: boolean = false;

  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
      this.backendService.loadBoard().subscribe((Board) => (this.boardObject= Board));
  }

  createNewList(): void{
    let newReminderList: reminderList = {name:"NeueListe",id: 0, reminders: [], counts: 0};
    this.boardObject.reminderLists.push(newReminderList);
    this.backendService.createList(newReminderList).subscribe((reminderList) => {
      newReminderList.name= reminderList.name;
      newReminderList.id = reminderList.id;
    });
  }

  addReminder(list: reminderList): void{
    let newReminder: Reminder = {text:"",id: 0,listId:list.id , date: "",done: false, flagged: false, marked: false, inFlaggedList: false, inTodayList: false};
    this.listObject.reminders.push(newReminder);
    this.backendService.createReminder(list.id ,newReminder).subscribe((Reminder) => {
      newReminder.id = Reminder.id;
    })
  }

  deleteList(id: number): void{
    let listdeleted: Boolean = false;
    let today: string = new Date().toISOString().split('T')[0];
    let i: number = this.getListPosition(id);
    if(i != -1) {
      this.boardObject.reminderLists[i].reminders.forEach( (current) => {
        if(current.flagged){
          this.boardObject.flagCount--;
        }
      })
      this.boardObject.reminderLists[i].reminders.forEach( (current ) => {
        if(current.date == today){
          this.boardObject.todayCount--;
        }
      })

      if(this.listObject.id == id){
        listdeleted = true;
      }
      this.boardObject.reminderLists.splice(i, 1);
    }

    if(listdeleted){
      if(this.boardObject.reminderLists.length == 0){
        this.listObject = null;
      }else{
        this.listObject = this.boardObject.reminderLists[0];
      }
    }
    this.backendService.deleteList(id);
  }

  getListPosition(id: number): number{
    for(let i = 0; i < this.boardObject.reminderLists.length; i++){
      if(id == this.boardObject.reminderLists[i].id){
        return i;
      }
    }
    return -1;
  }

  replaceList(): reminderList{
    if(this.boardObject.reminderLists.length != 0){
      return this.boardObject.reminderLists[0];
    }else{
      return null;
    }
  }

  selectList(event: any): void{
    this.extraHere = false;
    this.listObject = event;
    this.listObject.reminders.forEach( (element3) =>{
      element3.inFlaggedList = false;
      element3.inTodayList = false;
    })
    this.backendService.getReminder(this.listObject.id).subscribe( (reminderList) => (this.listObject.reminders = reminderList));
  }


  showFlagged(): void{
    this.extraHere = true;
    let flagList: reminderList = {name:"Flaglist",id: 0, reminders: [],  counts: 0}
    this.boardObject.reminderLists.forEach( (element) =>{
      element.reminders.forEach( (element2) => {
        if(element2.flagged){
          flagList.reminders.push(element2)
        }
      })
    })
    flagList.reminders.forEach( (element3) =>{
      element3.inFlaggedList = true;
    })
    this.listObject = flagList;
  }

  showToday(){
    this.extraHere = true;
    let today: string = new Date().toISOString().split('T')[0];
    let todayList: reminderList = {name:"Todaylist",id: 0, reminders: [], counts: 0};
    this.boardObject.reminderLists.forEach( (element) =>{
      element.reminders.forEach( (element2) => {
        if(element2.date == today){
          todayList.reminders.push(element2)
        }
      })
    })
    todayList.reminders.forEach( (element3) =>{
      element3.inTodayList = true;
    })
    this.listObject = todayList;
  }
}

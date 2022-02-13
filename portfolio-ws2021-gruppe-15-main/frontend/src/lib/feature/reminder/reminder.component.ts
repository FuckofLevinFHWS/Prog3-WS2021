import {AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { Reminder } from "src/lib/data-access/models/reminder";
import {BackendService} from "../../data-access/services/backend.service";

@Component({
  selector: 'reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss'],
})
export class ReminderComponent implements AfterViewInit{
  @Input() reminderObject: Reminder;
  @Input() selectedOnCreate: boolean = true;
  @Output() clickDeleteEvent = new EventEmitter<number>();
  @Output() flagCountEvent = new EventEmitter<number>();
  @Output() dateCountEvent = new EventEmitter<number>();
  @Output() changeEvent = new EventEmitter<Reminder>();

  @ViewChild('reminderInput') reminderInput: ElementRef

  //constructor(private backendService: BackendService) {}

  ngAfterViewInit(): void {
    if(this.selectedOnCreate){
      this.reminderInput.nativeElement.focus();
    }
  }

  editText(newText: any): void {
    this.reminderObject.text = newText.target.value;
    this.changeEvent.emit(this.reminderObject)
  }

  editFlag(){
    if(this.reminderObject.flagged == false){
      this.reminderObject.flagged = true;
      this.flagCountEvent.emit(1)
    }else{
      this.reminderObject.flagged = false;
      this.flagCountEvent.emit(-1);
    }
    this.changeEvent.emit(this.reminderObject);
  }

  editDate(event: any){
    let date: string = new Date().toISOString().split('T')[0];
    if(this.reminderObject.date == date){
      this.dateCountEvent.emit(-1);
    }
    this.reminderObject.date = event.target.value;
    if(this.reminderObject.date == date){
      this.dateCountEvent.emit(1);
    }
    this.changeEvent.emit(this.reminderObject);
    console.log(this.reminderObject.date);
  }

  markAsDone(): void{
    if(this.reminderObject.done == true){
      this.reminderObject.done = false;
    }else{
      this.reminderObject.done = true;
    }
    setTimeout( () => {
      if(this.reminderObject.done){
        this.clickDeleteEvent.emit(this.reminderObject.id);
      }
    }, 3000)
  }
}

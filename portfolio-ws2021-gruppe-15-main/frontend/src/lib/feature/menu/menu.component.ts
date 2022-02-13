import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { reminderBoard} from '../../data-access/models/reminderBoard';
import { reminderList } from "src/lib/data-access/models/reminderList";
import {BackendService} from "../../data-access/services/backend.service";

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

export class MenuComponent implements OnInit{
  @Input() boardObject: reminderBoard;
  @Output() showFlaggedEvent = new EventEmitter<any>()
  @Output() showTodayEvent = new EventEmitter<any>()
  @Output() newMenuEvent = new EventEmitter<any>();
  @Output() deleteListObjEvent = new EventEmitter<number>()
  @Output() selectListEvent = new EventEmitter<reminderList>()
  @Output() newListEvent = new EventEmitter<any>();

  ngOnInit(): void {

  }

  showFlagged(): void{
    this.showFlaggedEvent.emit();
  }

  selectToday(): void{
    this.showTodayEvent.emit();
  }

  deleteEvent(id: number): void {
    this.deleteListObjEvent.emit(id);
  }

  selectEvent(event: any): void{
    this.selectListEvent.emit(event);
  }

  newList():void{
    this.newListEvent.emit();
  }
}

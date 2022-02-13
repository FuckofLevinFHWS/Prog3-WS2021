import {Component, EventEmitter, Input, Output} from '@angular/core';
import {reminderBoard} from '../../data-access/reminderBoard';

@Component({
  selector:'todayButton',
  templateUrl:'./todayButton.component.html',
  styleUrls:['./todayButton.component.scss'],
})

export class todayButtonComponent {
  @Input() boardObject: reminderBoard;
  @Output() newTodayEvent = new EventEmitter<any>();

  selectToday(): void {
    this.newTodayEvent.emit();
  }
}

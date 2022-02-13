import {Component, EventEmitter, Input, Output} from '@angular/core';
import {reminderBoard} from '../../data-access/reminderBoard';

@Component({
  selector: 'flagButton',
  templateUrl: './flagButton.component.html',
  styleUrls:['./flagButton.component.scss'],
})

export class flagButtonComponent {
  @Input() boardObject: reminderBoard;
  @Output() newFlagEvent = new EventEmitter<any>();

  showFlagged(){
    this.newFlagEvent.emit()
  }
}

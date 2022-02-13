import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'addReminderButton',
  templateUrl: './addReminderButton.component.html',
  styleUrls: ['./addReminderButton.component.scss'],
})

export class addReminderButtonComponent {
  @Output() newReminderEvent = new EventEmitter<any>();

  clickEvent(): void{
    this.newReminderEvent.emit();
  }
}

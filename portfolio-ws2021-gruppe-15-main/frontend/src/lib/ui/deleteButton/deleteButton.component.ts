import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector:'deleteButton',
  templateUrl:'./deleteButton.component.html',
  styleUrls:['./deleteButton.component.scss'],
})

export class deleteButtonComponent {
  @Output() newDeleteEvent = new EventEmitter<any>();

  clickEvent(): void {
    this.newDeleteEvent.emit();
  }
}

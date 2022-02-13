import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector:'addListButton',
  templateUrl:'./addListButton.component.html',
  styleUrls: ['./addListButton.component.scss'],
})

export class addListButtonComponent {
  @Output() newListEvent = new EventEmitter<any>();

  clickEvent(): void{
    this.newListEvent.emit();
  }
}

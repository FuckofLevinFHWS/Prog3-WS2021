import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector:'markButton',
  templateUrl:'./markButton.component.html',
  styleUrls:['./markButton.component.scss']
})

export class markButtonComponent {
  @Output() newClickEvent = new EventEmitter<any>()

  clickEvent(): void{
    this.newClickEvent.emit();
  }
}

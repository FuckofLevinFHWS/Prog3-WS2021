import {Component, EventEmitter, Input, Output, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { reminderList} from '../../data-access/models/reminderList';
import {BackendService} from "../../data-access/services/backend.service";

@Component({
  selector: 'listObject',
  templateUrl: './listObject.component.html',
  styleUrls: ['./listObject.component.scss'],
})

export class listObjectComponent implements AfterViewInit{
  @Input() reminderListRef: reminderList;
  @Input() selectedOnCreate: boolean = true;
  @Output() newListObjEvent = new EventEmitter<any>()
  @Output() deleteListObjEvent = new EventEmitter<number>()
  @Output() selectListEvent = new EventEmitter<reminderList>();

  @ViewChild('myInput') myInput: ElementRef;

  showDelete: boolean = false;

  constructor(private backendService: BackendService) {}

  ngAfterViewInit() {
    if(this.selectedOnCreate) {
      this.myInput.nativeElement.focus();
    }
  }

  deleteEvent(): void{
    this.deleteListObjEvent.emit(this.reminderListRef.id)
  }

  selectEvent(): void{
    this.selectListEvent.emit(this.reminderListRef)
  }

  hoverEvent(){
    this.showDelete = true;
  }

  mouseOutEvent(){
    this.showDelete = false;
  }

  editName(newText: any){
    this.reminderListRef.name = newText.target.value;
    this.backendService.putList(this.reminderListRef).subscribe((reminderlist) => {
      this.reminderListRef.name = reminderlist.name;
      })
  }
}

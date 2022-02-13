import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {combineAll, Observable} from 'rxjs';
import {Reminder} from "../models/reminder";
import {reminderBoard} from "../models/reminderBoard";
import {reminderList} from "../models/reminderList";

@Injectable({
  providedIn: 'root',
})

export class BackendService{
  readonly url: string = 'http://localhost:4200'

  constructor(private httpClient: HttpClient) {}

  loadBoard(): Observable<reminderBoard> {
    return this.httpClient.get<reminderBoard>(this.url + '/api/board')
  }

  createList(list: Partial<reminderList>): Observable<reminderList> {
    let listLoad = {
        "name": list.name
    };
    return this.httpClient.post<reminderList>(this.url + '/api/board/MemoryLists', listLoad);
  }

  putList(list: Partial<reminderList>): Observable<reminderList> {
    let listload = {
      ...list
    };
    return this.httpClient.put<reminderList>(this.url + '/api/board/MemoryLists/' + list.id, listload);
  }

  deleteList(listId: number): void {
    this.httpClient.delete<void>(this.url + '/api/board/MemoryLists/' + listId).subscribe();
  }

  createReminder(listId: number, newReminder: Partial<Reminder>): Observable<Reminder> {
    let remLoad = {
      "content":newReminder.text,
      "date": newReminder.date,
      "flagged": newReminder.flagged
    };
    return this.httpClient.post<Reminder>(this.url + '/api/board/MemoryLists/'+ listId + '/Memories', remLoad);
  }

  getReminder(listId: number): Observable<Reminder[]> {
    return this.httpClient.get<Reminder[]>(this.url + '/api/board/MemoryLists/'+ listId + '/Memories');
  }

  putReminder(listId: number ,putRem: Partial<Reminder>): Observable<Reminder>{
    let remLoad ={
      "content":putRem.text,
      "date": putRem.date,
      "flagged": putRem.flagged
    };
    return this.httpClient.put<Reminder>(this.url + '/api/board/MemoryLists/'+ listId + '/Memories/' + putRem.id ,remLoad);
  }

  deleteReminder(listId: number, reminderId: number): void {
    this.httpClient.delete<void>(this.url + '/api/board/MemoryLists/'+ listId + '/Memories/' + reminderId).subscribe();
  }
}

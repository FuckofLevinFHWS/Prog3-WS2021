import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenuComponent } from 'src/lib/feature/menu/menu.component';
import { ReminderComponent } from 'src/lib/feature/reminder/reminder.component';
import { ReminderBoardComponent } from 'src/lib/feature/reminderBoard/reminderBoard.component';
import { ReminderListComponent } from 'src/lib/feature/reminderList/reminderList.component';
import { addListButtonComponent } from 'src/lib/ui/addListButton/addListButton.component';
import { addReminderButtonComponent } from 'src/lib/ui/addReminderButton/addReminderButton.component';
import { deleteButtonComponent } from 'src/lib/ui/deleteButton/deleteButton.component';
import { flagButtonComponent } from 'src/lib/ui/flagButton/flagButton.component';
import { listObjectComponent } from 'src/lib/ui/listObject/listObject.component';
import { todayButtonComponent } from 'src/lib/ui/todayButton/todayButton.component';
import { markButtonComponent } from '../lib/ui/markButton/markButton.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    ReminderBoardComponent,
    ReminderListComponent,
    ReminderComponent,
    MenuComponent,
    todayButtonComponent,
    flagButtonComponent,
    addListButtonComponent,
    addReminderButtonComponent,
    deleteButtonComponent,
    listObjectComponent,
    markButtonComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

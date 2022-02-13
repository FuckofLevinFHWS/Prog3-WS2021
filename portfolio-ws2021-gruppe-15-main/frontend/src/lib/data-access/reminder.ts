
export class Reminder{
  text: string;
  id: number;
  date: string;
  done: boolean;
  flagged: boolean;
  marked: boolean;
  inFlaggedList: boolean;
  inTodayList: boolean;

  constructor(count: number){
    this.text = "";
    this.id = count;
    this.date = null;
    this.done = false;
    this.flagged = false;
    this.marked = false;
    this.inFlaggedList = false;
    this.inTodayList = false;
  }

  setText(newText: string): void{
    this.text = newText;
  }

  getText(): string{
    return this.text;
  }

  getId(): number{
    return this.id;
  }

  setDate($event: any): void{
    this.date = $event;
  }

  getDate(): string{
    return this.date
  }

  getDone(): boolean{
    return this.done;
  }

  changeFlag(): void{
    if(this.flagged == false){
      this.flagged = true;
    }else{
      this.flagged = false;
    }
  }

  getFlag(): boolean{
    return this.flagged;
  }

  changeDone(): void{
    if(this.done == false){
      this.done = true;
    }else{
     this.done = false;
    }
  }

  changeMark(): void{
    if(this.marked == false){
      this.marked = true;
    }else{
      this.marked = false;
    }
  }

  setFlagList(bool: boolean):void {
    this.inFlaggedList = bool;
  }

  getFlagList(): boolean{
    return this.inFlaggedList;
  }

  setTodayList(bool: boolean): void{
    this.inTodayList = bool;
  }

  getTodayList(): boolean{
    return this.inTodayList;
  }

  //old 2
}

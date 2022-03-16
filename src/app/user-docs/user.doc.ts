export class UserDoc {
  name;
  date1;
  date2;
  bywho;

  constructor(name: String, date1: Date, date2: Date, bywho: string){
    this.name = name;
    this.bywho = bywho;
    this.date1 = date1;
    this.date2 = date2;
  }
};

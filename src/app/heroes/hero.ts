export enum Role {
    Offense = 1,
    Defense = 2 ,
    Tank = 3,
    Support = 4
}

export class Hero {
  id: number;
  name: string;
  role_id: string;
  role: object;
  constructor(theItem) {
    this.id = theItem.id;
    this.name = theItem.name;
    this.role_id = theItem.role_id;
    this.role = {
      id: theItem.role_id,
      name: Role[theItem.role_id]
    };
  }
  greet(): string {
    return "Hi, i'm " + this.name;
  }
}

import Person from "./Person";
import { requestAnimationFrame, config } from "./utils";

export default class PersonController {
  constructor() {
    this.persons = [];
    this.config = config;
    this.requestFrame(this.step);
  }
  addPerson(name) {
    this.persons.push(new Person(name, config));
  }
  step() {
    let i, j;
    for (i = 0; i < this.persons.length; i++) {
      for (j = i + 1; j < this.persons.length; j++) {
        this.persons[i].updateVelocity(this.persons[j]);
      }
      this.persons[i].step();
      //console.log(this.persons[i].x);
      //console.log(this.persons[i].y);
    }

    this.requestFrame(this.step);
  }
  requestFrame(func) {
    this.tid = requestAnimationFrame(() => func.call(this));
  }
}

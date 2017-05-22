import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  total = null;
  newValue = null;
  newName = null;

  items = [];

  add() {
    this.items.push({ value: this.newValue, name: this.newName });
    this.recalculate();
  }

  remove(index) {
    this.items.splice(index, 1);
    this.recalculate();
  }

  recalculate() {
    this.newValue = null
    this.newName = null
    var total = this.items.reduce(function (total, num) { return total + +num.value }, 0);
    this.items.forEach(function (el) {
      el.percent = el.value / total;
    })
    this.total = total;
  }

  changing(item) {
    item.beingEdited = true;
  }

  changed(item) {
    item.beingEdited = false;
    this.recalculate();
  }
}

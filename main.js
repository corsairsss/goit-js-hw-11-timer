'use strict';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  timeToEnd() {
    const time = this.targetDate.getTime() - new Date().getTime();
    this.days = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(
      2,
      '0',
    );
    this.mins = String(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    ).padStart(2, '0');
    this.hours = String(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    ).padStart(2, '0');
    this.secs = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(
      2,
      '0',
    );
  }
  changeCounter() {
    this.timeToEnd();
    const div = document.querySelector(this.selector);
    div.children[0].firstElementChild.textContent = this.days;
    div.children[1].firstElementChild.textContent = this.hours;
    div.children[2].firstElementChild.textContent = this.mins;
    div.children[3].firstElementChild.textContent = this.secs;
  }

  start() {
    setInterval(() => {
      this.changeCounter();
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('April, 25, 2020'),
});

timer.start();

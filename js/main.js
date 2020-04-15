'use strict';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  valueTimeToEnd() {
    const time = this.targetDate.getTime() - new Date().getTime();
    this.days = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(2,'0');
    this.mins = String(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    this.hours = String(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    this.secs = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(2,'0');
  }
  changeTimeCounter() {
    const containerTimer = document.querySelector(this.selector);
    containerTimer.querySelector('[data-value="days"]').textContent = this.days;
    containerTimer.querySelector('[data-value="hours"]').textContent = this.hours;
    containerTimer.querySelector('[data-value="mins"]').textContent = this.mins;
    containerTimer.querySelector('[data-value="secs"]').textContent = this.secs;
  }

  start() {
    setInterval(() => {
      this.valueTimeToEnd();
      this.changeTimeCounter();
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May, 3, 2020'),
});

timer.start();

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.scss']
})
export class DateTimeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const clock = document.querySelector('.clock');

    const tick = () => {
      const now = new Date();

      const h = now.getHours();
      const m = now.getMinutes();
      const s = now.getSeconds();
      const html =`
        <span>${h}</span> :
        <span>${m}</span> :
        <span>${s}</span>
      `;

      clock.innerHTML = html;

    };

    setInterval(tick, 1000);


    /*
    const before = new Date('February 1 2019 7:30:59');
    const now = new Date();

    console.log(now.getTime(), before.getTime());
    const diff = now.getTime() - before.getTime();
    console.log(diff);

    const mins = Math.round(diff / 1000 / 60);

    const hours = Math.round(mins / 60);
    const days = Math.round(hours / 24);


    console.log('minutes: ', mins);
    console.log('hours: ', hours);
    console.log('days: ', days);

    console.log(`the blog was written ${days} ago.`);

    // coverting timestamps into date objects

    const timestamp = 1565599488495;
    console.log(new Date(timestamp));
    */


    /*
    console.log(now);
    console.log(typeof now);
    console.log('getFullYear', now.getFullYear());
    console.log('getMonth', now.getMonth());
    console.log('getDate', now.getDate());
    console.log('getDay', now.getDay());
    console.log('getHours', now.getHours());
    console.log('getMinutes', now.getMinutes());
    console.log('getSeconds', now.getSeconds());

    //  timestamp
    console.log('timestamp:', now.getTime());

    // date strings
    console.log('Date String: ', now.toDateString());
    console.log('to time string: ', now.toTimeString());
    console.log('to local string: ', now.toLocaleString());
    */






  }
}

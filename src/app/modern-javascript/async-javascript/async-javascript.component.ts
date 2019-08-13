import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-async-javascript',
  templateUrl: './async-javascript.component.html',
  styleUrls: ['./async-javascript.component.scss']
})
export class AsyncJavascriptComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const key = 'TTuTKGyle89dOyekjpC3wwBuMtRjHdxz';

    // get weather information
    const getWeather = async (id: string) => {
      const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
      const query = `${id}?apikey=${key}`;

      const response = await fetch(base + query);
      const data = await response.json();
      return data[0];
    };


    // get city information
    const getCity = async (city: string) => {
      const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
      const query = `?apikey=${key}&q=${city}`;

      const response = await fetch(base + query);
      const data = await response.json();
      return data[0];
    };

    /*
    getCity('taipei')
      .then(data => {
        return getWeather(data.Key);
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => console.log(err));
      */

    const cityForm = document.querySelector('form');
    const card = document.querySelector('.card');
    const details = document.querySelector('.details');
    const time = document.querySelector('img.time');
    const icon = document.querySelector('.icon img');

    const updateUI = (data: any) => {
      /*
      const cityDets = data.cityDets;
      const weather = data.weather;
      */

      // destructure properites
      const { cityDets, weather } = data;
      console.log(weather);

      // update details template
      details.innerHTML = `
      <h5 class="my-3">${cityDets.EnglishName}</h5>
      <div class="my-3">${weather.WeatherText}</div>
      <div class="display-4 my-4">
          <span>${weather.Temperature.Metric.Value}</span>
          <span>&deg;C</span>
      </div>
      `;

      // update the night/ day & icon images
      const iconSrc = `assets/img/modern-javascript/weather/icons/${weather.WeatherIcon}.svg`
      icon.setAttribute('src', iconSrc);



      const timeSrc = weather.IsDayTime ? 'assets/img/modern-javascript/weather/day.svg' : 'assets/img/modern-javascript/weather/night.svg';




      time.setAttribute('src', timeSrc);

      // remove the d-none class if present
      if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
      }
    };

    const updateCity = async (city: string) => {
      const cityDets = await getCity(city);
      const weather = await getWeather(cityDets.Key);

      return {
        cityDets,
        weather
      };
    };

    cityForm.addEventListener('submit', e => {
      // prevent default action
      e.preventDefault();

      // get city value
      const city = cityForm.city.value.trim();
      cityForm.reset();

      // update the ui with new city
      updateCity(city)
        .then(data => {
          updateUI(data);
        })
        .catch(err => {
          console.log(err);
        });


    });







    /*

    const getTodos = async () => {
      const response = await fetch('assets/modern-javascript/shauns.json');
      if(response.status !== 200){
        throw new Error('cannot fetch the data');
      }
      const data = await response.json();
      return data;
    };

    getTodos()
      .then(data => console.log('resovled:', data))
      .catch(err => console.log('error:', err.message));


    /*
    fetch('assets/modern-javascript/shaun.json')
      .then(response => {
        console.log('response:', response);
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log('error:', err);
      });

    */


    /*
    const getTodos = (resource) => {
      return new Promise((resovle, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
          if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            resovle(data);
          } else if (request.readyState === 4) {
            reject('error gatting resource');
          }
        });
        // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
        request.open('GET', resource);
        request.send();
      });
    };

    getTodos('assets/modern-javascript/luigi.json')
      .then(data => {
        console.log('promise 1 resolved:', data);
        return getTodos('assets/modern-javascript/mario.json');
      })
      .then(data => {
        console.log('promise 2 resolved:', data);
        return getTodos('assets/modern-javascript/shaun.json');
      })
      .then(data => {
        console.log('promise 3 resolved:', data);
      })
      .catch(err => {
        console.log('promise rejected:', err);
      });

      */

    /*
    getTodos('assets/modern-javascript/luigi.json', (err: string, data: string) => {
      console.log(data);
      getTodos('assets/modern-javascript/mario.json', (err: string, data: string) => {
        console.log(data);
        getTodos('assets/modern-javascript/mario.json', (err: string, data: string) => {
          console.log(data);
        });
      });
    });
    */

    // promise example
    /*
    const getSomething = () => {
      return new Promise((resolve, reject) => {
        // fetch something
          resolve('some data');
       // reject('some error');
      });
    };

    getSomething()
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });

    getSomething().then((data) => {
      console.log(data);
    }, (err) => {
      console.log(err);
    });
    */


    /*
    console.log(1);
    console.log(2);

    setTimeout(() => {
      console.log('callback function fired');
    }, 2000);

    console.log(3);
    console.log(4);
    */
  }

}

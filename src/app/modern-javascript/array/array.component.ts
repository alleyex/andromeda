import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss']
})
export class ArrayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /*
    const scores = [10, 30, 15, 25, 50, 40, 5];
    const filterScores = scores.filter((score) => {
      return score > 20;
    });
    console.log(filterScores);
    */

    /*
    const users = [
      { name: 'shaun', premium: true },
      { name: 'yoshi', premium: false },
      { name: 'mario', premium: false },
      { name: 'chun-li', premium: true }
    ];
    const premiumUsers = users.filter(user => user.premium);
    console.log(premiumUsers);
    */

    /*
    const prices = [20, 10, 30, 25, 15, 40, 80, 5];
    const salePrices = prices.map(price => price / 2);
    console.log(salePrices);
    */

    /*
    const products = [
      { name: 'gold star', price: 20 },
      { name: 'mushroom', price: 40 },
      { name: 'green shells', price: 30 },
      { name: 'banana skin', price: 10 },
      { name: 'red shells', price: 50 },
    ];
    const saleProducts = products.map(product => {
      if (product.price > 30) {
        // product.price = product.price / 2;
        // return product;
        return { name: product.name, price: product.price / 2 };
      } else {
        return product;
      }
    });
    console.log(saleProducts, products);
    */


    /*
    const scores = [10, 20, 60, 40, 70, 90, 30];

    const result = scores.reduce((acc, curr) => {
      if (curr > 50) {
        acc++;
      }
      return acc;
    }, 0);

    console.log(result);
    */

    /*
    const scores = [
      { player: 'mario', score: 50 },
      { player: 'yoshi', score: 30 },
      { player: 'mario', score: 70 },
      { player: 'crystal', score: 60 },
      { player: 'mario', score: 50 },
      { player: 'yoshi', score: 30 },
      { player: 'mario', score: 70 },
      { player: 'crystal', score: 60 },
      { player: 'mario', score: 50 },
      { player: 'yoshi', score: 30 },
      { player: 'mario', score: 70 },
      { player: 'crystal', score: 60 },
      { player: 'mario', score: 50 },
      { player: 'yoshi', score: 30 },
      { player: 'mario', score: 70 },
      { player: 'crystal', score: 60 }
    ];

    const marioTotal = scores.reduce((acc, curr) => {
      if (curr.player === 'mario') {
        acc += curr.score;
      }
      return acc;
    }, 0);

    console.log(marioTotal);
    */

    /*
    const scores = [10, 5, 0, 40, 30, 10, 90, 70];
    const firstHighScore = scores.find(score => score > 50);
    console.log(firstHighScore);
    */


    /*
    const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

    names.sort();
    names.reverse();
    console.log(names);

    const scores = [10, 50, 20, 5, 35, 70, 45];
    // scores.sort();
    // scores.reverse();
    scores.sort((a, b) => b - a);
    console.log(scores);



    const palyers = [
      { name: 'mario', score: 20 },
      { name: 'luigi', score: 10 },
      { name: 'chun-li', score: 50 },
      { name: 'yoshi', score: 30 },
      { name: 'shaun', score: 70 }
    ];

    // palyers.sort((a, b) => {
    //   if (a.score > b.score) {
    //     return -1;
    //   } else if (b.score < a.score) {
    //     return 1;
    //   } else {
    //     return 0;
    //   }
    // });

    palyers.sort((a, b) => b.score - a.score);

    console.log(palyers);
    */


    /*
    const products = [
      { name: 'gold star', price: 20 },
      { name: 'mushroom', price: 40 },
      { name: 'green shells', price: 30 },
      { name: 'banana skin', price: 10 },
      { name: 'red shells', price: 50 },
    ];

    // const filtered = products.filter(product => product.price > 20);
    // const promos = filtered.map(product => {
    //   return `the ${product.name} is ${product.price / 2} pounds`;
    // });

    const promos = products
    .filter(product=> product.price > 20)
    .map(product => `the ${product.name} is ${product.price / 2} pounds`);

    console.log(promos);    
    */

    






  }

}

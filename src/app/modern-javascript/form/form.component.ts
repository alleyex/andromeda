import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const form = document.querySelector('.signup-form') as HTMLFormElement;
    // const username = document.querySelector('#username');
    const feedback = document.querySelector('.feedback') as HTMLElement;
    const usernamePattern = /^[a-zA-Z]{6,12}$/;

    form.addEventListener('submit', e => {
      e.preventDefault();
      const username = form.username.value;

      if (usernamePattern.test(username)) {
        feedback.textContent = 'that username is valid!';
      } else {
        feedback.textContent = 'username must contain letters only & be between 6 & 12 charators'
      }


    });

    (form as HTMLFormElement).addEventListener('keyup', e => {
      console.log(e);
      // console.log((e.target as HTMLInputElement).value,  (form as HTMLFormElement).username.value);
      if (usernamePattern.test((e.target as HTMLInputElement).value)) {
        form.username.style.border = '2px solid limegreen';
      } else {
        form.username.style.border = '2px solid crimson';
      }
    });

    // const username = 'shaunpddd';
    // const pattern = /^[a-z]{6,}$/;

    // let result = pattern.test(username);
    // if(result){
    //   console.log('regex test passed :)');
    // } else{
    //   console.log('regex test failed :(');
    // }

    // let result = username.search(pattern);
    // console.log(result);

  }

}

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dom',
  templateUrl: './dom.component.html',
  styleUrls: ['./dom.component.scss']
})
export class DomComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    /*
    const para = document.querySelector('div > p');
    console.log(para);

    const paras = document.querySelectorAll('p');

    paras.forEach(para=>{
      console.log(para);
    })

    console.log(paras[2]);

    const errors = document.querySelectorAll('.error');
    console.log(errors);
    */

    // get an element ID
    /*
    const title = document.getElementById('page-title');
    console.log(title);
    */

    // get elements by their class name
    /*
    const errors = document.getElementsByClassName('error');
    console.log(errors);
    console.log(errors[0]);
    */

    //get elements by the tag name
    /*
    const paras = document.getElementsByTagName('p');
    console.log(paras);
    console.log(paras[1]);
    */

    // const para = document.querySelector('p');
    //console.log(para.innerText)
    // para.innerText += 'ninjas are awesome!';

    // const paras = document.querySelectorAll('p');
    // paras.forEach(para=>{
    //   console.log(para.innerText);
    //   para.innerText += ' new text';
    // })

    // const content = document.querySelector('.content');
    // console.log(content.innerHTML);
    // content.innerHTML += '<h2> THIS IS A NEW H2</h2>'

    // const people = ['mario', 'luigi', 'yoshi'];
    // people.forEach(person=>{
    //   content.innerHTML += `<p> ${person} </p>`
    // })

    // const link = document.querySelector('a');
    // console.log(link.getAttribute('href'));
    // link.setAttribute('href','https://www.thenetninja.co.uk');
    // link.innerText = 'TheNet Ninja Website';

    // const mssg = document.querySelector('p');
    // console.log(mssg.getAttribute('class'));
    // mssg.setAttribute('class','success');
    // mssg.setAttribute('style','color:green');

    // const title = document.querySelector('h1');

    // title.setAttribute('style','margin:50px;');
    // console.log(title.style);
    // console.log(title.style.color);
    // title.style.margin = '50px';
    // title.style.color= 'crimson';
    // title.style.fontSize= '60px';
    // title.style.margin= '';

    // const content = document.querySelector('p');
    // console.log(content.classList);
    // content.classList.add('error');
    // content.classList.remove('error');
    // content.classList.add('success');

    // const paras = document.querySelectorAll('p');
    // paras.forEach(p => {
    //   if (p.textContent.includes('error')) {
    //     p.classList.add('error');
    //   }

    //   if (p.textContent.includes('success')) {
    //     p.classList.add('success');
    //   }
    // });

    // const title = document.querySelector('.title')
    // title.classList.toggle('title');
    // title.classList.toggle('test');

    // const article = document.querySelector('article');
    // console.log(article.children);
    // console.log(Array.from(article.children));
    // Array.from(article.children).forEach(child => {
    //   child.classList.add('aritcle-element');
    // });

    // const title = document.querySelector('h2');
    // console.log(title.parentElement);
    // console.log(title.parentElement.parentNode);
    // console.log(title.nextElementSibling);
    // console.log(title.previousElementSibling);

    // chaining
    // console.log(title.nextElementSibling.parentElement.children)

    // const button = document.querySelector('button');
    // button.addEventListener('click',()=>{
    //   console.log('you are cliked me!');
    // })

    // const ul = document.querySelector('ul');
    // ul.remove();

    // const button = document.querySelector('button');
    // button.addEventListener('click', () => {
    //   // ul.innerHTML +='<li> something new </li>'
    //   const li = document.createElement('li');
    //   li.textContent = 'sonething new to do.';
    //   // ul.append(li);
    //   ul.prepend(li);

    // });

    // const items = document.querySelectorAll('li');

    // items.forEach(item => {
    //   item.addEventListener('click', e => {
    // console.log('item clicked')
    // console.log(e);
    // console.log(e.target);
    // console.log(item);
    // item.style.textDecoration = 'line-through';
    //  (e.target as HTMLElement).style.textDecoration = 'line-through';
    //     console.log('event in LI');
    //     e.stopPropagation();
    //     (e.target as HTMLElement).remove();
    //   });
    // });

    // ul.addEventListener('click', e => {
    //   const li = (e.target as HTMLElement);
    //   if (li.tagName === 'LI') {
    //     li.remove();

    //   }
    //   // (e.target as HTMLElement).remove();
    // });

    const button = document.querySelector('button');
    const popup = document.querySelector('.popup-wrapper');
    const close = document.querySelector('.popup-close');

    button.addEventListener('click', () => {
      (popup as HTMLElement).style.display = 'block';      
    });

    close.addEventListener('click',()=>{
      (popup as HTMLElement).style.display = 'none';
    })



  }


}

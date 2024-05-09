 Click Here 
 https://stackblitz.com/edit/dom-project-chaiaurcode-jmvzyh?file=4-GuessTheNumber%2Findex.html,3-DigitalClock%2Fchaiaurcode.js

project - 1
 ``` JavaScript
  const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body');
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if(e.target.id==='grey'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='white'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='blue'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='yellow'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='green'){
      body.style.backgroundColor=e.target.id;
    }
  });
});


 ```

 project -2
 ``` Javscript
 const form = document.querySelector('form');
//this usecase will give you empty
// const height=parseInt (document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaa(height)) {
    results.innerHTML = `Please give a valid height ${height} `;
  }
});

 ```

 project -3
 ```JavaScript
 const clock=document.getElementById('clock')
// document.querySelector('#clock')

let date=new Date()


setInterval(function(){
  // console.log(date.toLocaleTimeString());
  clock.innerHTML=date.toLocaleTimeString()

},1000)

 ```
 project-4
 ```
 ```
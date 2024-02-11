const yes = document.querySelector('.yes');
const no = document.querySelector('.no');
const w1 = document.querySelector('.w-1');
const w2 = document.querySelector('.w-2');
let counter = 0
yes.addEventListener('click', () => {
    w1.style.display = 'none';
    w2.style.display = 'flex';
});

no.addEventListener('click', () => {    
 counter++;
 if(counter == 1){
    no.innerHTML = 'No (Are you sure?)';
    yes.style.height = '7rem';
    yes.style.width = '11rem';
    no.style.height = '4rem';
    no.style.width = '8rem';
    no.style.fontSize = '1rem'

 }
 else if(counter == 2){
    no.innerHTML = 'No (Really?)';
    yes.style.height = '8rem';
    yes.style.width = '12rem';
 }
 else if(counter == 3){
    no.innerHTML = 'No (Think again!)';
    yes.style.height = '9rem';
    yes.style.width = '12rem';
 }
 else if(counter == 4){
    no.innerHTML = 'Definitely Yes';
    yes.style.height = '9rem';
    yes.style.width = '12rem';
    no.style.height = '9rem';
    no.style.width = '12rem';
    no.style.backgroundColor = "#28a745"
 }
 else if(counter >= 5){
    w1.style.display = 'none';
    w2.style.display = 'flex';
 }

});
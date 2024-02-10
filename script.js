const yes = document.querySelector('.yes');
const no = document.querySelector('.no');
const w1 = document.querySelector('.w-1');
const w2 = document.querySelector('.w-2');
let counter = 0
yes.addEventListener('click', () => {
    w1.style.display = 'none';
    w2.style.display = 'block';
});

no.addEventListener('click', () => {    
 counter++;
 if(counter == 1){
    no.innerHTML = 'Are you sure?';
    yes.style.height = '25%';
    yes.style.width = '25%';
 }
 else if(counter == 2){
    no.innerHTML = 'Really?';
    yes.style.height = '50%';
    yes.style.width = '50%';
 }
 else if(counter == 3){
    no.innerHTML = 'Think again!';
    yes.style.height = '75%';
    yes.style.width = '75%';
 }
 else if(counter == 4){
    no.innerHTML = 'Definitely Yes';
    yes.style.height = '50%';
    yes.style.width = '50%';
    no.style.height = '50%';
    no.style.width = '50%';
 }
 else if(counter >= 5){
    w1.style.display = 'none';
    w2.style.display = 'block';
 }

});
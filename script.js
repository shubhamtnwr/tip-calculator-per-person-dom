let amntVal = 0;
let tip = 0;
let people = 0;

let Billinput = document.querySelector('.billboxinput');

Billinput.addEventListener('input', () => {
    amntVal = Number(Billinput.value);
});

let parentGrid = document.querySelector('#grid');

parentGrid.addEventListener('click', (events) => {
    if (Billinput.value == 0) {
        alert('enter a valid amount');
        return;
    }

    let tipAmnt = events.target.getAttribute("value");
    tip = (Billinput.value * tipAmnt) / 100;
});

let peopleInput = document.querySelector('.noofpeople');
let dollarsTip=document.querySelector('#tip-in-dollars');
let totalAmount=document.querySelector('#totalcalculated');
peopleInput.addEventListener('input', () => {
    people = Number(peopleInput.value);

    let tipPerPerson = tip / people;
    let totalPerPerson = (Number(Billinput.value) + tip) / people;
    dollarsTip.innerHTML = "$" + tipPerPerson.toFixed(2);
    totalAmount.innerHTML = "$" + totalPerPerson.toFixed(2);

});
let resetBtn = document.querySelector('button');

resetBtn.addEventListener('click', () => {
    Billinput.value = "";
    peopleInput.value = "";

    tip = 0;
    people = 0;
    amntVal = 0;

    dollarsTip.innerHTML = "$0.00";
    totalAmount.innerHTML = "$0.00";
});
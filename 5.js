let number=0;
let numberDisplay=document.querySelector("#num");
function increment()
{
    number=number+1;
    numberDisplay.innerHTML=number;
}
function decrement()
{
    number=number-1;
    numberDisplay.innerHTML=number;
}
function clr()
{
    number=0;
    numberDisplay.innerHTML=0;
}

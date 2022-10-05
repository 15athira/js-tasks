const sum = () => {
    const numberInput1 = document.getElementById("number1");
    const numberInput2 = document.getElementById("number2");
    const number1 = Number(numberInput1.value);
    const number2 = Number(numberInput2.value);
    const para = document.getElementById("para");
    para.innerHTML = number1+number2;
}
const sub = () => {
    const numberInput1 = document.getElementById("number1");
    const numberInput2 = document.getElementById("number2");
    const number1 = Number(numberInput1.value);
    const number2 = Number(numberInput2.value);
    const para = document.getElementById("para");
    para.innerHTML = number1-number2;
}
const pro = () => {
    const numberInput1 = document.getElementById("number1");
    const numberInput2 = document.getElementById("number2");
    const number1 = Number(numberInput1.value);
    const number2 = Number(numberInput2.value);
    const para = document.getElementById("para");
    para.innerHTML = number1*number2;
}
const div = () => {
    const numberInput1 = document.getElementById("number1");
    const numberInput2 = document.getElementById("number2");
    const number1 = Number(numberInput1.value);
    const number2 = Number(numberInput2.value);
    const para = document.getElementById("para");
    para.innerHTML = number1/number2;
}


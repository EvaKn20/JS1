const number1 = prompt('Введите первое число');
const number2 = prompt('Введите второе число');

if(number1 > number2) {
 alert('Большее число: ' + number1);
}
else if(number1 < number2){
    alert('Большее число: ' + number2);
    
}
else if(number1 == number2){
    alert('Нет наибольшего числа');  
}
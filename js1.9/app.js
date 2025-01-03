const question1 = prompt('Каков ваш балл за экзамен (от 0 до 100) ?');
const question2 = prompt('Ваше количество выполненных проектов (от 0 и больше) ?');
if(question1 > 90 || question2 > 10){
console.log(100);
}
else if (question1 > 75 && question2 >= 5){
console.log(90);
}
else if(question1 > 50 && question2 >= 2){
console.log(75);
}
else{
console.log(0);
}

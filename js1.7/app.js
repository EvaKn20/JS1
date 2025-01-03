const num1 = prompt('Введите первое число');
const num2 = prompt('Введите второе число');
if(!(num1 % num2)){
    console.log('Первое число кратное второму');
}
else if (num1 % num2){
    console.log('Первое число не кратное второму');
}
const average = prompt ('Каков ваш средний балл?')
if(average >= 1 && average <= 4){
    console.log('Двоечник, иди учись!');
}
else if (average >= 5 && average <= 8){
    console.log('Неплохо, но давай еще поднажмем!'); 
}
else if (average >= 9 && average <= 10){
    console.log('Ого, да ты настоящий отличник!'); 
}

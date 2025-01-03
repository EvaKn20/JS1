const days = +prompt('Введите количество дней, на которые нужно арендовать авто');
let discount;
if (days == 1 || days == 2) {
    discount = 40 * days;
}
else if (days >= 7) {
    discount = 40 * days - 50;
}
else if (days >= 3 && days < 7) {

    discount = 40 * days - 20;
}
alert('Общая стоимость аренды авто на ' + days + ' дней cоставляет $' + discount);
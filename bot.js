var arrRoll = ['1', '2', '3', '4', '5', '6', '7']; //Красные числа
var num1 = 0; //Номер ответа от рулетки
var num2 = 0; //Что выпало
var num3 = 1; //Ставка
var i = 0; //Для цикла
var b1 = true; //Проверка красного числа

num1 = $("#past :last").attr("data-rollid"); //Узнаем номер 
num1++; //Увеличиваем на единицу
$("#betAmount").val(num3); //Первоначальная ставка
//$(".btn.btn-danger.btn-lg.btn-block.betButton").click(); //Кнопка на красную
//$(".btn.btn-inverse.btn-lg.btn-block.betButton").click(); //Кнопка на чёрную

function roll() { //Функция которая будет в цикле
    if ($('div [data-rollid=' + num1 + ']').length > 0) { //Проверка на существование
        num2 = $('div [data-rollid=' + num1 + ']').text(); //Берем число которое выпало и помещаем в num2
        b1 = false; //Ставим значение на ложь
        for (i = 0; i < arrRoll.length; i++) {
            if (num2 === arrRoll[i]) { //Если ыпавшее число красное то ...
                $(".btn.btn-danger.betshort").click(); //Очищаем ставку
                $("#betAmount").val(num3); //Добавляем первоначальную ставку
                //$(".btn.btn-danger.btn-lg.btn-block.betButton").click(); //Кнопка на красную
                //$(".btn.btn-inverse.btn-lg.btn-block.betButton").click(); //Кнопка на чёрную
                b1 = true; //Число совпало
            }
        }
        if (!b1) {
            $(".input-btn.bet-buttons").find("button").eq(5).click(); //Если черная, то мы удваиваем ставку	
            //$(".btn.btn-danger.btn-lg.btn-block.betButton").click(); //Кнопка на красную
            //$(".btn.btn-inverse.btn-lg.btn-block.betButton").click(); //Кнопка на чёрную
        }
        num1++; //Если номер существует, то мы переносимся на след номер
    }
}

setInterval(roll, 5000); //Каждые 5-ть секунд делает запрос на главную функцию

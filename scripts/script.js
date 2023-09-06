document.getElementById('main_action-button').onclick = function () {
    document.getElementById('products').scrollIntoView({behavior: "smooth"}); // при нажатии на кнопку "Смотреть меню", страница медленно скролится на бургеры, где мы задали id="products"
}
let links = document.querySelectorAll('.menu_item > a');
console.log(links);
for(let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
        document.getElementById(links[i].getAttribute('data-link')).scrollIntoView({behavior: "smooth"}); // при нажатии на кнопку "Смотреть меню", страница медленно скролится на бургеры, где мы задали id="products"
    })
}

let buttons = document.getElementsByClassName('product_btn');
console.log(buttons);
for(let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById('order').scrollIntoView({behavior: "smooth"}); // при нажатии на кнопку "Смотреть меню", страница медленно скролится на бургеры, где мы задали id="products"
    }
}

const burger = document.getElementById('burger');
const nameUser = document.getElementById('name');
const phone = document.getElementById('phone');

document.getElementById('order_action').onclick = function() {
    let hasError = false;

    [burger, nameUser, phone].forEach(item => {
        if(!item.value) {
            item.parentElement.style.background = 'blue';
            hasError = true;
        } else {
            item.parentElement.style.background = '';
        }
    });

    // если ошибки не было то выводим сообщение на экран пользователя, при этом очищаем заполненные строки формы

    if(!hasError) {
        [burger, nameUser, phone].forEach(item => {
            item.value = '';
        });
        alert('Спасибо за заказ, мы скоросвяжемся с Вами!');
    }
}

let prices = document.getElementsByClassName('products_item-price');
console.log(prices);

document.getElementById('change-currency').onclick = function(event) {
    let currentCurrency = event.target.innerText; //получаем текущее значение валюты
    let newCurrency = '$';
    let coefficient = 1;


    if(currentCurrency === '$') { // если текущая валюта доллар, то пересчитываем в рубли
        newCurrency = '₽';
        coefficient = 95;
    } else if (currentCurrency === '₽') { // если текущая валюта рубли, то пересчитываем в белорусские рубли
        newCurrency = 'BYN';
        coefficient = 3;
    } else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    } else if (currentCurrency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }

    event.target.innerText = newCurrency; // меняем отображение валюты в кнопке Валюта

    for(let i = 0; i < prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute('data-base-price') * coefficient).toFixed(1) + ' ' + newCurrency;
    }
}
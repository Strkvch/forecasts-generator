/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

const forecastTitle = document.querySelector('.current-forecast h1');
const forecastText = document.querySelector('.current-forecast p');
const forecastButton = document.querySelector('.forecast-btn');
const container = document.querySelector('.current-forecast');
const list = document.querySelector('.forecasts');

forecastButton.addEventListener('click', generate);

function generate() {
    if (forecastTitle.textContent.length != 0) {
        let itemForecastDiv = makeForecastByTemplate(forecastTitle.textContent, forecastText.textContent);
        list.prepend(itemForecastDiv);
    }

    let randomNumber = getRandomIntInclusive(0, forecasts.length - 1);
    let randomPercent = getRandomIntInclusive(0, 100);

    let random = 'Вероятность: ' + randomPercent + '%';
    let randomForecast = forecasts[randomNumber];

    forecastTitle.textContent = randomForecast;
    forecastText.textContent = random;
}

let forecasts = ['Впереди – только приятные заботы и хлопоты!', 'Полученный опыт пригодится для достижения успеха', 'Завтра случится неприятное событие :(', 'Тебе сделают заманчивое и весьма неожиданное предложение ;)', 'Удача нагрянет к тебе неожиданно :)'];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const forecastTemplate = document.querySelector('#forecast-item');

function makeForecastByTemplate(title, text) {
    const itemForecast = forecastTemplate.content.cloneNode(true);

    itemForecast.querySelector('h3').textContent = title;
    itemForecast.querySelector('p').textContent = text;

    return itemForecast;
}
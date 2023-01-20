let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");
let currencyRateElement = document.querySelector(".js-currency");


let currencyEUR = 4.6946;
let currencyUSD = 4.3398;
let currencyCHF = 4.7005;


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyRateElement.value;

    let rate;

    switch (currency) {
        case "EUR":
            rate = currencyEUR;
            break;
        case "USD":
            rate = currencyUSD;
            break;
        case "CHF":
            rate = currencyCHF;
    }

    const result = amount * rate;

    resultElement.innerText = result.toFixed(2);

});
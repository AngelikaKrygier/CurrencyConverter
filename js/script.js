{
    const formElement = document.querySelector(".js-form");
    const amountElement = document.querySelector(".js-amount");
    const resultElement = document.querySelector(".js-result");
    const currencyRateElement = document.querySelector(".js-currency");
    const currency = currencyRateElement.value;


    const calculateResult = (currency) => {

        const currencyEUR = 4.6946;
        const currencyUSD = 4.3398;
        const currencyCHF = 4.7005;

        switch (currency) {
            case "EUR":
                return currencyEUR;
            case "USD":
                return currencyUSD;
            case "CHF":
                return currencyCHF;
        }
    }

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const amount = amountElement.value;
        const rate = calculateResult(currency)
        const result = amount * rate;

        resultElement.innerText = result.toFixed(2);

    });
}
// getting elements from DOM
const currOnePicker = document.getElementById('currency-one');
const currTwoPicker = document.getElementById('currency-two');
const currOneAmount = document.getElementById('amount-one');
const currTwoAmount = document.getElementById('amount-two');
const flipButton = document.getElementById("flip");
const rate = document.getElementById("rate");

// function to fetch exchange rate from API and update DOM
function calculate(){
    const currencyOneCode = currOnePicker.value;
    const currencyTwoCode = currTwoPicker.value;
    
    fetch(`https://v6.exchangerate-api.com/v6/64df51924f54b89bc52287c2/latest/${currencyOneCode}`)
        .then(res => res.json()) 
        .then( data => {
            //Get exchange rate from API Data
            const exchangeRate = data.conversion_rates[`${currencyTwoCode}`];
            
            // Display the conversion rate
            rate.innerText = `1 ${currencyOneCode} = ${exchangeRate}${currencyTwoCode}`;


            //Apply conversion rate and update amount.
            currTwoAmount.value = (currOneAmount.value * exchangeRate).toFixed(2);
        });
}

// Flip Function
function flip (){
    const placeholder = currOnepicker.value;    
        currOnePicker.value = currTwoPicker.value;
        currTwoPicker.value = placeholder.value;
}




// Event Listeners
currOnePicker.addEventListener('change',calculate);
currTwoPicker.addEventListener('change',calculate);
currOneAmount.addEventListener('input', calculate);
currTwoAmount.addEventListener('input', calculate);
flipButton.addEventListener('click',flip);
calculate();
// Getting DOM elements
const main = document.getElementById('main');
const addUserButton = document.getElementById('add-user');
const doubleMoneyButton = document.getElementById('double');
const showMillionairesButton = document.getElementById('show-millionaires');
const totalButton = document.getElementById('calculate-total');
const sortButton = document.getElementById('sort-richest');


//Initializing Data array
let data =[];

//Create Initial Users


//Function to Fetch Random user from API
// API: randomuser.me/api
async function generateRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json(); 

    const user = data.results[0];
    
    const newUser= {
        name : `${user.name.first} ${user.name.last}`,
        worth : Math.round(Math.random() * 1000000)
    }

    addData(newUser);
} 

// Add Newly Generated User into the Data Array.
function addData(newUser){
    data.push(newUser);
    updateDOM();
}

//function to update the UI
function updateDOM(inputData = data){
    
     main.innerHTML = '<h2><strong>Name</strong> +Net Worth</h2>';
     
     
     inputData.forEach( item => {
         // create a div
        const element = document.createElement('div');
        element.classList.add('name'); // give a class to an element.
        element.innerHTML = `<strong>${item.name}</strong>${currFormat(item.worth)}`;
        main.appendChild(element);
        });
            
}


//function to format number as currency.
function currFormat(num){
    
    return 'PKR ' + (num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// 2. function double the net worth.
function doubleWorth(){
    data = data.map( item => {
        return { ...item, worth: item.worth * 2 }
    });
    console.log(data);
    updateDOM(data);
}

//3.  Function to Sort the users by richest user.

function sortRichest(){
    data.sort(  (a,b) => b.worth - a.worth );
    updateDOM();
}

//4. Function to filter users and only show millionaires.

function showMillionaires(){
    data = data.filter(
        item => item.worth > 1000000 
    );

    updateDOM(data);
}

//5. Function to calculate total Net Worth.
function calculateNetWorth(){
    const totalWorth = data.reduce(
        (acc, item) => (acc += item.worth), 0
    );
    const totalNetWorthElement = document.createElement('div');
    totalNetWorthElement.innerHTML = `<h3>Total Net Worth: <strong>${currFormat(totalWorth)}</strong></h3>`;
    main.appendChild(totalNetWorthElement);
}

//Event Listeners
//1. Add user.
addUserButton.addEventListener('click',generateRandomUser);

//2. Double Money Event listener
doubleMoneyButton.addEventListener('click',doubleWorth);

//3. Sort Event Listener
sortButton.addEventListener('click',sortRichest);

//4. show millionaires event listener
showMillionairesButton.addEventListener('click',showMillionaires);

//5. Calculate total wealth Event listener.
totalButton.addEventListener('click',calculateNetWorth);
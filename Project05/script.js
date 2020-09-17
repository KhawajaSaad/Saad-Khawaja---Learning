// Getting DOM elements
const main = document.getElementById('main');
const addUserButton = document.getElementById('add-user');
const doubleMoneyButtom = document.getElementById('double');
const showMillionairesButton = document.getElementById('show-millionaires');
const totalButton = document.getElementById('calculate-total');

//Initializing Data array
let data = [];

//Create Initial Users
generateRandomUser();
generateRandomUser();
generateRandomUser();

//Function to Fetch Random user from API
// API: randomuser.me/api
async function generateRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    const user= data.results[0];
    console.log(user);
}
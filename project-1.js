let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"All that glitters is not gold."`,
    person:`- William Shakespeare`
},{
    quote: `"You must be the change you wish to see in the world."`,
    person:`- Mahatma Gandhi`
},
{
    quote: `"Well done is better than well said."`,
    person:`- Benjamin Franklin`
},

{
    quote: `"The only thing we have to fear is fear itself"`,
    person:`- Franklin D. Roosevelt`
},

{
    quote: `"It is during our darkest moments that we must focus to see the light."`,
    person:`- Aristotle`
},
{
    quote: `"Be yourself; everyone else is already taken."`,
    person:`- Oscar Wilde`
},
{
    quote: `"In the end, it's not the years in your life that count. It's the life in your years."`,
    person:`- Abraham Lincoln`
},
{
    quote: `"In this life we cannot do great things. We can only do small things with great love."`,
    person:`- Mother Teresa`
},
];

btn.addEventListener('click', function(){
let random = Math.floor(Math.random() * quotes.length);

quote.innerText = quotes[random].quote;
person.innerText = quotes[random].person;
})
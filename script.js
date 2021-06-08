// let quotes = [
//   `I live my life a quarter mile at a time`,
//   `I said a ten-second car, not a ten-minute car`,
//   `You can have any brew you want... as long as it's a Corona.`,
//   `You almost had me? You never had me - you never had your car!`,
//   `I don't have friends. I have family.`,
//   `It don't matter if you win by an inch or a mile. Winning's winning.`
// ];

document.addEventListener("DOMContentLoaded", function(event) {

  // Part 1
  function shortenTitle(){
    document.getElementById('main-title').innerHTML = 'I am Dom. This is my website';
  };
  shortenTitle();

//   // Part 2
function changeBackground(){
  const body = document.querySelector('body');
  body.style.backgroundColor = 'green';
};
changeBackground();
//   // Part 3

function removeListItem(){
  const list =document.getElementById('favorite-things');
  list.removeChild(list.lastElementChild);
};
 removeListItem();
 // Part 4
function sizeChange(){
  const special = document.querySelector('.special-title');
  special.style.fontSize = '2rem';
};
sizeChange();
//   // Part 5
function removeChicago(){
  const pastRaces =document.getElementById('past-races');
  (pastRaces.children[3].remove());
};
removeChicago();

//   // Part 6
function addCity(){
  const pastRaces = document.getElementById('past-races');
  const li = document.createElement('li');
  li.textContent = 'Miami';
  pastRaces.appendChild(li);
};
  addCity();

//   // Random quote of the day generator
  const randomQuote = function() {
    let quotes = new Array (
  quote[0]=`I live my life a quarter mile at a time`,
  quote[1]=`I said a ten-second car, not a ten-minute car`,
  quote[2]=`You can have any brew you want... as long as it's a Corona.`,
  quote[3]=`You almost had me? You never had me - you never had your car!`,
  quote[4]=`I don't have friends. I have family.`,
  quote[5]=`It don't matter if you win by an inch or a mile. Winning's winning.`
);
  document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
// };
  document.getElementById("quote-of-the-day") .value=quotes[quotes];
  window.onload = quotes;
  };
  randomQuote();
})
  // favorite = document.querySelector('#favorite-things > li:nth-child(6)');

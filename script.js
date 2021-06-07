let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Part 1
function shortenTitle(){
  const mainTitle = document.querySelector('#main-title');
  mainTitle.innerHTML = ('I am Dom. This is my website');
}

  // Part 2
function bgColor(){
  const body = document.querySelector('body');
  body.style.backgroundColor = 'pink';
}

  // Part 3
function removeListItem(){
  let list = document.getElementById('favorite-things');
  list.removeChild(list.lastElementChild);
}


  // Part 4
function sizeChange(){
  const speacial
}

.special-title{
  font-size: 2rem;
}
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;

    }
  randomQuote();
});

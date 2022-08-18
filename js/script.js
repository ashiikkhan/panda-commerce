console.log('hello ');
const allH2El = document.getElementsByTagName('h2');
for (let h2 of allH2El) {
  h2.style.color = '#409C9B';
}
// backpack backgorund
const backPack = document.getElementById('backpack');
backPack.style.backgroundColor = '#ffc10742';
// card border
const cards = document.getElementsByClassName('card');
for (let card of cards) {
  card.style.backgroundColor = '30px';
}
// id = 'buy-now-btn';
//remove the item with button click
const buyBtn = document.getElementById('buy-now-btn');
buyBtn.addEventListener('click', function (event) {
  console.log(event.target.parentNode);
});

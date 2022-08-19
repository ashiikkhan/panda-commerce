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
const buyBtns = document.getElementsByClassName('my-btn');
for (let buyBtn of buyBtns) {
  buyBtn.addEventListener('click', function (event) {
    event.target.parentNode.removeChild(event.target);
  });
}
// disable submit button :
const inputField = document.getElementById('exampleInputEmail1');
const submitBtn = document.getElementById('submit-btn');
inputField.addEventListener('keyup', function (event) {
  const inputText = event.target.value;
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (validRegex.test(inputText)) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', true);
  }
});

// image mouseeneter
// do ecommerce website prodocut gallery type zoom with js :
const images = document.getElementsByClassName('card-img-top');
for (let image of images) {
  image.addEventListener('mouseenter', function (event) {
    console.log(event.clientX, event.clientY);
    console.log(
      image.offsetHeight,
      image.offsetTop,
      image.offsetLeft,
      image.offsetWidth
    );
  });
}

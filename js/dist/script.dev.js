"use strict";

var cartBtn = document.querySelector('.button-cart');
var cart = document.getElementById('modal-cart');
var closeBtnt = cart.querySelector('.modal-close');
console.log(cart);
cartBtn.addEventListener('click', function () {
  cart.style.display = 'flex';
});
closeBtnt.addEventListener('click', function () {
  cart.style.display = '';
});
//# sourceMappingURL=script.dev.js.map
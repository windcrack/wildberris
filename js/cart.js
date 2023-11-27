const cart = function (){
    const cartBtn = document.querySelector('.button-cart');
    const cart = document.getElementById('modal-cart');
    const closeBtnt = cart.querySelector('.modal-close');

    console.log(cart);


    cartBtn.addEventListener('click', function(){
        cart.style.display = 'flex';
    });

    closeBtnt.addEventListener('click', function(){
        cart.style.display = '';
    });
}
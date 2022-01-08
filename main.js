// Making a counter

// set initial count
let count = 1;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
const decBtn = document.querySelector('.decrease');
let priceTag = document.querySelector('.price h2');
let price = 125;


//Counter function
btns.forEach(function(btn){
    btn.addEventListener('click',  (e)=>{
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        if(count <= 1){
            decBtn.classList.add('unactive');
        }
        else{
            decBtn.classList.remove('unactive');
        }
        value.textContent = count;
        // count*price
        let qtyPrice = count*price;
        price.textContent = priceTag;
        priceTag.innerHTML = '$' + qtyPrice + '.00';
        console.log(qtyPrice);
    });
});
//cart box
const cartBtn = document.querySelector('.cart');
const cart = document.querySelector('.cart-view');

cartBtn.addEventListener('click', ()=>{
    cart.classList.toggle('cart-active');
});

// Add to cart
const addToCart = document.querySelector('.add-btn');
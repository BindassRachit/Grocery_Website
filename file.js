const slider_script = document.querySelectorAll(".slider");
const product_script = document.querySelector(".product");
const right_btn = document.querySelector(".right_btn");
const left_btn = document.querySelector(".left_btn");
const product_buy = document.querySelectorAll(".product-buy-image");
let counter = 1;

right_btn.addEventListener("click", ()=>{
    if (counter < 3) {
        product_script.style.transform = `translateX(-${counter * 70}%)`;
        counter++;    
    } else {
        left_btn.disabled = false;
        // product_script.style.transform = `translateX(0%)`
        // counter = 2;     
    } 
})
left_btn.addEventListener("click", ()=>{
    if (counter > 1) {
        product_script.style.transform = `translateX(-${(counter-2) * 70}%)`;
        counter--;

    } else {
        product_script.style.transform=`translateX(-${(product_buy.length-1)*0}%)`;
        // counter=product_buy.length;
        left_btn.disabled = false;
    } 
})

// next slider 

const left_btn2 = document.querySelector(".left_btn2");
const right_btn2 = document.querySelector(".right_btn2");
const product_script2 = document.querySelector(".product2");
let counter2 = 1
right_btn2.addEventListener("click", ()=>{
    if (counter2 < 3) {
        product_script2.style.transform = `translateX(-${counter2 * 80}%)`;
        counter2++;    
    } else {
        right_btn2.disabled = false;
        // product_script2.style.transform = `translateX(0px)`
        // counter = 1;     
    } 
})
left_btn2.addEventListener("click", ()=>{
    if (counter2 > 1) {
        product_script2.style.transform = `translateX(-${(counter2-2) * 70}%)`;
        counter2--;

    } else {
        disabled = false;
        // product_script2.style.transform=`translateX(-${(product_buy.length-1) * 0}px)`;
        // counter=product_buy.length;
    } 
})
// script.js

// Simple Cart Logic using LocalStorage
function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(productName + " added to your cart.");
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let countElements = document.querySelectorAll('.cart-count');
    countElements.forEach(el => el.innerText = cart.length);
}

// Load Cart on Checkout Page
if (window.location.href.includes('checkout.html')) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let summaryDiv = document.getElementById('order-summary');
    
    if (cart.length > 0) {
        summaryDiv.innerHTML = "<h4>Your Order:</h4>";
        let total = 0;
        cart.forEach(item => {
            summaryDiv.innerHTML += `<div style="display:flex; justify-content:space-between; margin:10px 0;">
                <span>${item.name}</span>
                <span>QAR ${item.price}</span>
            </div>`;
            total += item.price;
        });
        summaryDiv.innerHTML += `<div style="border-top:1px solid #333; margin-top:10px; padding-top:10px; font-size:1.2rem; color:var(--gold);">
            Total: QAR ${total}
        </div>`;
    }
}

// Handle Order Submission
function placeOrder(e) {
    e.preventDefault();
    alert("Thank you! Your order has been placed. We will contact you on WhatsApp shortly for delivery.");
    localStorage.removeItem('cart');
    window.location.href = 'index.html';
}

// Run on page load
updateCartCount();
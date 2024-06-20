document.addEventListener('DOMContentLoaded', function() {
    const orderNowBtn = document.getElementById('order-now-btn');

    orderNowBtn.addEventListener('click', function(event) {
        event.preventDefault(); 
       
        window.location.href = 'menu.html';
    });
});

// add to cart
document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = document.querySelectorAll('.menu_btn');
    const sidebar = document.getElementById('sidebar');
    const cartItems = document.querySelector('.cart-Items');
    const cartTotal = document.querySelector('.cart-total');
    const sidebarCloseBtn = document.querySelector('.sidebar-close');
    const checkoutBtn = document.querySelector('.checkout-btn');
    const cartIcon = document.getElementById('cart-icon');
    const cartCount = document.querySelector('.icon span');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = parseFloat(localStorage.getItem('total')) || 0;

    const updateCartStorage = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('total', total.toFixed(2));
    };

    const renderCart = () => {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(itemElement);
        });
        cartTotal.textContent = `$${total.toFixed(2)}`;
        cartCount.textContent = cart.length;
    };

    const addToCart = (name, price) => {
        cart.push({ name, price });
        total += price;
        updateCartStorage();
        renderCart();
        openSidebar();
    };

    const openSidebar = () => {
        sidebar.style.display = 'block';
    };

    const closeSidebar = () => {
        sidebar.style.display = 'none';
    };

    // Event listener for menu buttons
    menuButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const itemName = button.getAttribute('data-item');
            const itemPrice = parseFloat(button.getAttribute('data-price'));
            addToCart(itemName, itemPrice);
        });
    });

    // Event listener for cart icon
    cartIcon.addEventListener('click', () => {
        if (sidebar.style.display === 'block') {
            closeSidebar();
        } else {
            openSidebar();
        }
    });

    // Event listener for sidebar close button
    sidebarCloseBtn.addEventListener('click', () => {
        closeSidebar();
    });

    // Event listener for checkout button
    checkoutBtn.addEventListener('click', () => {
        alert('Proceeding to checkout!');
        // Add further functionality for checkout process here
    });

    
    renderCart();
    closeSidebar();
});





document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reservationForm');
    const reserveBtn = document.querySelector('.Reserve_btn');

    if (form && reserveBtn) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 

           
            setTimeout(function() {
                reserveBtn.textContent = 'Successfully Reserved'; 
                reserveBtn.disabled = true; 
            }, 1000);
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const reservationForm = document.getElementById('reservationForm');
    const confirmationModal = document.getElementById('confirmationModal');
    const closeModal = document.querySelector('.close');
    const reserveBtn = document.querySelector('.Reserve_btn');
    const cartIcon = document.getElementById('cart-icon');
    const sidebar = document.getElementById('sidebar');
    const sidebarClose = document.querySelector('.sidebar-close');

    // Handle form submission
    reservationForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
       
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const amount = document.getElementById('amount').value;
        const order = document.getElementById('order').value;
        const address = document.getElementById('address').value;

       
       
        confirmationModal.style.display = 'block';

       
        reservationForm.reset();
    });

   
    closeModal.addEventListener('click', function() {
        confirmationModal.style.display = 'none';
    });

   
    cartIcon.addEventListener('click', function() {
        sidebar.style.display = 'block';
    });

  
    sidebarClose.addEventListener('click', function() {
        sidebar.style.display = 'none';
    });

  
    const checkoutBtn = document.querySelector('.checkout-btn');
    checkoutBtn.addEventListener('click', function() {
       
        console.log('Checkout button clicked');
    });

    
    const searchBtn = document.getElementById('search-btn');
    searchBtn.addEventListener('click', function() {
       
        console.log('Search button clicked');
    });

 
});











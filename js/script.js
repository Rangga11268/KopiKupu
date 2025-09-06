// Preloader
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    setTimeout(function() {
        preloader.classList.add('hidden');
    }, 500);
});

// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const hamburgerMenu = document.querySelector("#hamburger-menu");

document.addEventListener("click", function(e) {
    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
});

// Form validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const phone = this.querySelectorAll('input[type="text"]')[1].value;
        const message = this.querySelector('textarea').value;
        
        if (name && email && phone && message) {
            alert('Terima kasih! Pesan Anda telah terkirim.');
            this.reset();
        } else {
            alert('Mohon lengkapi semua field.');
        }
    });
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.padding = '1rem 7%';
        navbar.style.backgroundColor = 'rgba(1, 1, 1, 0.95)';
    } else {
        navbar.style.padding = '1.4rem 7%';
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    }
});

// Shopping cart functionality
let cart = [];

// Add to cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const name = this.getAttribute('data-name');
        const price = parseInt(this.getAttribute('data-price'));
        
        // Check if item already in cart
        const existingItem = cart.find(item => item.name === name);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                name: name,
                price: price,
                quantity: 1
            });
        }
        
        updateCartIcon();
        alert(`${name} telah ditambahkan ke keranjang!`);
    });
});

// Update cart icon with item count
function updateCartIcon() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// For demonstration purposes, let's show cart details when clicking the cart icon
document.querySelector('#shooping-cart').addEventListener('click', function(e) {
    e.preventDefault();
    
    if (cart.length === 0) {
        alert('Keranjang Anda kosong.');
        return;
    }
    
    let cartSummary = 'Isi Keranjang:\n\n';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        cartSummary += `${item.name} x ${item.quantity} = Rp. ${itemTotal.toLocaleString('id-ID')}\n`;
        total += itemTotal;
    });
    
    cartSummary += `\nTotal: Rp. ${total.toLocaleString('id-ID')}`;
    alert(cartSummary);
});
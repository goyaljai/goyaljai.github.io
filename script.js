const products = [
    {
        id: 1,
        name: "Royal Beige Limestone",
        type: "Limestone",
        images: [
            "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1599696847727-94485e978530?q=80&w=1000&auto=format&fit=crop"
        ],
        description: "A classic beige limestone with subtle fossil detailing. Perfect for creating warm, inviting interiors. Its natural non-slip surface makes it ideal for both living areas and bathrooms.",
        specs: ["Origin: Rajasthan", "Finish: Honed", "Thickness: 20mm", "Usage: Indoor/Outdoor"],
        price: 180,
        stock: 450,
        rating: 4.8
    },
    {
        id: 2,
        name: "Carrara White Marble",
        type: "Marble",
        images: [
            "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&w=1000&auto=format&fit=crop"
        ],
        description: "The epitome of luxury. Our Carrara White Marble features soft grey veining against a pristine white background. Each slab is a unique masterpiece of nature.",
        specs: ["Origin: Italy", "Finish: Polished", "Thickness: 18mm", "Usage: Indoor Only"],
        price: 450,
        stock: 1200,
        rating: 4.9
    },
    {
        id: 3,
        name: "Kota Blue",
        type: "Limestone",
        images: [
            "https://images.unsplash.com/photo-1621260857642-2777f6539552?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1519974719765-e6559e632b7b?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop"
        ],
        description: "A durable, cool-toned limestone known for its hardness and longevity. The blue-green hues add a touch of serenity to any space. Extremely popular for high-traffic areas.",
        specs: ["Origin: Kota, India", "Finish: Natural/Polished", "Thickness: 25mm", "Usage: Heavy Traffic"],
        price: 65,
        stock: 5000,
        rating: 4.5
    },
    {
        id: 4,
        name: "Black Galaxy Granite",
        type: "Granite",
        images: [
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1622372738946-a287d1434173?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1000&auto=format&fit=crop"
        ],
        description: "Star-like gold and silver flecks shine against a deep black background. This granite is incredibly dense and resistant to scratches, making it perfect for modern homes.",
        specs: ["Origin: Andhra Pradesh", "Finish: High Gloss", "Thickness: 18mm", "Usage: Countertops/Flooring"],
        price: 220,
        stock: 300,
        rating: 4.7
    },
    {
        id: 5,
        name: "Teakwood Sandstone",
        type: "Sandstone",
        images: [
            "https://images.unsplash.com/photo-1604147495798-57beb5d6af73?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1597211661940-ddf36269df71?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=1000&auto=format&fit=crop"
        ],
        description: "Resembling the texture of wood, this sandstone brings an organic, rustic charm. It features beautiful banding in shades of yellow and brown.",
        specs: ["Origin: India", "Finish: Sawn", "Thickness: 22mm", "Usage: Wall Cladding/Flooring"],
        price: 110,
        stock: 850,
        rating: 4.6
    },
    {
        id: 6,
        name: "Travertine Silver",
        type: "Travertine",
        images: [
            "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1594568284297-7c64464062b1?q=80&w=1000&auto=format&fit=crop"
        ],
        description: "A sophisticated silver-grey travertine with linear veining. Its porous nature gives it a unique texture, often filled for a smoother finish or left unfilled for a rustic look.",
        specs: ["Origin: Turkey", "Finish: Tumbled", "Thickness: 15mm", "Usage: Bathroom/Patio"],
        price: 320,
        stock: 150,
        rating: 4.8
    },
    {
        id: 7,
        name: "Mint White Sandstone",
        type: "Sandstone",
        images: [
            "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1000&auto=format&fit=crop"
        ],
        description: "A creamy white sandstone with minty green undertones. Perfect for pool decks and outdoor paving due to its non-slip properties.",
        specs: ["Origin: Gwalior", "Finish: Natural Split", "Thickness: 22mm", "Usage: Outdoor/Pool"],
        price: 95,
        stock: 600,
        rating: 4.4
    },
    {
        id: 8,
        name: "Steel Grey Granite",
        type: "Granite",
        images: [
            "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1622372738946-a287d1434173?q=80&w=1000&auto=format&fit=crop"
        ],
        description: "A consistent grey granite with small lighter grey flecks. A versatile choice for both commercial and residential projects.",
        specs: ["Origin: India", "Finish: Polished/Leather", "Thickness: 18mm", "Usage: Countertops/Flooring"],
        price: 160,
        stock: 800,
        rating: 4.6
    },
    {
        id: 9,
        name: "Rainforest Green Marble",
        type: "Marble",
        images: [
            "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1000&auto=format&fit=crop"
        ],
        description: "An exotic marble with a web of dark brown veins over a green background, resembling a forest map. A true statement piece.",
        specs: ["Origin: Rajasthan", "Finish: Polished", "Thickness: 18mm", "Usage: Wall Cladding/Tabletops"],
        price: 280,
        stock: 150,
        rating: 4.9
    },
    {
        id: 10,
        name: "Jaisalmer Yellow",
        type: "Limestone",
        images: [
            "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
        ],
        description: "Also known as Yellow Gold, this limestone brings the warmth of the desert sun to your floors. Very popular in heritage hotels.",
        specs: ["Origin: Jaisalmer", "Finish: Honed/Polished", "Thickness: 20mm", "Usage: Flooring/Cladding"],
        price: 140,
        stock: 300,
        rating: 4.7
    }
];

let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('productGrid');
    const modal = document.getElementById('productModal');
    const closeModalBtn = document.querySelector('.close-modal');
    const cartCount = document.getElementById('cartCount');
    const cartBtn = document.getElementById('cartBtn');
    const checkoutModal = document.getElementById('checkoutModal');
    const closeCheckoutBtn = document.querySelector('.close-checkout');
    const checkoutForm = document.getElementById('checkoutForm');

    // Modal Elements
    const modalGallery = document.getElementById('modalGallery');
    const modalTitle = document.getElementById('modalTitle');
    const modalType = document.getElementById('modalType');
    const modalDesc = document.getElementById('modalDesc');
    const modalSpecs = document.getElementById('modalSpecs');
    const modalPrice = document.getElementById('modalPrice');
    const modalStock = document.getElementById('modalStock');
    const modalAreaInput = document.getElementById('modalAreaInput');
    const modalTotalPrice = document.getElementById('modalTotalPrice');
    const btnAddToCart = document.getElementById('btnAddToCart');
    const btnWhatsApp = document.getElementById('btnWhatsApp');

    // Bidding Elements
    const bidInput = document.getElementById('bidInput');
    const btnSubmitBid = document.getElementById('btnSubmitBid');

    // Gallery Nav
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Filter Elements
    const filterBtns = document.querySelectorAll('.filter-btn');

    let currentProduct = null;

    // Render Products Function
    function renderProducts(filter = 'all') {
        productGrid.innerHTML = '';

        const filteredProducts = filter === 'all'
            ? products
            : products.filter(p => p.type === filter);

        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';

            // Low Stock Badge
            const stockBadge = product.stock < 500 ? '<span class="badge-low-stock">Low Stock</span>' : '';

            card.innerHTML = `
                <div class="card-image-wrapper">
                    ${stockBadge}
                    <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
                </div>
                <div class="card-info">
                    <div class="card-header">
                        <h3 class="card-title">${product.name}</h3>
                        <span class="card-price">₹${product.price}/sq.ft</span>
                    </div>
                    <p class="card-type">${product.type}</p>
                    <div class="card-rating">
                        ${getStarRating(product.rating)} <span class="rating-val">(${product.rating})</span>
                    </div>
                </div>
            `;

            card.addEventListener('click', () => openModal(product));
            productGrid.appendChild(card);
        });
    }

    function getStarRating(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let stars = '';
        for (let i = 0; i < fullStars; i++) stars += '★';
        if (hasHalfStar) stars += '½';
        return stars;
    }

    // Initial Render
    renderProducts();

    // Filter Event Listeners
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filterValue = btn.getAttribute('data-filter');
            renderProducts(filterValue);
        });
    });

    // Open Product Modal
    function openModal(product) {
        currentProduct = product;

        // Render Gallery
        modalGallery.innerHTML = '';
        product.images.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = product.name;
            modalGallery.appendChild(img);
        });

        modalTitle.textContent = product.name;
        modalType.textContent = product.type;
        modalDesc.textContent = product.description;
        modalPrice.textContent = `₹${product.price} / sq.ft`;

        // Stock Logic
        if (product.stock < 200) {
            modalStock.innerHTML = `<span class="text-danger">Only ${product.stock} sq.ft left! Hurry!</span>`;
        } else {
            modalStock.textContent = `In Stock: ${product.stock} sq.ft`;
        }

        // Reset Calculator & Bid
        modalAreaInput.value = 100;
        bidInput.value = '';
        updateTotalPrice();

        // Clear and populate specs
        modalSpecs.innerHTML = '';
        product.specs.forEach(spec => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>•</strong> ${spec}`;
            modalSpecs.appendChild(li);
        });

        updateWhatsAppLink();

        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('show'), 10);
        document.body.style.overflow = 'hidden';
    }

    function updateWhatsAppLink() {
        const message = `Hi Aangan, I'm interested in ${currentProduct.name}. Is it available?`;
        btnWhatsApp.href = `https://wa.me/919829039506?text=${encodeURIComponent(message)}`;
    }

    // Calculator Logic
    modalAreaInput.addEventListener('input', updateTotalPrice);

    function updateTotalPrice() {
        const area = parseInt(modalAreaInput.value) || 0;
        const total = area * currentProduct.price;
        modalTotalPrice.textContent = `₹${total.toLocaleString('en-IN')}`;
    }

    // Bidding Logic
    btnSubmitBid.addEventListener('click', () => {
        const bidAmount = parseInt(bidInput.value);
        if (!bidAmount || bidAmount <= 0) {
            alert("Please enter a valid bid amount.");
            return;
        }

        const message = `Hi Aangan, I want to place a bid of ₹${bidAmount}/sq.ft for ${currentProduct.name}. (Original Price: ₹${currentProduct.price}/sq.ft)`;
        window.open(`https://wa.me/919829039506?text=${encodeURIComponent(message)}`, '_blank');
    });

    // Add to Cart
    btnAddToCart.addEventListener('click', () => {
        const area = parseInt(modalAreaInput.value) || 0;
        if (area <= 0) {
            alert("Please enter a valid area.");
            return;
        }

        const item = {
            ...currentProduct,
            area: area,
            totalPrice: area * currentProduct.price
        };

        cart.push(item);
        updateCartCount();
        closeModal();
        alert(`${currentProduct.name} added to cart!`);
    });

    function updateCartCount() {
        cartCount.textContent = cart.length;
        cartCount.style.display = cart.length > 0 ? 'flex' : 'none';
    }

    // Cart / Checkout Flow
    cartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }
        openCheckout();
    });

    function openCheckout() {
        const cartItemsContainer = document.getElementById('cartItems');
        const cartTotalElement = document.getElementById('cartTotal');

        cartItemsContainer.innerHTML = '';
        let grandTotal = 0;

        cart.forEach((item, index) => {
            grandTotal += item.totalPrice;
            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.area} sq.ft x ₹${item.price}</p>
                </div>
                <div class="cart-item-price">₹${item.totalPrice.toLocaleString('en-IN')}</div>
            `;
            cartItemsContainer.appendChild(div);
        });

        cartTotalElement.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;

        checkoutModal.style.display = 'flex';
        setTimeout(() => checkoutModal.classList.add('show'), 10);
    }

    // Checkout Form Submission
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const btn = checkoutForm.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = "Processing...";
        btn.disabled = true;

        setTimeout(() => {
            alert("Order Placed Successfully! Thank you for shopping with Aangan.");
            cart = [];
            updateCartCount();
            closeCheckout();
            btn.textContent = originalText;
            btn.disabled = false;
            checkoutForm.reset();
        }, 2000);
    });

    // Close Modals
    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }

    function closeCheckout() {
        checkoutModal.classList.remove('show');
        setTimeout(() => {
            checkoutModal.style.display = 'none';
        }, 300);
    }

    closeModalBtn.addEventListener('click', closeModal);
    closeCheckoutBtn.addEventListener('click', closeCheckout);

    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
        if (e.target === checkoutModal) closeCheckout();
    });

    // Gallery Navigation Logic
    prevBtn.addEventListener('click', () => {
        modalGallery.scrollBy({ left: -300, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        modalGallery.scrollBy({ left: 300, behavior: 'smooth' });
    });
});

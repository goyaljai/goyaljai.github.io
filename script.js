// Products and filters will be loaded from products.js
let products = [];
let filters = [];
let cart = [];
let activeFilters = {
    search: '',
    type: [],
    price: [],
    stock: []
};

// Load products and filters from global productsData
function loadData() {
    try {
        // productsData is loaded from data/products.js
        if (typeof productsData === 'undefined') {
            throw new Error('Products data not loaded');
        }
        products = productsData.products;
        filters = productsData.filters;
        return true;
    } catch (error) {
        console.error('Error loading data:', error);
        alert('Failed to load data. Please refresh the page.');
        return false;
    }
}

// Initialize app after data is loaded
function initializeApp() {
    console.log('initializeApp called');
    const loaded = loadData();
    console.log('Data loaded:', loaded, 'Products:', products.length, 'Filters:', filters.length);
    if (!loaded) return;

    // Now that data is loaded, initialize the UI
    console.log('Initializing UI...');
    const productGrid = document.getElementById('productGrid');
    const modal = document.getElementById('productModal');
    const closeModalBtn = document.querySelector('.close-modal');
    const cartCount = document.getElementById('cartCount');
    const cartBtn = document.getElementById('cartBtn');
    const checkoutModal = document.getElementById('checkoutModal');
    const closeCheckoutBtn = document.querySelector('.close-checkout');
    const checkoutForm = document.getElementById('checkoutForm');
    const searchInput = document.getElementById('searchInput');
    const filterSidebar = document.getElementById('filterSidebar');
    const clearFiltersBtn = document.getElementById('clearFilters');
    const resultsCount = document.getElementById('resultsCount');

    // Mobile filter elements
    const mobileFilterPills = document.getElementById('mobileFilterPills');
    const filterModal = document.getElementById('filterModal');
    const filterModalBody = document.getElementById('filterModalBody');
    const filterModalTitle = document.getElementById('filterModalTitle');
    const closeFilterModal = document.getElementById('closeFilterModal');
    const clearModalFilters = document.getElementById('clearModalFilters');
    const applyModalFilters = document.getElementById('applyModalFilters');

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
    const btnBuyNow = document.getElementById('btnBuyNow');
    const btnAddToCart = document.getElementById('btnAddToCart');
    const btnWhatsApp = document.getElementById('btnWhatsApp');

    // Bidding Elements
    const bidInput = document.getElementById('bidInput');
    const btnSubmitBid = document.getElementById('btnSubmitBid');

    // Gallery Nav
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentProduct = null;
    let currentFilterCategory = null; // For mobile modal

    // Render Mobile Filter Pills (Amazon Style)
    function renderMobileFilterPills() {
        if (!mobileFilterPills) return;

        mobileFilterPills.innerHTML = '';

        // Add "All Filters" pill
        const allFiltersPill = document.createElement('button');
        allFiltersPill.className = 'filter-pill';
        allFiltersPill.innerHTML = `
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
            </svg>
            All Filters
        `;
        allFiltersPill.addEventListener('click', () => openFilterModal('all'));
        mobileFilterPills.appendChild(allFiltersPill);

        // Add pill for each filter category
        filters.forEach(filter => {
            const pill = document.createElement('button');
            pill.className = 'filter-pill';
            pill.textContent = filter.name;
            pill.dataset.filterId = filter.id;

            // Check if this filter has active selections
            if (activeFilters[filter.id] && activeFilters[filter.id].length > 0) {
                pill.classList.add('active');
            }

            pill.addEventListener('click', () => openFilterModal(filter.id));
            mobileFilterPills.appendChild(pill);
        });
    }

    // Open Filter Modal
    function openFilterModal(filterId) {
        currentFilterCategory = filterId;

        if (filterId === 'all') {
            filterModalTitle.textContent = 'All Filters';
            renderAllFiltersInModal();
        } else {
            const filter = filters.find(f => f.id === filterId);
            filterModalTitle.textContent = filter.name;
            renderSingleFilterInModal(filter);
        }

        filterModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    // Render all filters in modal
    function renderAllFiltersInModal() {
        filterModalBody.innerHTML = '';
        filters.forEach(filter => {
            const filterGroup = createFilterGroup(filter);
            filterModalBody.appendChild(filterGroup);
        });
    }

    // Render single filter in modal
    function renderSingleFilterInModal(filter) {
        filterModalBody.innerHTML = '';
        const filterGroup = createFilterGroup(filter, false);
        filterModalBody.appendChild(filterGroup);
    }

    // Create filter group HTML
    function createFilterGroup(filter, showTitle = true) {
        const group = document.createElement('div');
        group.className = 'filter-group';

        if (showTitle) {
            const title = document.createElement('h4');
            title.className = 'filter-group-title';
            title.textContent = filter.name;
            title.style.cursor = 'default';
            title.style.marginBottom = '1rem';
            group.appendChild(title);
        }

        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'filter-options';
        optionsContainer.style.maxHeight = 'none';

        filter.options.forEach(option => {
            const filterOption = document.createElement('div');
            filterOption.className = 'filter-option';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `modal-filter-${filter.id}-${option.value}`;
            checkbox.value = option.value;
            checkbox.dataset.filterId = filter.id;
            checkbox.checked = activeFilters[filter.id] && activeFilters[filter.id].includes(option.value);

            const label = document.createElement('label');
            label.htmlFor = checkbox.id;
            label.textContent = option.label;

            filterOption.appendChild(checkbox);
            filterOption.appendChild(label);
            optionsContainer.appendChild(filterOption);

            checkbox.addEventListener('change', handleModalFilterChange);
        });

        group.appendChild(optionsContainer);
        return group;
    }

    // Handle modal filter change (don't apply immediately)
    function handleModalFilterChange(e) {
        const filterId = e.target.dataset.filterId;
        const value = e.target.value;

        if (e.target.checked) {
            if (!activeFilters[filterId].includes(value)) {
                activeFilters[filterId].push(value);
            }
        } else {
            activeFilters[filterId] = activeFilters[filterId].filter(v => v !== value);
        }
    }

    // Close filter modal
    function closeFilterModalFn() {
        filterModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }

    // Apply modal filters
    function applyModalFiltersFn() {
        applyFilters();
        renderMobileFilterPills(); // Update pill active states
        closeFilterModalFn();
    }

    // Clear modal filters
    function clearModalFiltersFn() {
        activeFilters = {
            search: '',
            type: [],
            price: [],
            stock: []
        };
        if (searchInput) searchInput.value = '';

        // Update checkboxes in modal
        filterModalBody.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            cb.checked = false;
        });

        applyFilters();
        renderMobileFilterPills();
    }

    // Event listeners for modal
    if (closeFilterModal) {
        closeFilterModal.addEventListener('click', closeFilterModalFn);
    }
    if (applyModalFilters) {
        applyModalFilters.addEventListener('click', applyModalFiltersFn);
    }
    if (clearModalFilters) {
        clearModalFilters.addEventListener('click', clearModalFiltersFn);
    }
    if (filterModal) {
        filterModal.addEventListener('click', (e) => {
            if (e.target === filterModal) closeFilterModalFn();
        });
    }


    // Render Filter Sidebar
    function renderFilters() {
        filterSidebar.innerHTML = '';

        filters.forEach((filter, index) => {
            const filterGroup = document.createElement('div');
            filterGroup.className = 'filter-group';

            // On mobile, start with first group open, rest collapsed
            if (window.innerWidth <= 768 && index > 0) {
                filterGroup.classList.add('collapsed');
            }

            const title = document.createElement('h4');
            title.className = 'filter-group-title';
            title.textContent = filter.name;

            // Add click handler for collapsible behavior
            title.addEventListener('click', () => {
                filterGroup.classList.toggle('collapsed');
            });

            filterGroup.appendChild(title);

            // Create options container for smooth collapse
            const optionsContainer = document.createElement('div');
            optionsContainer.className = 'filter-options';

            filter.options.forEach(option => {
                const filterOption = document.createElement('div');
                filterOption.className = 'filter-option';

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = `filter-${filter.id}-${option.value}`;
                checkbox.value = option.value;
                checkbox.dataset.filterId = filter.id;

                const label = document.createElement('label');
                label.htmlFor = checkbox.id;
                label.textContent = option.label;

                filterOption.appendChild(checkbox);
                filterOption.appendChild(label);
                optionsContainer.appendChild(filterOption);

                // Add event listener
                checkbox.addEventListener('change', handleFilterChange);
            });

            filterGroup.appendChild(optionsContainer);
            filterSidebar.appendChild(filterGroup);
        });
    }

    // Handle Filter Change
    function handleFilterChange(e) {
        const filterId = e.target.dataset.filterId;
        const value = e.target.value;

        if (e.target.checked) {
            if (!activeFilters[filterId].includes(value)) {
                activeFilters[filterId].push(value);
            }
        } else {
            activeFilters[filterId] = activeFilters[filterId].filter(v => v !== value);
        }

        applyFilters();
    }

    // Search Input Handler
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            activeFilters.search = e.target.value.toLowerCase();
            applyFilters();
        });
    }

    // Clear Filters
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', () => {
            activeFilters = {
                search: '',
                type: [],
                price: [],
                stock: []
            };
            searchInput.value = '';
            document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(cb => {
                cb.checked = false;
            });
            applyFilters();
        });
    }

    // Apply Filters
    function applyFilters() {
        let filtered = products;

        // Search filter
        if (activeFilters.search) {
            filtered = filtered.filter(p =>
                p.name.toLowerCase().includes(activeFilters.search) ||
                p.type.toLowerCase().includes(activeFilters.search) ||
                p.description.toLowerCase().includes(activeFilters.search)
            );
        }

        // Type filter
        if (activeFilters.type.length > 0) {
            filtered = filtered.filter(p => activeFilters.type.includes(p.type));
        }

        // Price filter
        if (activeFilters.price.length > 0) {
            filtered = filtered.filter(p => {
                return activeFilters.price.some(range => {
                    const [min, max] = range.split('-').map(Number);
                    if (max) {
                        return p.price >= min && p.price < max;
                    } else {
                        return p.price >= min;
                    }
                });
            });
        }

        // Stock filter
        if (activeFilters.stock.length > 0) {
            filtered = filtered.filter(p => {
                if (activeFilters.stock.includes('low-stock')) {
                    return p.stock < 500;
                }
                if (activeFilters.stock.includes('in-stock')) {
                    return p.stock >= 500;
                }
                return true;
            });
        }

        renderProducts(filtered);
        updateResultsCount(filtered.length);
    }

    // Update Results Count
    function updateResultsCount(count) {
        if (count === products.length) {
            resultsCount.textContent = `Showing all ${count} products`;
        } else {
            resultsCount.textContent = `Showing ${count} of ${products.length} products`;
        }
    }

    // Render Products Function
    function renderProducts(productsToRender = products) {
        productGrid.innerHTML = '';

        productsToRender.forEach(product => {
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
    console.log('Rendering filters and products...');
    renderFilters();
    renderMobileFilterPills();
    renderProducts();
    updateResultsCount(products.length);

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

        // Reset scroll position after making it visible
        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) modalContent.scrollTop = 0;

        const modalDetails = modal.querySelector('.modal-details');
        if (modalDetails) modalDetails.scrollTop = 0;

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

    // Submit Bid
    if (btnSubmitBid) {
        btnSubmitBid.addEventListener('click', () => {
            const price = parseInt(bidInput.value) || 0;
            if (price <= 0) {
                alert("Please enter a valid price.");
                return;
            }
            alert("Thank you! We have received your bid of ₹" + price + "/sq.ft. We will contact you shortly.");
            bidInput.value = '';
        });
    }

    // Add to Cart (Only adds to cart)
    if (btnAddToCart) {
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
            alert("Added to cart!");
        });
    }

    // Checkout Now (Adds to cart AND opens checkout)
    if (btnBuyNow) {
        btnBuyNow.addEventListener('click', () => {
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
            openCheckout();
        });
    }

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
                <div class="cart-item-right" style="display: flex; align-items: center; gap: 1rem;">
                    <div class="cart-item-price">₹${item.totalPrice.toLocaleString('en-IN')}</div>
                    <button class="btn-remove-item" data-index="${index}" style="background: none; border: none; color: #EF4444; font-size: 1.5rem; cursor: pointer; padding: 0 0.5rem;">&times;</button>
                </div>
            `;
            cartItemsContainer.appendChild(div);
        });

        // Add event listeners for remove buttons
        document.querySelectorAll('.btn-remove-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                cart.splice(index, 1);
                updateCartCount();
                openCheckout(); // Re-render
            });
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

    // Hero Video Loop Logic (6s to 26s)
    const heroVideo = document.getElementById('heroVideo');
    if (heroVideo) {
        heroVideo.currentTime = 6;
        heroVideo.addEventListener('timeupdate', function () {
            if (this.currentTime >= 26) {
                this.currentTime = 6;
                this.play();
            }
        });
    }

    // Gallery Navigation Logic
    prevBtn.addEventListener('click', () => {
        modalGallery.scrollBy({ left: -300, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        modalGallery.scrollBy({ left: 300, behavior: 'smooth' });
    });
}

// Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', initializeApp);

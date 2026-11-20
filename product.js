 const productData = [
      { name: "Rose Toner", price: 12.99, category: "toner", image: "image/rose2.png.png", description: "Hydrates and refreshes your skin with natural rose extract." },
      { name: "Peach Cleanser", price: 15.99, category: "cleanser", image: "image/gudpeach.png.png" },
      { name: "Lavender Moisturizer", price: 18.99, category: "moisturizer", image: "image/lave2.png.png" },
      { name: "Mint Cleanser", price: 14.99, category: "cleanser", image: "image/mint1.png.png" },
      { name: "Chamomile Toner", price: 11.99, category: "toner", image: "image/CToner2.png.png" },
      { name: "Vanilla Moisturizer", price: 19.99, category: "moisturizer", image: "image/vanilla2.png.png" }
    ];

    const productGrid = document.getElementById("productGrid");

    function renderProducts(filter = "all") {
      productGrid.innerHTML = "";
      const filtered = filter === "all" ? productData : productData.filter(p => p.category === filter);
      filtered.forEach(product => {
        const col = document.createElement("div");
        col.className = "col-md-4 product-card";
        col.setAttribute("data-category", product.category);
        col.innerHTML = 

        productGrid.appendChild(col);
        observer.observe(col);
      });
    }

    function filterCategory(category) {
      renderProducts(category);
    }

    function scrollToProducts() {
      document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    }

    function increment(btn) {
      const span = btn.previousElementSibling;
      const card = btn.closest('.card');
      const title = card.querySelector('.card-title').textContent;
      const price = parseFloat(card.querySelector('.text-muted').textContent.replace(/[^0-9.]/g,));

      let quantity = parseInt(span.textContent) + 1;
      span.textContent = quantity;
      updateCart(title, price, quantity);
    }

    function decrement(btn) {
      const span = btn.nextElementSibling;
      const card = btn.closest('.card');
      const title = card.querySelector('.card-title').textContent;
      const price = parseFloat(card.querySelector('.text-muted').textContent.replace(/[^0-9.]/g, ''));

      let quantity = parseInt(span.textContent);
      if (quantity > 0) quantity--;
      span.textContent = quantity;
      updateCart(title, price, quantity);
    }

    const cart = {};

    function updateCart(name, price, qty) {
      if (qty === 0) {
        delete cart[name];
      } else {
        cart[name] = { price, qty };
      }
      renderCart();
    }

    function renderCart() {
      const cartItems = document.getElementById('cartItems');
      cartItems.innerHTML = '';
      let total = 0;
      for (const item in cart) {
        const { price, qty } = cart[item];
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `${item} <span>${qty} x $${price.toFixed(2)}</span>`;
        cartItems.appendChild(li);
        total += price * qty;
      }
      document.getElementById('totalPrice').textContent = total.toFixed(2);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    renderProducts();

  
  function showLoader() {
    document.getElementById("loader-wrapper").style.display = "flex";}

  window.addEventListener("load", () => {
    const loader = document.getElementById("loader-wrapper");
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 700);});
      

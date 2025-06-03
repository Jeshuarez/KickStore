let cart = JSON.parse(localStorage.getItem('cart') || '[]');

    function addToCart(name, price) {
      cart.push({ name, price });
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartUI();
    }

    function removeFromCart(index) {
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartUI();
    }

    function updateCartUI() {
      const cartCount = document.getElementById('cart-count');
      const cartItems = document.getElementById('cart-items');
      const cartTotal = document.getElementById('cart-total');

      cartCount.textContent = cart.length;
      cartItems.innerHTML = '';
      let total = 0;

      cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
          ${item.name} - $${item.price} MXN 
          <button onclick="removeFromCart(${index})">X</button>
        `;
        cartItems.appendChild(li);
        total += item.price;
      });

      cartTotal.textContent = total;
    }

    function toggleCart() {
      const summary = document.getElementById('cart-summary');
      summary.style.display = summary.style.display === 'block' ? 'none' : 'block';
    }

    window.addEventListener('load', updateCartUI);
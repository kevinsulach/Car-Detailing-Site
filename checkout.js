
document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItemsContainer = document.getElementById('cart-items');
  const subtotalEl = document.getElementById('subtotal');
  const taxEl = document.getElementById('tax');
  const totalEl = document.getElementById('total');

  function updateCartDisplay() {
    cartItemsContainer.innerHTML = '';
    let subtotal = 0;

    cart.forEach((item, index) => {
      const div = document.createElement('div');
      div.className = 'cart-item-row';
      div.innerHTML = \`
        <span>\${item.name} - \$\${item.price.toFixed(2)} CAD</span>
        <button onclick="removeFromCart(\${index})">Remove</button>
      \`;
      cartItemsContainer.appendChild(div);
      subtotal += item.price;
    });

    const tax = subtotal * 0.13;
    const total = subtotal + tax;

    subtotalEl.textContent = `$${subtotal.toFixed(2)} CAD`;
    taxEl.textContent = `$${tax.toFixed(2)} CAD`;
    totalEl.textContent = `$${total.toFixed(2)} CAD`;
  }

  window.removeFromCart = function(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
  };

  updateCartDisplay();
});

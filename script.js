let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(packageName, price) {
  cart.push({ name: packageName, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${packageName} added to cart!`);
}

function loadCart() {
  const cartItems = document.getElementById('cart-items');
  const total = document.getElementById('total');
  const tax = document.getElementById('tax');
  const grandTotal = document.getElementById('grand-total');

  if (!cartItems || !total || !tax || !grandTotal) return;

  cartItems.innerHTML = '';
  let subtotal = 0;

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price} CAD`;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = () => {
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      loadCart();
    };
    li.appendChild(removeBtn);
    cartItems.appendChild(li);
    subtotal += item.price;
  });

  const taxAmount = subtotal * 0.13;
  const totalAmount = subtotal + taxAmount;

  total.textContent = `Subtotal: $${subtotal.toFixed(2)} CAD`;
  tax.textContent = `Tax (13%): $${taxAmount.toFixed(2)} CAD`;
  grandTotal.textContent = `Total: $${totalAmount.toFixed(2)} CAD`;
}

document.addEventListener('DOMContentLoaded', loadCart);

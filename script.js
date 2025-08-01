// Simple Add to Cart (redirect only)
function addToCart(packageName) {
  localStorage.setItem('selectedPackage', packageName);
  window.location.href = 'checkout.html';
}

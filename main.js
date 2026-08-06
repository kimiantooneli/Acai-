document.addEventListener('DOMContentLoaded', () => {
  const username = checkAuth();
  
  // Set nama user di Navbar
  const usernameEl = document.getElementById('navUsername');
  if (usernameEl) usernameEl.textContent = username;
  
  updateCartBadge();
  renderProducts();
});

function renderProducts() {
  const container = document.getElementById('productList');
  if (!container) return;
  
  const products = getProducts();
  container.innerHTML = '';

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-price">${formatRupiah(product.price)}</p>
      </div>
      <button class="btn btn-primary" onclick="addToCart('${product.id}')">Tambah Keranjang</button>
    `;
    container.appendChild(card);
  });
}

function addToCart(productId) {
  const products = getProducts();
  const product = products.find(p => p.id === productId);
  if (!product) return;

  let cart = JSON.parse(localStorage.getItem('acai_cart')) || [];
  const existingIndex = cart.findIndex(item => item.id === productId);

  if (existingIndex > -1) {
    cart[existingIndex].qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  localStorage.setItem('acai_cart', JSON.stringify(cart));
  updateCartBadge();
  alert(`${product.name} telah ditambahkan ke keranjang!`);
}

function updateCartBadge() {
  const cart = JSON.parse(localStorage.getItem('acai_cart')) || [];
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById('cartBadge');
  if (badge) badge.textContent = totalItems;
      }

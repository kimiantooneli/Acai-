document.addEventListener('DOMContentLoaded', () => {
  checkAuth();
  renderCart();
});

function renderCart() {
  const container = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');
  if (!container) return;

  const cart = JSON.parse(localStorage.getItem('acai_cart')) || [];
  container.innerHTML = '';
  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = '<tr><td colspan="5" style="text-align:center;">Keranjang Anda kosong.</td></tr>';
    if (totalEl) totalEl.textContent = formatRupiah(0);
    return;
  }

  cart.forEach((item, index) => {
    const subtotal = item.price * item.qty;
    total += subtotal;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${formatRupiah(item.price)}</td>
      <td>
        <input type="number" min="1" value="${item.qty}" onchange="updateQty(${index}, this.value)" style="width: 60px; padding: 5px;">
      </td>
      <td>${formatRupiah(subtotal)}</td>
      <td>
        <button class="btn btn-danger" style="padding: 5px 10px; font-size:0.8rem;" onclick="removeFromCart(${index})">Hapus</button>
      </td>
    `;
    container.appendChild(row);
  });

  if (totalEl) totalEl.textContent = formatRupiah(total);
}

function updateQty(index, newQty) {
  let cart = JSON.parse(localStorage.getItem('acai_cart')) || [];
  const qty = parseInt(newQty);
  if (qty > 0) {
    cart[index].qty = qty;
    localStorage.setItem('acai_cart', JSON.stringify(cart));
    renderCart();
  }
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('acai_cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('acai_cart', JSON.stringify(cart));
  renderCart();
}

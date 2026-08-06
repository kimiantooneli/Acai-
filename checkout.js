document.addEventListener('DOMContentLoaded', () => {
  checkAuth();
  renderCheckoutSummary();

  const checkoutForm = document.getElementById('checkoutForm');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const cart = JSON.parse(localStorage.getItem('acai_cart')) || [];
      if (cart.length === 0) {
        alert("Keranjang kosong!");
        return;
      }

      alert("Pesanan berhasil dibuat! Terima kasih telah berbelanja di Acai Bowl Store.");
      localStorage.removeItem('acai_cart');
      window.location.href = 'index.html';
    });
  }
});

function renderCheckoutSummary() {
  const container = document.getElementById('summaryList');
  const totalEl = document.getElementById('summaryTotal');
  if (!container) return;

  const cart = JSON.parse(localStorage.getItem('acai_cart')) || [];
  container.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const subtotal = item.price * item.qty;
    total += subtotal;

    const li = document.createElement('li');
    li.style.display = 'flex';
    li.style.justifyContent = 'space-between';
    li.style.marginBottom = '10px';
    li.innerHTML = `<span>${item.name} x${item.qty}</span> <span>${formatRupiah(subtotal)}</span>`;
    container.appendChild(li);
  });

  if (totalEl) totalEl.textContent = formatRupiah(total);
}

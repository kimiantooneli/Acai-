document.addEventListener('DOMContentLoaded', () => {
  checkAuth();
  renderSellerProducts();

  const addForm = document.getElementById('addProductForm');
  if (addForm) {
    addForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('pName').value;
      const price = parseInt(document.getElementById('pPrice').value);
      let image = document.getElementById('pImage').value;

      if (!image) {
         = "// Berry
image: "images/berry.jpg"

// Banana
image: "images/banana.jpg"

// Mango
image: "images/mango.jpg"

// Choco
image: "images/choco.jpg";
      }

      const products = getProducts();
      const newProduct = {
        id: Date.now().toString(),
        name: name,
        price: price,
        image: image
      };

      products.push(newProduct);
      localStorage.setItem('acai_products', JSON.stringify(products));

      alert("Produk berhasil ditambahkan!");
      window.location.href = 'seller.html';
    });
  }
});

function renderSellerProducts() {
  const container = document.getElementById('sellerProductList');
  const countEl = document.getElementById('totalProductCount');
  if (!container) return;

  const products = getProducts();
  if (countEl) countEl.textContent = products.length;

  container.innerHTML = '';

  products.forEach(product => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><img src="${product.image}" style="width:50px; height:50px; object-fit:cover; border-radius:8px;"></td>
      <td>${product.name}</td>
      <td>${formatRupiah(product.price)}</td>
    `;
    container.appendChild(row);
  });
    }

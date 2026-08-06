// Inisialisasi Data Produk Bawaan
const defaultProducts = [
  {
    id: "1",
    name: "Berry Acai Bowl",
    price: 45000,
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "2",
    name: "Banana Acai Bowl",
    price: 40000,
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "3",
    name: "Mango Acai Bowl",
    price: 42000,
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=500&q=80"
  }
];

// Fungsi Mengambil Daftar Produk
function getProducts() {
  const products = localStorage.getItem('acai_products');
  if (!products) {
    localStorage.setItem('acai_products', JSON.stringify(defaultProducts));
    return defaultProducts;
  }
  return JSON.parse(products);
}

// Fungsi Format Rupiah
function formatRupiah(number) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(number);
}

// Inisialisasi Data Produk Bawaan
// Inisialisasi Data Produk Bawaan
const defaultProducts = [
  {
    id: "1",
    name: "Berry Acai Bowl",
    price: 45000,
    image: "images/berry.jpg"
  },
  {
    id: "2",
    name: "Banana Acai Bowl",
    price: 40000,
    image: "images/banana.jpg"
  },
  {
    id: "3",
    name: "Mango Acai Bowl",
    price: 42000,
    image: "images/mango.jpg"
  },
  {
    id: "4",
    name: "Choco Acai Special",
    price: 48000,
    image: "images/choco.jpg"
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
  return new Intl.NumberFormat('id-ID', { 
    style: 'currency', 
    currency: 'IDR', 
    maximumFractionDigits: 0 
  }).format(number);
}

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

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value.trim();
      
      if (username) {
        localStorage.setItem('acai_user', username);
        window.location.href = 'role.html';
      }
    });
  }
});

// Helper Pengecekan Login
function checkAuth() {
  const user = localStorage.getItem('acai_user');
  if (!user) {
    window.location.href = 'welcome.html';
  }
  return user;
}

// Fungsi Logout
function logout() {
  localStorage.removeItem('acai_user');
  window.location.href = 'welcome.html';
}

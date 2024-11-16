document.querySelectorAll('.toggle-form').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('.login-form').classList.toggle('active');
      document.querySelector('.register-form').classList.toggle('active');
    });
  });
  document.getElementById('registerButton').addEventListener('click', function(e) {
e.preventDefault();
document.querySelector('.login-form').classList.add('active');
document.querySelector('.register-form').classList.remove('active');
}); 
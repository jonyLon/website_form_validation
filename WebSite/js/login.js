const loginForm = document.getElementById('login_valid');
loginForm.addEventListener('submit', event => {
  event.preventDefault();
  event.stopPropagation();

  if (!loginForm.checkValidity()) {
    loginForm.classList.add('was-validated');
  } else {
    const email = document.getElementById("email").value;
    const password = document.getElementById("inputPassword").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userFound = false;

    users.forEach(user => {
      if (email === user.email && password === user.password) {
        userFound = true;
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'profile.html';
      }
    });

    if (!userFound) {
      alert("Неправильний email або пароль");
    }
  }
});
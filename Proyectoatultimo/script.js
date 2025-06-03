document.addEventListener("DOMContentLoaded", function () {
  const loginMenuLink = document.getElementById("loginMenuLink");
  const loginSection = document.getElementById("loginSection");
  const loginForm = document.getElementById("loginForm");
  const userInfo = document.getElementById("userInfo");
  const welcomeMessage = document.getElementById("welcomeMessage");

  // Mostrar el formulario al hacer clic en el menú
  loginMenuLink.addEventListener("click", function (e) {
    e.preventDefault();
    loginSection.style.display = "block";
  });

  // Verifica si ya hay un usuario guardado
  const savedUser = localStorage.getItem("username");
  if (savedUser) {
    mostrarUsuario(savedUser);
  }

  // Al iniciar sesión
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    if (username.trim() !== "") {
      localStorage.setItem("username", username); // Guarda en localStorage
      mostrarUsuario(username);
    }
  });

  function mostrarUsuario(nombre) {
    welcomeMessage.innerHTML = `
      <strong>¡Bienvenido a Kick Store, ${nombre}!</strong><br>
      <span class="mensaje-extra">Nos alegra tenerte de vuelta. Descubre los últimos lanzamientos y encuentra tu próximo par favorito.</span>
    `;
    userInfo.style.display = "block";
    loginSection.style.display = "none";
    if (loginMenuLink) loginMenuLink.style.display = "none";
  }

  const logoutButton = document.getElementById("logoutButton");
  if (logoutButton) {
    logoutButton.addEventListener("click", function () {
      localStorage.removeItem("username");
      userInfo.style.display = "none";
      if (loginMenuLink) loginMenuLink.style.display = "inline-block";
    });
  }
});

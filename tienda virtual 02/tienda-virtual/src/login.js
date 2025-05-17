let form = document.getElementById('login-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username === '' || password === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Simulate a login process (replace with actual authentication logic)
    if (username === 'admin' && password === 'password') {
        alert('Inicio de sesión exitoso!');
        // Redirect to the main page or perform other actions
        window.location.href = 'index.html';
    } else {
        alert('Nombre de usuario o contraseña incorrectos.');
    }
});
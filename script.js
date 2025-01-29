document.getElementById("in").addEventListener("submit", async function(event) {
    event.preventDefault(); // Evita que la página se recargue

    const username = document.getElementById("input1").value;
    const password = document.getElementById("input2").value;

    // Enviar credenciales al servidor
    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();
});
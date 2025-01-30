document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("in");
    
    if (form) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault(); // Evita el recargo de la página
            
            const username = document.getElementById("input1").value;
            const password = document.getElementById("input2").value;
            
            if (!username || !password) {
                alert("Por favor, completa todos los campos.");
                return;
            }

            try {
                const response = await fetch("/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ username, password }),
                });

                const result = await response.json();
                alert(result.message);
            } catch (error) {
                console.error("Error en la solicitud:", error);
                alert("Ocurrió un error al enviar los datos.");
            }
        });
    }
});

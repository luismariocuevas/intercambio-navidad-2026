const selector = document.getElementById("persona");
const resultado = document.getElementById("resultado");

// Personas que mostrarán todos sus regalos dentro de una sola opción
const personasConUnaSolaOpcion = [
  "Gaby"
  // Agrega más nombres aquí:
  // "Paty",
  // "Miguel",
  // "Leonela"
];

fetch("personas.json")
  .then(response => response.json())
  .then(personas => {

    personas.forEach(persona => {
      const option = document.createElement("option");
      option.value = persona.nombre;
      option.textContent = persona.nombre;
      selector.appendChild(option);
    });

    selector.addEventListener("change", () => {

      resultado.innerHTML = "";

      const persona = personas.find(
        p => p.nombre === selector.value
      );

      if (!persona) return;

      // Si la persona está en la lista especial
      if (personasConUnaSolaOpcion.includes(persona.nombre)) {

        let cardHTML = `
          <div class="card">
            <h3>🎁 Opción 1</h3>
        `;

        persona.regalos.forEach(regalo => {
          cardHTML += `
            <p>${regalo.nombre}</p>
            <a href="${regalo.link}" target="_blank">
              Ver producto
            </a>
            <br><br>
          `;
        });

        cardHTML += `</div>`;

        resultado.innerHTML = cardHTML;

      } else {

        // Comportamiento normal para todos los demás
        persona.regalos.forEach((regalo, index) => {

          resultado.innerHTML += `
            <div class="card">
              <h3>🎁 Opción ${index + 1}</h3>
              <p>${regalo.nombre}</p>
              <a href="${regalo.link}" target="_blank">
                Ver producto
              </a>
            </div>
          `;

        });

      }

    });

  })
  .catch(error => {
    console.error("Error cargando personas.json:", error);
  });

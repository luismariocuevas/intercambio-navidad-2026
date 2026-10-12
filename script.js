const selector = document.getElementById("persona");
const resultado = document.getElementById("resultado");

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

    });

  })
  .catch(error => {
    console.error("Error cargando personas.json:", error);
  });

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

      const opciones = {};

      persona.regalos.forEach(regalo => {

        const numeroOpcion = regalo.opcion || 1;

        if (!opciones[numeroOpcion]) {
          opciones[numeroOpcion] = [];
        }

        opciones[numeroOpcion].push(regalo);

      });

      Object.keys(opciones).forEach(numeroOpcion => {

        let cardHTML = `
          <div class="card">
            <h3>🎁 Opción ${numeroOpcion}</h3>
        `;

        opciones[numeroOpcion].forEach(regalo => {

          cardHTML += `
            <p>${regalo.nombre}</p>
            <a href="${regalo.link}" target="_blank">
              Ver producto
            </a>
            <br><br>
          `;

        });

        cardHTML += `</div>`;

        resultado.innerHTML += cardHTML;

      });

    });

  })
  .catch(error => {
    console.error("Error cargando personas.json:", error);
  });

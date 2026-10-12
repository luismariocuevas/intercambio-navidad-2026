const personas = [
  {
    nombre: "Luis Mario",
    regalos: [
      {
        nombre: "Audífonos Sony",
        link: "https://amazon.com"
      },
      {
        nombre: "Termo Stanley",
        link: "https://mercadolibre.com"
      },
      {
        nombre: "Mouse Logitech",
        link: "https://amazon.com"
      }
    ]
  },
  {
    nombre: "Diana Torres",
    regalos: [
      {
        nombre: "Perfume",
        link: "https://amazon.com"
      },
      {
        nombre: "Bolsa",
        link: "https://mercadolibre.com"
      },
      {
        nombre: "Smartwatch",
        link: "https://amazon.com"
      }
    ]
  }
];

const selector = document.getElementById("persona");
const resultado = document.getElementById("resultado");

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


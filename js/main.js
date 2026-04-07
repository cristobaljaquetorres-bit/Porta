/* ========================================
   PORTFOLIO - JavaScript SIMPLIFICADO
   Para alumnos que están aprendiendo JS
   ======================================== */

// ----------------------------------------
// 1. LOS DATOS (arreglos simples)
// ----------------------------------------

const proyectos = [
  {
    titulo: "E-commerce de artesanías",
    descripcion: "Tienda online completa con carrito de compras y panel de administración.",
    icono: "🛒",
    github: "https://github.com/ejemplo/ecommerce",
    web: "https://ejemplo.cl",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    titulo: "Administrador de tareas",
    descripcion: "App para gestionar tareas con drag & drop y persistencia en localStorage.",
    icono: "✅",
    github: "https://github.com/ejemplo/tareas",
    web: "https://tareas.ejemplo.cl",
    tags: ["JavaScript", "Drag & Drop"]
  },
  {
    titulo: "Clima en tiempo real",
    descripcion: "Widget que consume API de OpenWeather para mostrar el clima actual.",
    icono: "🌤️",
    github: "https://github.com/ejemplo/clima",
    web: "https://clima.ejemplo.cl",
    tags: ["API Rest", "Fetch", "CSS Grid"]
  },
  {
    titulo: "Blog personal",
    descripcion: "Blog estático con soporte para markdown y modo oscuro.",
    icono: "📝",
    github: "https://github.com/ejemplo/blog",
    web: "https://blog.ejemplo.cl",
    tags: ["JavaScript", "Markdown"]
  }
];

const skills = [
  {
    categoria: "Frontend",
    lista: ["HTML5 semántico", "CSS3 (Flexbox, Grid)", "JavaScript básico", "Responsive Design"]
  },
  {
    categoria: "Backend",
    lista: ["Node.js", "Express", "Bases de datos SQL", "REST APIs"]
  },
  {
    categoria: "Herramientas",
    lista: ["Git", "VS Code", "Chrome DevTools", "npm"]
  }
];

// ----------------------------------------
// 2. RENDERIZAR PROYECTOS
// ----------------------------------------

function mostrarProyectos() {
  // Buscar el contenedor donde van los proyectos
  const contenedor = document.getElementById("projects-container");

  // Crear una variable vacía para acumular el HTML
  let html = "";

  // Recorrer cada proyecto con un for
  for (let i = 0; i < proyectos.length; i++) {
    const p = proyectos[i];

    // Crear el HTML de una tarjeta
    html = html + `
      <div class="project-card">
        <div class="project-card__header">
          <span class="project-card__icon">${p.icono}</span>
          <div class="project-card__links">
            <a href="${p.github}" target="_blank" class="project-card__link">🐙</a>
            <a href="${p.web}" target="_blank" class="project-card__link">🔗</a>
          </div>
        </div>
        <h3 class="project-card__title">${p.titulo}</h3>
        <p class="project-card__description">${p.descripcion}</p>
        <div class="project-card__tags">
          ${p.tags.map(tag => `<span class="project-card__tag">${tag}</span>`).join("")}
        </div>
      </div>
    `;
  }

  // Insertar todo el HTML de una vez
  contenedor.innerHTML = html;
}

// ----------------------------------------
// 3. RENDERIZAR SKILLS
// ----------------------------------------

function mostrarSkills() {
  const contenedor = document.getElementById("skills-container");
  let html = "";

  for (let i = 0; i < skills.length; i++) {
    const s = skills[i];

    // Crear las etiquetas <li> para cada habilidad
    let listaHtml = "";
    for (let j = 0; j < s.lista.length; j++) {
      listaHtml = listaHtml + `<li class="skill-category__item">${s.lista[j]}</li>`;
    }

    html = html + `
      <div class="skill-category">
        <h3 class="skill-category__title">// ${s.categoria}</h3>
        <ul class="skill-category__list">
          ${listaHtml}
        </ul>
      </div>
    `;
  }

  contenedor.innerHTML = html;
}

// ----------------------------------------
// 4. FORMULARIO DE CONTACTO
// ----------------------------------------

function manejarFormulario(evento) {
  // Evitar que el formulario se envíe (que no se recargue la página)
  evento.preventDefault();

  // Obtener los valores de los campos
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  // Validar que no estén vacíos
  if (nombre === "" || email === "" || mensaje === "") {
    alert("Por favor, completá todos los campos");
    return;
  }

  // Validar que el email tenga @ y punto
  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    alert("El email no es válido");
    return;
  }

  // Mostrar mensaje de éxito
  alert("¡Gracias " + nombre + "! Tu mensaje fue enviado.");

  // Limpiar el formulario
  document.getElementById("contact-form").reset();
}

// ----------------------------------------
// 5. MENÚ HAMBURGUESA (mobile)
// ----------------------------------------

function toggleMenu() {
  const menu = document.querySelector(".nav__list");
  const boton = document.querySelector(".nav__toggle");

  // Agregar o quitar la clase "is-active"
  menu.classList.toggle("is-active");
  boton.classList.toggle("is-active");
}

// ----------------------------------------
// 6. INICIALIZACIÓN (cuando carga la página)
// ----------------------------------------

// Cuando el DOM esté listo, ejecutar estas funciones
document.addEventListener("DOMContentLoaded", function() {
  mostrarProyectos();
  mostrarSkills();

  // Agregar el evento al formulario
  const formulario = document.getElementById("contact-form");
  formulario.addEventListener("submit", manejarFormulario);

  // Agregar el evento al menú hamburguesa
  const boton = document.querySelector(".nav__toggle");
  boton.addEventListener("click", toggleMenu);
});

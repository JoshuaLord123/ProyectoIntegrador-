// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

// show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open')

        // change icon
        const icon = faq.querySelector('.faq__icon i');
        if (icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus"
        } else {
            icon.className = "uil uil-plus"
        }
    })
})

// show/hide nav menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)


//Mostrar forms para que envien soluciones



// Obtener los botones y los divs correspondientes


document.addEventListener("DOMContentLoaded", function() {
    var boton1 = document.getElementById("boton1");
    var informacion1 = document.getElementById("informacion1");
    var boton2 = document.getElementById("boton2");
    var informacion2 = document.getElementById("informacion2");
    var boton3 = document.getElementById("boton3");
    var informacion3 = document.getElementById("informacion3");
    var boton4 = document.getElementById("boton4");
    var informacion4 = document.getElementById("informacion4");

    // Función para mostrar u ocultar la información al hacer click en el botón
    function toggleInfo(boton, informacion) {
      if (informacion.style.display === "none") {
        informacion.style.display = "block";
        boton.innerHTML = "Ocultar";
      } else {
        informacion.style.display = "none";
        boton.innerHTML = "Leer más";
      }
    }

    // Agregar event listeners a los botones
    boton1.addEventListener("click", function() {
      toggleInfo(boton1, informacion1);
    });

    boton2.addEventListener("click", function() {
      toggleInfo(boton2, informacion2);
    });

    boton3.addEventListener("click", function() {
      toggleInfo(boton3, informacion3);
    });

    boton4.addEventListener("click", function() {
      toggleInfo(boton4, informacion4);
    });
  });




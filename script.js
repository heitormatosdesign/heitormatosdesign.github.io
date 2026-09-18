/* =========================================================
   MENU MOBILE
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const menuOverlay = document.querySelector(".menu-overlay");


function abrirMenu() {

    document.body.classList.add("menu-open");

    menuToggle.setAttribute(
        "aria-expanded",
        "true"
    );

}


function fecharMenu() {

    document.body.classList.remove("menu-open");

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

}


/* =========================================================
   ABRIR / FECHAR MENU
========================================================= */

menuToggle.addEventListener("click", () => {

    const menuAberto =
        document.body.classList.contains("menu-open");

    if (menuAberto) {

        fecharMenu();

    } else {

        abrirMenu();

    }

});


/* =========================================================
   FECHAR AO CLICAR NO FUNDO
========================================================= */

menuOverlay.addEventListener(
    "click",
    fecharMenu
);


/* =========================================================
   FECHAR AO CLICAR EM UM LINK
========================================================= */

mobileMenu
    .querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            fecharMenu
        );

    });


/* =========================================================
   FECHAR COM ESC
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            fecharMenu();

        }

    }
);


/* =========================================================
   EVITA O MENU FICAR ABERTO AO VOLTAR PARA DESKTOP
========================================================= */

window.addEventListener(
    "resize",
    () => {

        if (window.innerWidth > 800) {

            fecharMenu();

        }

    }
);
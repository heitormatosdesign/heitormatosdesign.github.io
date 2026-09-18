/* =========================================================
   ANIMAÇÕES DO SITE
========================================================= */


/* ---------------------------------------------------------
   REVELAR ELEMENTOS AO ROLAR A PÁGINA
--------------------------------------------------------- */

const elementos = document.querySelectorAll(
    '.section, .service, .project, .process-item, .about-content, .problem'
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add('reveal');

                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, 50);

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.1
    }
);


elementos.forEach((elemento) => {
    observer.observe(elemento);
});


/* ---------------------------------------------------------
   FECHAR LINKS DE PROJETO SEM URL
--------------------------------------------------------- */

const projetos = document.querySelectorAll('.project');

projetos.forEach((projeto) => {

    projeto.addEventListener('click', function(event) {

        const link = projeto.getAttribute('href');

        if (link === '#') {
            event.preventDefault();
        }

    });

});


/* ---------------------------------------------------------
   ANO AUTOMÁTICO DO RODAPÉ
--------------------------------------------------------- */

const ano = document.querySelector('.footer-bottom span');

if (ano) {

    ano.textContent =
        `© ${new Date().getFullYear()} Heitor Matos`;

}
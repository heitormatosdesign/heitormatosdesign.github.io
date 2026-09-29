/* =========================================================
   ANIMAÇÕES DO SITE
========================================================= */


/* ---------------------------------------------------------
   MENU MOBILE
--------------------------------------------------------- */

const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const menuOverlay = document.querySelector('.menu-overlay');

if (menuToggle && mobileMenu && menuOverlay) {

    function abrirMenu() {

        menuToggle.classList.add('active');
        mobileMenu.classList.add('active');
        menuOverlay.classList.add('active');

        menuToggle.setAttribute(
            'aria-expanded',
            'true'
        );

        document.body.classList.add('menu-open');

    }


    function fecharMenu() {

        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        menuOverlay.classList.remove('active');

        menuToggle.setAttribute(
            'aria-expanded',
            'false'
        );

        document.body.classList.remove('menu-open');

    }


    menuToggle.addEventListener(
        'click',
        () => {

            if (
                mobileMenu.classList.contains('active')
            ) {

                fecharMenu();

            } else {

                abrirMenu();

            }

        }
    );


    menuOverlay.addEventListener(
        'click',
        fecharMenu
    );


    /* ---------------------------------------------
       FECHAR AO CLICAR EM UM LINK
    --------------------------------------------- */

    const mobileLinks =
        mobileMenu.querySelectorAll('a');


    mobileLinks.forEach((link) => {

        link.addEventListener(
            'click',
            fecharMenu
        );

    });


    /* ---------------------------------------------
       ESC FECHA O MENU
    --------------------------------------------- */

    document.addEventListener(
        'keydown',
        (event) => {

            if (
                event.key === 'Escape' &&
                mobileMenu.classList.contains('active')
            ) {

                fecharMenu();

            }

        }
    );

}



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

                entry.target.classList.add(
                    'reveal'
                );


                setTimeout(() => {

                    entry.target.classList.add(
                        'visible'
                    );

                }, 50);


                observer.unobserve(
                    entry.target
                );

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
   LINKS DE PROJETO
--------------------------------------------------------- */

const projetos =
    document.querySelectorAll('.project');


projetos.forEach((projeto) => {

    projeto.addEventListener(
        'click',
        function(event) {

            const link =
                projeto.getAttribute('href');


            if (link === '#') {

                event.preventDefault();

            }

        }
    );

});



/* =========================================================
   PARTÍCULAS — COMO POSSO AJUDAR
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const container =
            document.querySelector(".help");


        const canvas =
            document.querySelector(".help-particles");


        if (!container || !canvas) {

            return;

        }


        const ctx =
            canvas.getContext("2d");


        let particles = [];

        let animationFrame;


        let mouse = {

            x: null,

            y: null,

            active: false

        };


        /* =================================================
           CONFIGURAÇÕES
        ================================================= */

        const config = {

            particleCount: 65,

            particleSize: 1.4,

            particleColor:
                "rgba(255,255,255,.65)",

            lineColor:
                "rgba(255,255,255,.18)",

            maxDistance: 120,

            mouseDistance: 180,

            speed: 0.25

        };


        /* =================================================
           TAMANHO DO CANVAS
        ================================================= */

        function resizeCanvas() {

            const rect =
                container.getBoundingClientRect();


            canvas.width =
                rect.width;


            canvas.height =
                rect.height;


            createParticles();

        }



        /* =================================================
           CRIA PARTÍCULAS
        ================================================= */

        function createParticles() {

            particles = [];


            for (
                let i = 0;
                i < config.particleCount;
                i++
            ) {

                particles.push({

                    x:
                        Math.random()
                        * canvas.width,

                    y:
                        Math.random()
                        * canvas.height,

                    vx:
                        (Math.random() - 0.5)
                        * config.speed,

                    vy:
                        (Math.random() - 0.5)
                        * config.speed

                });

            }

        }



        /* =================================================
           POSIÇÃO DO MOUSE
        ================================================= */

        container.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    container.getBoundingClientRect();


                mouse.x =
                    event.clientX -
                    rect.left;


                mouse.y =
                    event.clientY -
                    rect.top;


                mouse.active =
                    true;

            }
        );


        container.addEventListener(
            "mouseleave",
            () => {

                mouse.active =
                    false;


                mouse.x =
                    null;


                mouse.y =
                    null;

            }
        );



        /* =================================================
           ATUALIZA PARTÍCULAS
        ================================================= */

        function updateParticles() {

            particles.forEach(
                (particle) => {

                    particle.x +=
                        particle.vx;


                    particle.y +=
                        particle.vy;



                    /* BORDAS */

                    if (
                        particle.x < 0 ||
                        particle.x > canvas.width
                    ) {

                        particle.vx *= -1;

                    }


                    if (
                        particle.y < 0 ||
                        particle.y > canvas.height
                    ) {

                        particle.vy *= -1;

                    }



                    /* INFLUÊNCIA DO MOUSE */

                    if (
                        mouse.active &&
                        mouse.x !== null &&
                        mouse.y !== null
                    ) {

                        const dx =
                            mouse.x -
                            particle.x;


                        const dy =
                            mouse.y -
                            particle.y;


                        const distance =
                            Math.sqrt(
                                dx * dx +
                                dy * dy
                            );


                        if (
                            distance <
                            config.mouseDistance
                        ) {

                            const force =
                                (
                                    1 -
                                    distance /
                                    config.mouseDistance
                                ) * 0.015;


                            particle.vx +=
                                dx * force;


                            particle.vy +=
                                dy * force;

                        }

                    }



                    /* LIMITA VELOCIDADE */

                    const maxSpeed =
                        0.7;


                    particle.vx =
                        Math.max(
                            -maxSpeed,
                            Math.min(
                                maxSpeed,
                                particle.vx
                            )
                        );


                    particle.vy =
                        Math.max(
                            -maxSpeed,
                            Math.min(
                                maxSpeed,
                                particle.vy
                            )
                        );

                }
            );

        }



        /* =================================================
           DESENHA
        ================================================= */

        function draw() {

            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );



            /* PONTOS */

            particles.forEach(
                (particle) => {

                    ctx.beginPath();


                    ctx.arc(
                        particle.x,
                        particle.y,
                        config.particleSize,
                        0,
                        Math.PI * 2
                    );


                    ctx.fillStyle =
                        config.particleColor;


                    ctx.fill();

                }
            );



            /* LINHAS ENTRE PARTÍCULAS */

            for (
                let i = 0;
                i < particles.length;
                i++
            ) {

                for (
                    let j = i + 1;
                    j < particles.length;
                    j++
                ) {

                    const a =
                        particles[i];


                    const b =
                        particles[j];


                    const dx =
                        a.x - b.x;


                    const dy =
                        a.y - b.y;


                    const distance =
                        Math.sqrt(
                            dx * dx +
                            dy * dy
                        );


                    if (
                        distance <
                        config.maxDistance
                    ) {

                        const opacity =
                            1 -
                            (
                                distance /
                                config.maxDistance
                            );


                        ctx.beginPath();


                        ctx.moveTo(
                            a.x,
                            a.y
                        );


                        ctx.lineTo(
                            b.x,
                            b.y
                        );


                        ctx.strokeStyle =
                            `rgba(255,255,255,${opacity * .16})`;


                        ctx.lineWidth =
                            .7;


                        ctx.stroke();

                    }

                }

            }



            /* CONEXÕES COM O MOUSE */

            if (
                mouse.active &&
                mouse.x !== null &&
                mouse.y !== null
            ) {

                particles.forEach(
                    (particle) => {

                        const dx =
                            mouse.x -
                            particle.x;


                        const dy =
                            mouse.y -
                            particle.y;


                        const distance =
                            Math.sqrt(
                                dx * dx +
                                dy * dy
                            );


                        if (
                            distance <
                            config.mouseDistance
                        ) {

                            const opacity =
                                1 -
                                (
                                    distance /
                                    config.mouseDistance
                                );


                            ctx.beginPath();


                            ctx.moveTo(
                                particle.x,
                                particle.y
                            );


                            ctx.lineTo(
                                mouse.x,
                                mouse.y
                            );


                            ctx.strokeStyle =
                                `rgba(255,255,255,${opacity * .3})`;


                            ctx.lineWidth =
                                .8;


                            ctx.stroke();

                        }

                    }
                );

            }

        }



        /* =================================================
           ANIMAÇÃO
        ================================================= */

        function animate() {

            updateParticles();

            draw();


            animationFrame =
                requestAnimationFrame(
                    animate
                );

        }



        /* =================================================
           INICIALIZAÇÃO
        ================================================= */

        resizeCanvas();

        animate();



        /* =================================================
           RESIZE
        ================================================= */

        window.addEventListener(
            "resize",
            () => {

                cancelAnimationFrame(
                    animationFrame
                );


                resizeCanvas();

                animate();

            }
        );

    }
);



/* ---------------------------------------------------------
   ANO AUTOMÁTICO DO RODAPÉ
--------------------------------------------------------- */

const ano =
    document.querySelector(
        '.footer-bottom span'
    );


if (ano) {

    ano.textContent =
        `© ${new Date().getFullYear()} Heitor Matos`;

}
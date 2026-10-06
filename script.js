/* =========================================================
   ANIMAÇÕES DO SITE
========================================================= */

/* ---------------------------------------------------------
   IDIOMAS
--------------------------------------------------------- */

const traducoesEn = {
    'Projetos': 'Projects',
    'Serviços': 'Services',
    'Sobre': 'About',
    'Contato': 'Contact',
    'Falar comigo ↗': 'Get in touch ↗',
    'Abrir menu': 'Open menu',
    'Selecionar idioma': 'Select language',
    'Português (Brasil)': 'Portuguese (Brazil)',
    'Inglês (Reino Unido)': 'English (UK)',
    'DESIGN · BRANDING · DIREÇÃO DE ARTE': 'DESIGN · BRANDING · ART DIRECTION',
    'Design que': 'Design that',
    'dá forma à': 'shapes',
    'estratégia.': 'strategy.',
    'Crio identidades, experiências e sistemas visuais para marcas que precisam comunicar com clareza, consistência e personalidade.':
        'I create identities, experiences, and visual systems for brands that need to communicate with clarity, consistency, and personality.',
    'Ver projetos': 'View projects',
    'Falar pelo WhatsApp': 'Chat on WhatsApp',
    'O QUE MOVE MEU TRABALHO': 'WHAT DRIVES MY WORK',
    'Design não é só fazer bonito.': 'Design is more than making things look good.',
    'É entender o que uma marca precisa comunicar, encontrar a melhor forma de dizer isso visualmente e construir algo que faça sentido para quem está do outro lado.':
        'It means understanding what a brand needs to communicate, finding the best way to express it visually, and creating something meaningful for the people on the other side.',
    'Meu trabalho une estratégia, identidade e direção de arte para transformar ideias em comunicação clara, consistente e com personalidade.':
        'My work brings together strategy, identity, and art direction to turn ideas into clear, consistent communication with personality.',
    'NO QUE POSSO CONTRIBUIR': 'HOW I CAN HELP',
    'Atuo em diferentes frentes do design para construir e desenvolver marcas de forma coerente, da identidade visual à comunicação do dia a dia.':
        'I work across different areas of design to build and develop brands coherently, from visual identity to everyday communication.',
    'Identidade & Branding': 'Identity & Branding',
    'Construção de identidades visuais, sistemas de marca e materiais que ajudam a tornar o posicionamento reconhecível.':
        'Building visual identities, brand systems, and materials that make a brand’s positioning recognizable.',
    'Direção de Arte': 'Art Direction',
    'Conceitos visuais, campanhas e desdobramentos que dão unidade e personalidade à comunicação.':
        'Visual concepts, campaigns, and adaptations that bring unity and personality to communication.',
    'Design Recorrente': 'Ongoing Design',
    'Criação e organização de materiais para marcas que precisam manter qualidade e consistência ao longo do tempo.':
        'Creating and organizing materials for brands that need to maintain quality and consistency over time.',
    'Institucional & Comercial': 'Corporate & Commercial',
    'Apresentações, materiais corporativos, peças promocionais e comunicação visual para diferentes pontos de contato.':
        'Presentations, corporate materials, promotional assets, and visual communication for different touchpoints.',
    'Alguns trabalhos, diferentes desafios.': 'Selected work, different challenges.',
    'Cada projeto começa de um ponto diferente: uma necessidade, uma ideia, um problema ou uma oportunidade. O que eles têm em comum é a busca por uma solução visual que faça sentido para a marca e para as pessoas que ela quer alcançar.':
        'Every project starts somewhere different: with a need, an idea, a problem, or an opportunity. What they share is the search for a visual solution that makes sense for the brand and the people it wants to reach.',
    'INSTITUCIONAL & COMERCIAL': 'CORPORATE & COMMERCIAL',
    'DESIGN RECORRENTE': 'ONGOING DESIGN',
    'DIREÇÃO DE ARTE': 'ART DIRECTION',
    'Talvez sua marca esteja aqui.': 'Maybe your brand is in the right place.',
    'Alguma dessas situações parece familiar?': 'Does any of this sound familiar?',
    'Sua identidade visual não acompanha o posicionamento que sua marca conquistou?':
        'Does your visual identity fail to reflect the position your brand has earned?',
    'Sua comunicação muda de aparência a cada canal, peça ou pessoa que produz?':
        'Does your communication look different across every channel, asset, or creator?',
    'Sua equipe perde tempo tentando organizar materiais que deveriam ser simples de produzir?':
        'Does your team waste time organizing materials that should be simple to produce?',
    'Você sabe o que quer comunicar, mas ainda não encontrou uma forma visual de colocar isso de pé?':
        'Do you know what you want to communicate but have yet to find the right visual way to bring it to life?',
    'POR TRÁS DO DESIGN': 'BEHIND THE DESIGN',
    'Eu gosto de entender antes de criar.': 'I like to understand before I create.',
    'Sou Heitor Matos, designer e profissional de comunicação.':
        'I’m Heitor Matos, a designer and communications professional.',
    'Minha atuação passa por branding, identidade visual, direção de arte e comunicação institucional — sempre buscando equilibrar intenção, clareza e execução.':
        'My work spans branding, visual identity, art direction, and corporate communications — always balancing intention, clarity, and execution.',
    'Mais do que entregar uma peça, gosto de entender o contexto em que ela vai existir: quem é a marca, o que ela precisa dizer e como essa mensagem pode ganhar uma forma que realmente faça sentido.':
        'More than delivering an asset, I like to understand the context it will exist in: who the brand is, what it needs to say, and how that message can take a form that truly makes sense.',
    'Comunicação': 'Communications',
    'VAMOS CONVERSAR': 'LET’S TALK',
    'Vamos dar forma ao seu próximo projeto?': 'Shall we shape your next project?',
    'Conte um pouco sobre o que você precisa e vamos entender juntos o melhor caminho.':
        'Tell me a little about what you need, and we’ll figure out the best way forward together.',
    'Design, branding e direção de arte.': 'Design, branding, and art direction.',
    '← Voltar aos projetos': '← Back to projects',
    '← Projeto anterior': '← Previous project',
    'Próximo projeto →': 'Next project →',
    'Voltar aos projetos →': 'Back to projects →',
    'SOBRE O PROJETO': 'ABOUT THE PROJECT',
    'O DESAFIO': 'THE CHALLENGE',
    'A SOLUÇÃO': 'THE SOLUTION',
    'RESULTADO': 'RESULT',
    'Comunicação Institucional & Experiência Digital.': 'Corporate Communications & Digital Experience.',
    'Uma identidade consistente, mesmo quando os formatos mudam.': 'A consistent identity, even as formats change.',
    'Uma identidade consistente, mesmo quando os formatos mudam.':
        'A consistent identity, even as formats change.',
    'O Grupo Santa Casa de Franca reúne três hospitais e a gestão de diversos AMEs, atendendo 22 municípios e mais de 700 mil pessoas. O trabalho envolveu diferentes pontos de contato da comunicação.':
        'The Grupo Santa Casa de Franca brings together three hospitals and manages several AMEs, serving 22 municipalities and more than 700,000 people. The work covered multiple communication touchpoints.',
    'A atuação passou por ambientes digitais, materiais gráficos, comunicação interna, sinalização e presença institucional.':
        'The work spanned digital platforms, printed materials, internal communications, signage, and institutional presence.',
    'Unificar diferentes linguagens e pontos de contato.': 'Bringing different visual languages and touchpoints together.',
    'A comunicação apresentava diferentes linguagens visuais e pouca unidade entre materiais e canais. Era necessário organizar essa comunicação para que unidades, formatos e necessidades compartilhassem uma linguagem mais consistente.':
        'Communication relied on different visual languages, with little consistency across materials and channels. The goal was to bring it together so that different units, formats, and needs could share a more cohesive language.',
    'Organização visual entre diferentes canais e formatos.': 'A visual system across different channels and formats.',
    'Organizei e padronizei a comunicação existente em um sistema visual mais coeso. O trabalho começou pelas redes sociais e se expandiu para outros pontos de contato físicos e digitais.':
        'I organized and standardized the existing communication into a more cohesive visual system. The work began on social media and expanded to other physical and digital touchpoints.',
    'As aplicações incluem sinalização, folders, papelaria, outdoors, e-mails, pôsteres, murais, comunicação interna, documentos, apresentações, cartilhas e site institucional. Também desenvolvi um sistema de logotipos para o Santa Labs, núcleo de tecnologia do grupo, relacionado a soluções de autoatendimento, comunicação automatizada, relatórios e gestão.':
        'Applications include signage, brochures, stationery, billboards, emails, posters, murals, internal communications, documents, presentations, guides, and the institutional website. I also developed a logo system for Santa Labs, the group’s technology hub, focused on self-service solutions, automated communications, reporting, and management.',
    'O site institucional foi desenvolvido em WordPress e Elementor, com organização das informações e serviços, navegação mais clara e adaptação para diferentes dispositivos.':
        'The institutional website was built with WordPress and Elementor, with organized information and services, clearer navigation, and responsive layouts for different devices.',
    'Uma comunicação institucional mais organizada e consistente entre canais, formatos e unidades.':
        'More organized and consistent corporate communication across channels, formats, and locations.',
    'Continuidade e consistência na comunicação visual.': 'Continuity and consistency in visual communication.',
    'Desenvolvi uma linguagem visual para fortalecer a presença digital da Triângulo Express e comunicar seus serviços, estrutura e diferenciais.':
        'I developed a visual language to strengthen Triângulo Express’s digital presence and communicate its services, structure, and strengths.',
    'O trabalho representa uma atuação recorrente de design, com diferentes peças e necessidades de comunicação ao longo do tempo.':
        'This ongoing design engagement addressed different assets and communication needs over time.',
    'Manter unidade visual entre diferentes assuntos e mensagens.': 'Maintaining visual consistency across different topics and messages.',
    'O desafio foi manter uma comunicação consistente enquanto diferentes assuntos, serviços e mensagens eram transformados em peças para canais digitais.':
        'The challenge was to keep communication consistent while turning different topics, services, and messages into assets for digital channels.',
    'Uma linguagem que se adapta sem perder identidade.': 'A flexible visual language that keeps its identity.',
    'Criei e apliquei uma linguagem visual capaz de se adaptar a diferentes conteúdos sem perder a identidade da empresa.':
        'I created and applied a visual language that adapts to different content without losing the company’s identity.',
    'A produção inclui banner principal do website, posts para Instagram, peças institucionais e promocionais e comunicação de serviços, infraestrutura e diferenciais da empresa.':
        'The work includes the website’s main banner, Instagram posts, corporate and promotional assets, and communications about the company’s services, infrastructure, and strengths.',
    'Uma comunicação digital com unidade visual entre diferentes peças e conteúdos.':
        'Digital communication with a cohesive visual identity across different assets and content.',
    'EVENTOS & PROJETOS ESPECIAIS': 'EVENTS & SPECIAL PROJECTS',
    'Nome do projeto': 'Project name',
    'Uma identidade pensada para transformar um momento específico em uma experiência visual coerente, reconhecível e marcante.':
        'An identity designed to turn a specific moment into a cohesive, recognizable, and memorable visual experience.',
    'Cada ocasião pede uma linguagem própria.': 'Every occasion calls for its own visual language.',
    'O projeto foi desenvolvido para criar uma presença visual própria para o evento, considerando seu público, contexto e objetivo.':
        'The project created a distinctive visual presence for the event, shaped around its audience, context, and goals.',
    'A identidade foi desdobrada em diferentes materiais para manter a experiência conectada em todos os pontos de contato.':
        'The identity was applied across different materials to create a connected experience at every touchpoint.',
    'Fazer com que a identidade acontecesse além da tela.': 'Bringing the identity to life beyond the screen.',
    'O desafio estava em criar uma linguagem que funcionasse tanto nos materiais digitais quanto nas aplicações físicas presentes no evento.':
        'The challenge was to create a visual language that worked across both digital materials and physical event applications.',
    'Uma identidade que acompanha a experiência do público.': 'An identity that follows the audience experience.',
    'A solução foi construída a partir de elementos visuais capazes de criar unidade entre convite, sinalização, peças digitais e demais materiais.':
        'The solution used visual elements to create consistency across invitations, signage, digital assets, and other materials.',
    'O resultado é uma comunicação que participa do evento sem competir com aquilo que realmente importa: a experiência.':
        'The result is communication that supports the event without competing with what matters most: the experience.',
    'Uma experiência visual pensada de ponta a ponta.': 'A visual experience considered from start to finish.',
    'Campanha Institucional & Comunicação Integrada.': 'Corporate Campaign & Integrated Communications.',
    'Conceito: “É impossível não amar tudo isso.”': 'Concept: “It’s impossible not to love all of this.”',
    'Uma linguagem visual para os diferentes materiais da campanha.': 'A visual language for the campaign’s many materials.',
    'O McDia Feliz é uma campanha de mobilização em prol da saúde e do combate ao câncer infantojuvenil. O projeto envolveu a criação de uma linguagem visual para a campanha e seus materiais de comunicação.':
        'McDia Feliz is a fundraising campaign supporting healthcare and the fight against childhood and adolescent cancer. The project involved creating a visual language for the campaign and its communications.',
    'A direção de arte partiu do conceito “É impossível não amar tudo isso” e orientou os diferentes desdobramentos da campanha.':
        'The art direction was built around the concept “It’s impossible not to love all of this” and guided the campaign’s many applications.',
    'Apresentar a campanha de forma leve, próxima e convidativa.': 'Presenting the campaign in a warm, approachable, and inviting way.',
    'Criar uma comunicação leve, próxima e convidativa, mantendo unidade visual entre diferentes formatos e pontos de contato.':
        'Creating warm, approachable, and inviting communications while maintaining visual consistency across formats and touchpoints.',
    'Uma direção visual para diferentes desdobramentos da campanha.': 'A visual direction for the campaign’s many applications.',
    'Desenvolvi uma direção visual baseada em uma combinação vibrante de cores, formas, ícones e elementos gráficos, para gerar reconhecimento entre os materiais da campanha.':
        'I developed a visual direction built on a vibrant combination of colors, shapes, icons, and graphic elements to create recognition across campaign materials.',
    'As aplicações incluem produtos da campanha, posts, certificados, convites, comunicados, landing page responsiva e catálogo digital.':
        'Applications include campaign products, social posts, certificates, invitations, announcements, a responsive landing page, and a digital catalog.',
    'Uma linguagem visual consistente para os diferentes materiais da campanha.':
        'A consistent visual language across the campaign’s different materials.',
    'Identidade visual acolhedora e contemporânea para uma marca profissional.':
        'A warm, contemporary visual identity for a professional brand.',
    'Uma identidade para apresentar uma marca profissional.': 'An identity to introduce a professional brand.',
    'Desenvolvi a identidade visual de Larissa Xavier, psicóloga clínica, para traduzir a personalidade profissional da marca em uma linguagem acolhedora e contemporânea.':
        'I developed Larissa Xavier’s visual identity to express the clinical psychologist’s professional personality through a warm, contemporary visual language.',
    'O trabalho reuniu a construção da identidade e suas diretrizes, com aplicações em diferentes materiais e pontos de contato.':
        'The work brought together the identity and its guidelines, with applications across different materials and touchpoints.',
    'Traduzir a marca com acolhimento e clareza.': 'Expressing the brand with warmth and clarity.',
    'Construir uma identidade que representasse a atuação profissional de Larissa Xavier de forma acolhedora e contemporânea, sem perder clareza e reconhecimento.':
        'Building an identity that represented Larissa Xavier’s professional practice in a warm, contemporary way without losing clarity or recognition.',
    'Um sistema visual para diferentes pontos de contato.': 'A visual system for different touchpoints.',
    'Desenvolvi um sistema de identidade com logotipo, tipografia, paleta de cores e elementos gráficos que mantém a mesma linguagem em diferentes materiais.':
        'I developed an identity system with a logo, typography, color palette, and graphic elements that maintain a consistent language across materials.',
    'As aplicações incluem papelaria, materiais institucionais e diretrizes para o uso consistente da identidade visual.':
        'Applications include stationery, corporate materials, and guidelines for consistent use of the visual identity.',
    'Uma identidade visual estruturada para apresentar a marca de forma mais consistente e reconhecível.':
        'A structured visual identity that presents the brand more consistently and recognizably.',
    '© 2026 Heitor Matos': '© 2026 Heitor Matos',
    'Grupo Santa Casa de Franca — Heitor Matos': 'Grupo Santa Casa de Franca — Heitor Matos',
    'Triângulo Express — Heitor Matos': 'Triângulo Express — Heitor Matos',
    'Eventos — Heitor Matos': 'Events — Heitor Matos',
    'McDia Feliz 2026 — Heitor Matos': 'McDia Feliz 2026 — Heitor Matos',
    'Larissa Xavier — Heitor Matos': 'Larissa Xavier — Heitor Matos',
    'Heitor Matos — Design, Branding e Direção de Arte': 'Heitor Matos — Design, Branding & Art Direction',
    'Heitor Matos — Designer, diretor de arte e especialista em identidade visual, branding e comunicação.':
        'Heitor Matos — Designer, art director, and specialist in visual identity, branding, and communications.',
    'Comunicação institucional e experiência digital para o Grupo Santa Casa de Franca.':
        'Corporate communications and digital experience for Grupo Santa Casa de Franca.',
    'Comunicação digital recorrente para a Triângulo Express.':
        'Ongoing digital communications for Triângulo Express.',
    'Projeto de eventos e projetos especiais por Heitor Matos.':
        'Events and special projects by Heitor Matos.',
    'Direção de arte e comunicação integrada para a campanha McDia Feliz 2026.':
        'Art direction and integrated communications for the McDia Feliz 2026 campaign.',
    'Identidade visual de Larissa Xavier, desenvolvida por Heitor Matos.':
        'Visual identity for Larissa Xavier, developed by Heitor Matos.',
    'Comunicação institucional do Grupo Santa Casa de Franca':
        'Corporate communications for Grupo Santa Casa de Franca',
    'Comunicação digital da Triângulo Express':
        'Digital communications for Triângulo Express',
    'Linguagem visual da Triângulo Express':
        'Visual language for Triângulo Express',
    'Materiais de comunicação institucional do grupo':
        'Corporate communication materials for the group',
    'Aplicações da comunicação do Grupo Santa Casa de Franca':
        'Communication applications for Grupo Santa Casa de Franca',
    'Aplicação da comunicação institucional do grupo':
        'Corporate communication application for the group',
    'Material institucional do Grupo Santa Casa de Franca':
        'Corporate material for Grupo Santa Casa de Franca',
    'Aplicação digital do Grupo Santa Casa de Franca':
        'Digital application for Grupo Santa Casa de Franca',
    'Detalhe da comunicação do Grupo Santa Casa de Franca':
        'Communication detail for Grupo Santa Casa de Franca',
    'Peça de comunicação digital da Triângulo Express':
        'Digital communication asset for Triângulo Express',
    'Aplicação da linguagem visual da Triângulo Express':
        'Visual language application for Triângulo Express',
    'Aplicação da comunicação digital da Triângulo Express':
        'Digital communication application for Triângulo Express',
    'Peça institucional da Triângulo Express': 'Corporate asset for Triângulo Express',
    'Peça promocional da Triângulo Express': 'Promotional asset for Triângulo Express',
    'Detalhe da linguagem visual da Triângulo Express':
        'Visual language detail for Triângulo Express',
    'Projeto de evento': 'Event project',
    'Identidade visual do evento': 'Event visual identity',
    'Material do evento': 'Event material',
    'Aplicação visual do evento': 'Event visual application',
    'Aplicação principal do evento': 'Main event application',
    'Aplicação da identidade': 'Identity application',
    'Detalhe da identidade': 'Identity detail',
    'Direção de arte da campanha McDia Feliz 2026':
        'Art direction for the McDia Feliz 2026 campaign',
    'Linguagem visual da campanha McDia Feliz 2026':
        'Visual language for the McDia Feliz 2026 campaign',
    'Material de comunicação da campanha McDia Feliz 2026':
        'Communication material for the McDia Feliz 2026 campaign',
    'Aplicação da linguagem visual da campanha':
        'Campaign visual language application',
    'Aplicação principal da campanha McDia Feliz 2026':
        'Main application for the McDia Feliz 2026 campaign',
    'Aplicação da campanha McDia Feliz 2026':
        'McDia Feliz 2026 campaign application',
    'Material de comunicação da campanha':
        'Campaign communication material',
    'Detalhe visual da campanha McDia Feliz 2026':
        'Visual detail from the McDia Feliz 2026 campaign',
    'Identidade visual de Larissa Xavier': 'Visual identity for Larissa Xavier',
    'Aplicação da identidade visual de Larissa Xavier':
        'Visual identity application for Larissa Xavier',
    'Detalhe da identidade visual de Larissa Xavier':
        'Visual identity detail for Larissa Xavier',
    'Aplicação da marca Larissa Xavier': 'Larissa Xavier brand application',
    'Sistema de identidade visual de Larissa Xavier':
        'Visual identity system for Larissa Xavier',
    'Aplicação da identidade de Larissa Xavier':
        'Identity application for Larissa Xavier',
    'Material institucional de Larissa Xavier':
        'Corporate material for Larissa Xavier',
    'Detalhe da identidade de Larissa Xavier':
        'Identity detail for Larissa Xavier',
    'WhatsApp': 'WhatsApp',
    'LinkedIn': 'LinkedIn',
    'Behance': 'Behance'
};

const normalizarTexto = (texto) => texto.replace(/\s+/g, ' ').trim();
const nosTraduziveis = [];
const atributosTraduziveis = [];
const leitorDeTexto = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT
);

while (leitorDeTexto.nextNode()) {
    const no = leitorDeTexto.currentNode;
    if (no.parentElement.closest('script, style, .language-switch')) {
        continue;
    }
    if (normalizarTexto(no.nodeValue)) {
        nosTraduziveis.push({ no, original: no.nodeValue });
    }
}

const tituloDaPagina = document.querySelector('title');
if (tituloDaPagina && tituloDaPagina.firstChild) {
    nosTraduziveis.push({
        no: tituloDaPagina.firstChild,
        original: tituloDaPagina.firstChild.nodeValue
    });
}

document.querySelectorAll('[alt], [aria-label], title, meta[name="description"]').forEach((elemento) => {
    ['alt', 'aria-label', 'title', 'content'].forEach((atributo) => {
        if (elemento.hasAttribute(atributo)) {
            atributosTraduziveis.push({
                elemento,
                atributo,
                original: elemento.getAttribute(atributo)
            });
        }
    });
});

function aplicarIdioma(idioma) {
    const emIngles = idioma === 'en';
    document.documentElement.lang = emIngles ? 'en' : 'pt-BR';

    nosTraduziveis.forEach(({ no, original }) => {
        const chave = normalizarTexto(original);
        if (emIngles && traducoesEn[chave]) {
            const espacosAntes = original.match(/^\s*/)[0];
            const espacosDepois = original.match(/\s*$/)[0];
            no.nodeValue = `${espacosAntes}${traducoesEn[chave]}${espacosDepois}`;
        } else {
            no.nodeValue = original;
        }
    });

    atributosTraduziveis.forEach(({ elemento, atributo, original }) => {
        const chave = normalizarTexto(original);
        if (emIngles && traducoesEn[chave]) {
            elemento.setAttribute(atributo, traducoesEn[chave]);
        } else {
            elemento.setAttribute(atributo, original);
        }
    });

    document.querySelectorAll('[data-language]').forEach((botao) => {
        botao.setAttribute(
            'aria-pressed',
            String(botao.dataset.language === (emIngles ? 'en' : 'pt-BR'))
        );
    });

    localStorage.setItem('site-language', emIngles ? 'en' : 'pt-BR');
}

document.querySelectorAll('[data-language]').forEach((botao) => {
    botao.addEventListener('click', () => {
        aplicarIdioma(botao.dataset.language);
    });
});

aplicarIdioma(localStorage.getItem('site-language') === 'en' ? 'en' : 'pt-BR');


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


/* ---------------------------------------------------------
   FALLBACK DAS IMAGENS DE PROJETO
--------------------------------------------------------- */

const capasPorPagina = {

    'projeto-branding.html':
        'imagens/capa-larissaxavier.jpg',

    'projeto-direcao.html':
        'imagens/capa-mcdia.jpg',

    'projeto-eventos.html':
        'imagens/Capa-triangulo.png',

    'projeto-institucional.html':
        'imagens/capa-santacasa.png',

    'projeto-recorrente.html':
        'imagens/Capa-triangulo.png'

};


const nomeDaPagina =
    window.location.pathname.split('/').pop().toLowerCase();


const capaFallback =
    capasPorPagina[nomeDaPagina];


if (capaFallback) {

    const imagensDoProjeto =
        document.querySelectorAll('.project-page img');


    imagensDoProjeto.forEach((imagem) => {

        imagem.addEventListener('error', () => {

            if (imagem.dataset.fallbackApplied) {

                return;

            }


            imagem.dataset.fallbackApplied = 'true';
            imagem.src = capaFallback;

        });

    });

}



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
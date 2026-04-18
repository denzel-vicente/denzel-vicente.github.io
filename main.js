// Translations
const translations = {
    en: {
        nav_about: "About",
        nav_projects: "Projects",
        nav_stack: "Stack",
        nav_contact: "Contact",
        hero_hello: "HELLO WORLD 👋",
        hero_im: "I am Denzel Vicente",
        hero_role: "Full-Stack Developer & Systems Architect",
        hero_tagline: "Engineering performance where others see limitations.",
        hero_location: "Praia, Cabo Verde 🇨🇻",
        hero_cta_contact: "CONTACT STATION",
        hero_cta_projects: "VIEW PROJECTS",
        about_subtitle: "THE POWER STATS",
        bento_bio_title: "The Professional Narrative",
        bento_bio_text: "My journey began 4 years ago, not with complex websites, but with the raw logic of a calculator. I didn't just want to code; I wanted to understand how a machine \"thinks.\" This curiosity led me from building 2D physics environments to winning a national Game Jam 3-day trial, proving that I can deliver high-stakes solutions under extreme pressure.",
        stat_experience: "Years",
        stat_experience_sub: "Independent Dev & Hardware",
        stat_achievement: "Game Jam Winner",
        stat_achievement_sub: "Cape Verde 3-Day Trial",
        stat_education: "10th Grade, ESPCR",
        stat_education_sub: "Technical Focus",
        stat_specialty: "Prompt Engineering",
        stat_specialty_sub: "Logical Data Analysis",
        timeline_title: "The Evolution",
        timeline_2022_title: "The Logic Architect",
        timeline_2022: "Mastering the flow of data through desktop calculators and algorithm basics. Focused on error handling and nested logic—learning that code is just instructions for a machine with no mercy for mistakes.",
        timeline_2024_title: "The System Designer",
        timeline_2024: "Managing complexity through 2D physics systems—handling gravity, collision detection, and player states. Realized that good software must react to users in real-time without breaking.",
        timeline_2025_title: "The Hardware Optimizer",
        timeline_2025: "Operating under constraints. Bypassed firmware to install custom Linux kernel (Q4OS), optimizing the OS to hardware—turning a 'toy' laptop into a professional workstation.",
        timeline_2026_title: "The Integrated Engineer",
        timeline_2026: "Scaling impact. Won national Game Jam, modernizing ESPCR infrastructure and leading KriolCode—using AI Prompt Engineering to accelerate builds for my community.",
        projects_subtitle: "THE PROJECT MOSAIC",
        projects_title: "Infrastructure Gallery",
        project_mission_label: "MISSION",
        project_espcr_title: "ESPCR School Portal",
        project_espcr_mission: "Modernizing the digital infrastructure for an educational institution.",
        project_kriol_title: "KriolCode",
        project_kriol_mission: "Developing a community hub for local Cape Verdean developers.",
        project_chrome_title: "The 'Ghost' Chromebook Mod",
        project_chrome_mission: "Bypassing factory limitations to convert 4GB RAM/16GB ROM into a Linux Workstation.",
        project_jam_title: "Game Jam Prototype",
        project_jam_mission: "Winning project built under a 72-hour deadline.",
        stack_subtitle: "THE TOOLKIT",
        stack_title: "Technical Stack",
        stack_cat1: "Languages",
        stack_cat2: "Systems & OS",
        stack_cat3: "Hardware Mastery",
        stack_cat4: "AI Mastery",
        stack_ai_list: "Chain-of-Thought Prompting, Data Cleanup, Prompt Optimization",
        contact_hook: "Let's build something bulletproof.",
        footer_copy: "© 2026 Denzel Vicente | Handcrafted Workstation"
    },
    pt: {
        nav_about: "Sobre",
        nav_projects: "Projetos",
        nav_stack: "Stack",
        nav_contact: "Contato",
        hero_hello: "HELLO WORLD 👋",
        hero_im: "Eu sou Denzel Vicente",
        hero_role: "Desenvolvedor Full-Stack e Arquiteto de Sistemas",
        hero_tagline: "Engenharia de desempenho onde outros veem limitações.",
        hero_location: "Praia, Cabo Verde 🇨🇻",
        hero_cta_contact: "CONTATAR ESTAÇÃO",
        hero_cta_projects: "VER PROJETOS",
        about_subtitle: "AS ESTATÍSTICAS DE PODER",
        bento_bio_title: "A Narrativa Profissional",
        bento_bio_text: "Minha jornada começou há 4 anos, não com sites complexos, mas com a lógica bruta de uma calculadora. Eu não queria apenas codificar; queria entender como uma máquina \"pensa\". Essa curiosidade me levou de construir ambientes de física 2D a vencer um teste nacional de Game Jam de 3 dias, provando que posso entregar soluções de alto risco sob pressão extrema.",
        stat_experience: "Anos",
        stat_experience_sub: "Desenvolvimento Independente & Hardware",
        stat_achievement: "Vencedor da Game Jam",
        stat_achievement_sub: "Teste de 3 dias de Cabo Verde",
        stat_education: "10º Ano, ESPCR",
        stat_education_sub: "Foco Técnico",
        stat_specialty: "Engenharia de Prompt",
        stat_specialty_sub: "Análise Lógica de Dados",
        timeline_title: "A Evolução",
        timeline_2022_title: "O Arquiteto da Lógica",
        timeline_2022: "Dominando o fluxo de dados através de calculadoras desktop e fundamentos de algoritmos. Focado em tratamento de erros e lógica aninhada—aprendendo que código são apenas instruções para uma máquina sem piedade por erros.",
        timeline_2024_title: "O Designer de Sistemas",
        timeline_2024: "Gerenciando complexidade através de sistemas de física 2D—lidando com gravidade, detecção de colisão e estados do jogador. Percebi que bom software deve reagir aos usuários em tempo real sem quebrar.",
        timeline_2025_title: "O Otimizador de Hardware",
        timeline_2025: "Operando sob restrições. Contornei firmware para instalar kernel Linux personalizado (Q4OS), otimizando o SO ao hardware—transformando um laptop 'brinquedo' em uma estação de trabalho profissional.",
        timeline_2026_title: "O Engenheiro Integrado",
        timeline_2026: "Escalando impacto. Venci Game Jam nacional, modernizando infraestrutura ESPCR e liderando KriolCode—usando Engenharia de Prompt de IA para acelerar builds para minha comunidade.",
        projects_subtitle: "O MOSAICO DE PROJETOS",
        projects_title: "Galeria de Infraestrutura",
        project_mission_label: "MISSÃO",
        project_espcr_title: "Portal Escolar ESPCR",
        project_espcr_mission: "Modernizando a infraestrutura digital para uma instituição de ensino.",
        project_kriol_title: "KriolCode",
        project_kriol_mission: "Desenvolvendo um hub comunitário para desenvolvedores locais de Cabo Verde.",
        project_chrome_title: "Mod Chromebook 'Ghost'",
        project_chrome_mission: "Superando as limitações de fábrica para converter 4GB RAM/16GB ROM em uma estação de trabalho Linux.",
        project_jam_title: "Protótipo Game Jam",
        project_jam_mission: "Projeto vencedor construído num prazo de 72 horas.",
        stack_subtitle: "O TOOLKIT",
        stack_title: "Stack Técnica",
        stack_cat1: "Linguagens",
        stack_cat2: "Sistemas & SO",
        stack_cat3: "Domínio de Hardware",
        stack_cat4: "Domínio de IA",
        stack_ai_list: "Chain-of-Thought, Limpeza de Dados, Otimização de Prompt",
        contact_hook: "Vamos construir algo à prova de balas.",
        footer_copy: "© 2026 Denzel Vicente | Estação Feita à Mão"
    }
};

// Throttle function
const throttle = (func, delay) => {
    let lastCall = 0;
    return (...args) => {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            func(...args);
        }
    };
};

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('DOMContentLoaded', () => {
    
    // Language Switching
    const setLanguage = (lang) => {
        try {
            localStorage.setItem('locale', lang);
        } catch (e) {}
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        
        document.documentElement.lang = lang;
        document.title = lang === 'pt' ? 'Denzel Vicente | Estação de Engenharia' : 'Denzel Vicente | Engineering Logic Station';
        
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.style.opacity = '1';
                btn.style.color = 'var(--accent-purple)';
            } else {
                btn.style.opacity = '0.6';
                btn.style.color = '';
            }
        });
    };
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
    });
    
    let savedLocale = 'en';
    try { savedLocale = localStorage.getItem('locale') || 'en'; } catch (e) {}
    setLanguage(savedLocale);

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    let savedTheme = 'dark';
    try { savedTheme = localStorage.getItem('theme') || 'dark'; } catch (e) {}
    body.setAttribute('data-theme', savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const theme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            body.setAttribute('data-theme', theme);
            try { localStorage.setItem('theme', theme); } catch (e) {}
        });
    }

    // Mobile Menu
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
            mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('active');
        });
        
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                navLinks.classList.remove('active');
            });
        });
    }

    // Cursor Glow
    const cursorGlow = document.querySelector('.cursor-glow');
    if (cursorGlow && !prefersReducedMotion && window.innerWidth > 768) {
        const moveCursor = throttle((e) => {
            cursorGlow.style.left = `${e.clientX}px`;
            cursorGlow.style.top = `${e.clientY}px`;
        }, 16);
        document.addEventListener('mousemove', moveCursor);
    }

    // Tab Switching
    const tabTriggers = document.querySelectorAll('.tab-trigger');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const tabId = trigger.getAttribute('data-tab');
            tabTriggers.forEach(t => t.classList.remove('active'));
            trigger.classList.add('active');
            tabPanels.forEach(panel => {
                panel.classList.remove('active');
                if (panel.id === `tab-${tabId}`) panel.classList.add('active');
            });
        });
    });

    // Project Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.mosaic-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                card.classList.toggle('hidden', filter !== 'all' && category !== filter);
            });
        });
    });

    // Scroll Reveal
    if (!prefersReducedMotion) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.mosaic-card, .tab-toolkit, .bento-item, .hero-content').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.6s ease-out';
            observer.observe(el);
        });
    }

    // Parallax Sphere
    const sphere = document.querySelector('.visual-sphere');
    if (sphere && !prefersReducedMotion && window.innerWidth > 768) {
        const moveSphere = throttle((e) => {
            const x = (window.innerWidth / 2 - e.clientX) / 45;
            const y = (window.innerHeight / 2 - e.clientY) / 45;
            sphere.style.transform = `translate(${x}px, ${y}px)`;
        }, 16);
        document.addEventListener('mousemove', moveSphere);
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: prefersReducedMotion ? 'auto' : 'smooth'
                });
            }
        });
    });
});

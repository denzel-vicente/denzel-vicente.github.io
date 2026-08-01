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
        about_lead: "Full-Stack Developer from <strong>Cabo Verde</strong>, passionate about transforming ideas into functional and well-built digital products.",
        about_journey: "I began my programming journey over <strong>4 years ago</strong>. Since then, I've built various public projects that demonstrate a consistent evolution — from simple logical tools like calculators, to custom 2D physics engines in JavaScript, production school portals, and winning Game Jam submissions.",
        about_specialty_desc: "With <strong>1 year of professional experience</strong>, I specialize in web systems development and hardware optimization, primarily working with the JavaScript, Node.js, and PHP ecosystems.",
        about_quote: "\"I believe high-level performance and clean engineering are essential to build exceptional software — bypassing any hardware limitations.\"",
        about_stat_github: "Years on GitHub",
        about_stat_professional: "Professional Exp",
        about_stat_projects: "Completed Projects",
        about_stat_tech: "Technologies",
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
        project_24hora_title: "24 Hora",
        project_24hora_mission: "Modern, high-performance website and reservation system for a 24-hour restaurant.",
        project_delicias_title: "Dora Delícias",
        project_delicias_mission: "Visual landing page and catalog for a local artisan pastry shop.",
        project_shrd_title: "SHRD Elite",
        project_shrd_mission: "Open-source developer training application designed to enhance coding and logical skills.",
        project_openmarket_title: "Open Market",
        project_openmarket_mission: "Open-source Point of Sale (POS) workstation software optimized for local vendors.",
        stack_subtitle: "THE TOOLKIT",
        stack_title: "Technical Stack",
        stack_frontend: "Frontend",
        stack_backend: "Backend",
        stack_mobile_desktop: "Mobile & Desktop",
        stack_databases: "Databases",
        stack_tools_devops: "Tools & DevOps",
        stack_ai_mastery: "AI Mastery",
        terminal_lines: [
            { text: "denzel@workstation:~$ ./init_portfolio.sh --verbose", type: "cmd" },
            { text: "[INFO] Initializing Denzel Vicente's logic station...", type: "info" },
            { text: "[SUCCESS] Passion: Transforming ideas into functional digital products.", type: "success" },
            { text: "[SUCCESS] Ecosystem: JavaScript, Node.js, PHP, & modern frontends loaded.", type: "success" },
            { text: "[INFO] Loading profile stats...", type: "info" },
            { text: "  -> Role: Full-Stack Developer & Systems Architect", type: "text" },
            { text: "  -> Experience: 2+ Years of Logic Engineering", type: "text" },
            { text: "  -> Location: Praia, Cabo Verde 🇨🇻", type: "text" },
            { text: "[SUCCESS] LLM Ecosystem linked.", type: "success" },
            { text: "[SUCCESS] Workstation state: Ready.", type: "success" },
            { text: "denzel@workstation:~$ ", type: "cmd_ready" }
        ],
        contact_hook: "Let's build something.",
        footer_copy: "© 2026 Denzel Vicente | All Rights Reserved"
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
        about_lead: "Desenvolvedor web fullstack de <strong>Cabo Verde</strong>, apaixonado por transformar ideias em produtos digitais funcionais e bem construídos.",
        about_journey: "Comecei minha jornada de programação há <strong>mais de 4 anos</strong>. Desde então, construí diversos projetos públicos que demonstram uma evolução consistente — de ferramentas lógicas simples como calculadoras, passando por motores de física 2D no JavaScript, até portais escolares de produção e projetos vencedores de Game Jam.",
        about_specialty_desc: "Com <strong>1 ano de experiência profissional</strong>, especializei-me no desenvolvimento de sistemas web completos e otimização de hardware, trabalhando principalmente com os ecossistemas JavaScript, Node.js e PHP.",
        about_quote: "\"Acredito que o desempenho de alto nível e a engenharia limpa são essenciais para construir softwares excepcionais — superando qualquer limitação de hardware.\"",
        about_stat_github: "Anos no GitHub",
        about_stat_professional: "Exp Profissional",
        about_stat_projects: "Projetos Concluídos",
        about_stat_tech: "Tecnologias",
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
        project_24hora_title: "24 Hora",
        project_24hora_mission: "Website moderno de alta performance e sistema de reservas para um restaurante 24 horas.",
        project_delicias_title: "Dora Delícias",
        project_delicias_mission: "Landing page visual e catálogo dinâmico para uma pastelaria artesanal local.",
        project_shrd_title: "SHRD Elite",
        project_shrd_mission: "Aplicativo open-source de treinamento para desenvolvedores focado em aprimorar lógica e código.",
        project_openmarket_title: "Open Market",
        project_openmarket_mission: "Software de ponto de venda (POS) open-source otimizado para comerciantes locais.",
        stack_subtitle: "O TOOLKIT",
        stack_title: "Stack Técnica",
        stack_frontend: "Frontend",
        stack_backend: "Backend",
        stack_mobile_desktop: "Mobile & Desktop",
        stack_databases: "Banco de Dados",
        stack_tools_devops: "Ferramentas & DevOps",
        stack_ai_mastery: "Domínio de IA",
        terminal_lines: [
            { text: "denzel@workstation:~$ ./init_portfolio.sh --verbose", type: "cmd" },
            { text: "[INFO] Inicializando a estação lógica de Denzel Vicente...", type: "info" },
            { text: "[SUCCESS] Foco: Transformar ideias em produtos digitais funcionais.", type: "success" },
            { text: "[SUCCESS] Ecossistema: JavaScript, Node.js, PHP e frontends modernos.", type: "success" },
            { text: "[INFO] Carregando estatísticas do perfil...", type: "info" },
            { text: "  -> Cargo: Desenvolvedor Full-Stack e Arquiteto de Sistemas", type: "text" },
            { text: "  -> Experiência: Mais de 2 anos de Engenharia de Lógica", type: "text" },
            { text: "  -> Localização: Praia, Cabo Verde 🇨🇻", type: "text" },
            { text: "[SUCCESS] Ecossistema de LLM vinculado.", type: "success" },
            { text: "[SUCCESS] Estado da estação de trabalho: Pronta.", type: "success" },
            { text: "denzel@workstation:~$ ", type: "cmd_ready" }
        ],
        contact_hook: "Vamos construir algo.",
        footer_copy: "© 2026 Denzel Vicente | Todos os Direitos Reservados"
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
                el.innerHTML = translations[lang][key];
            }
        });
        
        document.documentElement.lang = lang;
        document.title = lang === 'pt' ? 'Denzel Vicente | Estação de Engenharia' : 'Denzel Vicente | Engineering Logic Station';
        
        const heroIm = document.querySelector('[data-i18n="hero_im"]');
        if (heroIm && translations[lang] && translations[lang]['hero_im']) {
            heroIm.setAttribute('data-text', translations[lang]['hero_im']);
        }
        
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.style.opacity = '1';
                btn.style.color = 'var(--accent-purple)';
            } else {
                btn.style.opacity = '0.6';
                btn.style.color = '';
            }
        });

        // Trigger typewriter animation
        runTerminalAnimation(lang);
    };
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
    });

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

    // Tab Switching - Removed as stack is now a fully visible grid layout

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

    // Typewriter Terminal Animation logic
    let terminalTimeoutId = null;
    let terminalIntervalId = null;

    const runTerminalAnimation = (lang) => {
        const terminalBody = document.querySelector('.terminal-body');
        if (!terminalBody) return;
        
        // Clear any running animations
        if (terminalTimeoutId) clearTimeout(terminalTimeoutId);
        if (terminalIntervalId) clearInterval(terminalIntervalId);
        
        terminalBody.innerHTML = '';
        
        const lines = translations[lang].terminal_lines;
        if (!lines) return;
        
        let currentLine = 0;
        
        const typeLine = () => {
            if (currentLine >= lines.length) return;
            
            const line = lines[currentLine];
            const lineEl = document.createElement('div');
            lineEl.className = `terminal-line ${line.type}`;
            terminalBody.appendChild(lineEl);
            
            // Auto scroll to bottom
            terminalBody.scrollTop = terminalBody.scrollHeight;
            
            if (line.type === 'cmd') {
                let charIndex = 0;
                const text = line.text;
                lineEl.textContent = '';
                
                terminalIntervalId = setInterval(() => {
                    if (charIndex < text.length) {
                        lineEl.textContent += text[charIndex];
                        charIndex++;
                    } else {
                        clearInterval(terminalIntervalId);
                        currentLine++;
                        terminalTimeoutId = setTimeout(typeLine, 350);
                    }
                }, 25);
            } else {
                if (line.text.includes('[SUCCESS]') || line.text.includes('[OK]')) {
                    lineEl.innerHTML = line.text.replace(/\[(SUCCESS|OK)\]/, '<span class="term-success">[$1]</span>');
                } else if (line.text.includes('[INFO]')) {
                    lineEl.innerHTML = line.text.replace(/\[INFO\]/, '<span class="term-info">[INFO]</span>');
                } else {
                    lineEl.textContent = line.text;
                }
                currentLine++;
                terminalTimeoutId = setTimeout(typeLine, line.type === 'info' ? 100 : 200);
            }
        };
        
        typeLine();
    };

    // Parallax Sphere - Removed since sphere visual is replaced by terminal mockup

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

    // Set initial language (moved here to ensure runTerminalAnimation is initialized)
    let savedLocale = 'en';
    try { savedLocale = localStorage.getItem('locale') || 'en'; } catch (e) {}
    setLanguage(savedLocale);
});


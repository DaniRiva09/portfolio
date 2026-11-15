const translations = {
  it: {
    navWork:"Progetti", navWhat:"Cosa faccio", navAbout:"Profilo",
    heroLabel:"PORTFOLIO PERSONALE",
    heroTitle:"Progetti web e software,<br><span>costruiti con cura.</span>",
    heroText:"Sono Dani. Mi piace trasformare idee in progetti digitali: siti web chiari, strumenti semplici e soluzioni pensate per essere utilizzate davvero.",
    heroButton:"Scopri i progetti", githubProfile:"Profilo GitHub",
    summaryLabel:"DUE AMBITI, UNA STESSA CURIOSITÀ",
    summaryWeb:"Siti, interfacce e pagine responsive",
    summarySoftware:"Strumenti e piccoli programmi",
    summaryFoot:"Imparare progettando e facendo.",
    workLabel:"LAVORI SELEZIONATI", workTitle:"Quello su cui sto lavorando.",
    workIntro:"Due progetti diversi, entrambi nati dalla voglia di progettare, costruire e migliorare qualcosa di concreto.",
    personalProject:"PROGETTO PERSONALE", inProgress:"IN SVILUPPO",
    mailflowText:"Un'applicazione web per ricevere, organizzare e analizzare le email. Un progetto in evoluzione che comprende interfaccia, gestione dei dati e integrazioni con servizi email.",
    tagIntegrations:"Integrazioni", tagBackend:"Backend",
    mailflowNote:"Progetto personale · Codice sorgente privato",
    demoProject:"PROGETTO DIMOSTRATIVO", demoReady:"DEMO COMPLETA",
    lumeText:"Sito dimostrativo per un ristorante italiano immaginario. Comprende identità visiva, menu interattivo, galleria fotografica e layout responsive. Realizzato con supporto AI.",
    openProject:"Apri il progetto",
    workNote:"Mailflow è un progetto personale in sviluppo. LUME è un esercizio dimostrativo, non un lavoro commissionato da un cliente.",
    whatLabel:"SU COSA POSSO LAVORARE", whatTitle:"Dalle pagine web<br>ai piccoli strumenti.",
    whatIntro:"Mi interessano soprattutto progetti di dimensioni contenute, con una richiesta chiara e un risultato concreto.",
    offerOneTitle:"Siti vetrina e landing page", offerOneText:"Pagine web semplici, ordinate e adattate anche agli schermi più piccoli.",
    offerTwoTitle:"Modifiche e miglioramenti web", offerTwoText:"Piccoli interventi su HTML e CSS, layout e presentazione dei contenuti.",
    offerThreeTitle:"Piccoli programmi Python", offerThreeText:"Strumenti essenziali per organizzare informazioni o semplificare un'attività specifica.",
    profileLabel:"PROFILO", profileTitle:"Imparo costruendo.",
    profileText:"Mi piace capire come funzionano le cose e provare a realizzarle. Lavorare ai miei progetti mi permette di imparare, incontrare problemi reali e trovare il modo di risolverli.",
    profileTextTwo:"Non considero un progetto finito solo perché funziona: per me contano anche chiarezza, ordine e facilità d'uso.",
    moreGithub:"Altri progetti su GitHub", skillsTitle:"TECNOLOGIE CHE UTILIZZO",
    skillHtml:"Struttura delle pagine", skillCss:"Stile e layout responsive",
    skillPython:"Programmi e piccoli strumenti", skillGit:"Versionamento e repository",
    contactLabel:"CONTATTI", contactTitle:"Hai un progetto<br>in mente?",
    contactText:"Puoi vedere i progetti che sto sviluppando e contattarmi attraverso il mio profilo GitHub.",
    contactButton:"Vai al mio GitHub", footerDescription:"Portfolio personale · Web & Software",
    backTop:"Torna all'inizio ↑", footerNote:"Progetti personali e dimostrativi, presentati come tali."
  },
  en: {
    navWork:"Projects", navWhat:"What I do", navAbout:"About",
    heroLabel:"PERSONAL PORTFOLIO",
    heroTitle:"Web and software projects,<br><span>built with care.</span>",
    heroText:"I'm Dani. I enjoy turning ideas into digital projects: clear websites, simple tools and solutions designed to be genuinely useful.",
    heroButton:"Explore projects", githubProfile:"GitHub profile",
    summaryLabel:"TWO FIELDS, ONE CURIOSITY",
    summaryWeb:"Websites, interfaces and responsive pages",
    summarySoftware:"Tools and small applications",
    summaryFoot:"Learning by designing and building.",
    workLabel:"SELECTED WORK", workTitle:"What I'm working on.",
    workIntro:"Two different projects, both driven by the desire to design, build and improve something tangible.",
    personalProject:"PERSONAL PROJECT", inProgress:"IN DEVELOPMENT",
    mailflowText:"A web application for receiving, organising and analysing emails. An ongoing project involving interfaces, data management and email service integrations.",
    tagIntegrations:"Integrations", tagBackend:"Backend",
    mailflowNote:"Personal project · Source code is private",
    demoProject:"DEMO PROJECT", demoReady:"COMPLETED DEMO",
    lumeText:"A demo website for a fictional Italian restaurant. It includes a visual identity, interactive menu, photo gallery and responsive layout. Built with AI assistance.",
    openProject:"Open the project",
    workNote:"Mailflow is a personal project in development. LUME is a demo project, not commissioned client work.",
    whatLabel:"WHAT I CAN WORK ON", whatTitle:"From websites<br>to small tools.",
    whatIntro:"I'm especially interested in small, clearly scoped projects with a practical goal and a tangible result.",
    offerOneTitle:"Business websites and landing pages", offerOneText:"Simple, organised web pages that adapt to smaller screens.",
    offerTwoTitle:"Website updates and improvements", offerTwoText:"Small changes to HTML, CSS, layouts and content presentation.",
    offerThreeTitle:"Small Python programs", offerThreeText:"Simple tools to organise information or streamline a specific task.",
    profileLabel:"ABOUT", profileTitle:"Learning by building.",
    profileText:"I enjoy understanding how things work and trying to build them. Working on personal projects helps me learn, encounter real problems and find ways to solve them.",
    profileTextTwo:"A project isn't finished just because it works: clarity, organisation and ease of use matter too.",
    moreGithub:"More projects on GitHub", skillsTitle:"TECHNOLOGIES I USE",
    skillHtml:"Page structure", skillCss:"Styling and responsive layouts",
    skillPython:"Programs and small tools", skillGit:"Version control and repositories",
    contactLabel:"CONTACT", contactTitle:"Have a project<br>in mind?",
    contactText:"You can explore the projects I'm building and reach me through my GitHub profile.",
    contactButton:"Visit my GitHub", footerDescription:"Personal portfolio · Web & Software",
    backTop:"Back to top ↑", footerNote:"Personal and demo projects, clearly presented as such."
  }
};

function setLanguage(language) {
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translated = translations[language][key];
    if (translated) element.innerHTML = translated;
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!open));
  navMenu.classList.toggle("open", !open);
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
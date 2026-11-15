const copy = {
 it: {
  navProjects:"Progetti",navSkills:"Competenze",navAbout:"Chi sono",navContact:"Contatti",
  heroEyebrow:"PORTFOLIO PERSONALE",heroTitle:"Creo progetti digitali<br>con <span>idee chiare.</span>",
  heroDescription:"Sono Dani. Realizzo siti web e piccoli strumenti software, con attenzione alla struttura, alla semplicità e a come le persone li utilizzano.",
  heroProjects:"Esplora i progetti",heroGithub:"Profilo GitHub",heroFootnote:"Progetti personali · Web · Software",
  asideCaption:"Dalla prima idea a qualcosa che funziona.",ribbonLabel:"TECNOLOGIE",
  projectsEyebrow:"UNA SELEZIONE",projectsTitle:"Progetti, non solo idee.",
  projectsIntro:"Una selezione di lavori personali e sperimentazioni. Ogni progetto nasce per mettere in pratica competenze e imparare qualcosa di nuovo.",
  personalProject:"PROGETTO PERSONALE",inDevelopment:"IN SVILUPPO",
  mailflowDescription:"Un'applicazione web per organizzare e analizzare le email. Un progetto in evoluzione che mi permette di lavorare su interfaccia, gestione dei dati e integrazione di servizi email.",
  tagIntegrations:"Integrazioni",tagData:"Gestione dati",privateProject:"Progetto personale · Codice non pubblico",
  demoProject:"PROGETTO DIMOSTRATIVO",completedDemo:"DEMO COMPLETA",
  lumeDescription:"Sito web dimostrativo per un ristorante italiano contemporaneo. Comprende identità visiva, menu interattivo, galleria e layout responsive; realizzato con supporto AI.",
  visitProject:"Visita il progetto",
  projectsDisclaimer:"Mailflow è un progetto personale in sviluppo. LUME è un esercizio dimostrativo: il ristorante è immaginario e il sito è stato realizzato con supporto AI.",
  servicesEyebrow:"COSA POSSO FARE",servicesTitle:"Diamo forma<br>alla tua idea.",
  servicesIntro:"Preferisco progetti chiari e ben definiti, con obiettivi concreti e dimensioni adatte al lavoro da svolgere.",
  serviceOneTitle:"Siti web e landing page",serviceOneText:"Pagine semplici e curate per presentare un'attività, un servizio o un progetto.",
  serviceTwoTitle:"Miglioramenti HTML e CSS",serviceTwoText:"Interventi su struttura, impaginazione e visualizzazione da smartphone.",
  serviceThreeTitle:"Piccoli strumenti Python",serviceThreeText:"Programmi essenziali per organizzare informazioni o semplificare attività circoscritte.",
  skillsEyebrow:"STRUMENTI DI LAVORO",skillsTitle:"Le tecnologie<br>che utilizzo.",
  skillsDescription:"Una base pratica che continuo ad ampliare attraverso progetti personali ed esercizio.",
  aboutEyebrow:"QUALCOSA SU DI ME",aboutTitle:"Imparare facendo.",
  aboutText:"Mi piace capire come funzionano gli strumenti digitali e trasformare le idee in progetti concreti. Sviluppo progetti personali per consolidare le mie competenze e affrontare problemi sempre diversi.",
  aboutTextTwo:"Cerco di dare a ogni lavoro una struttura chiara, un'interfaccia ordinata e uno scopo preciso.",
  aboutGithub:"Scopri il mio GitHub",contactEyebrow:"IL PROSSIMO PROGETTO",contactTitle:"Hai un'idea<br>da realizzare?",
  contactText:"Per ora puoi esplorare i miei progetti e seguire quello che sto costruendo su GitHub. Un recapito professionale dedicato verrà aggiunto prima di usare questa pagina per richieste di lavoro.",
  contactButton:"Vai al profilo GitHub",footerText:"Portfolio personale · Web & Software",
  backTop:"Torna all'inizio ↑",footerNote:"Progetti personali e dimostrativi, descritti come tali."
 },
 en: {
  navProjects:"Projects",navSkills:"Skills",navAbout:"About",navContact:"Contact",
  heroEyebrow:"PERSONAL PORTFOLIO",heroTitle:"I build digital projects<br>with <span>clear ideas.</span>",
  heroDescription:"I'm Dani. I build websites and small software tools, paying attention to structure, simplicity and the way people use them.",
  heroProjects:"Explore projects",heroGithub:"GitHub profile",heroFootnote:"Personal projects · Web · Software",
  asideCaption:"From a first idea to something that works.",ribbonLabel:"TECHNOLOGIES",
  projectsEyebrow:"SELECTED WORK",projectsTitle:"Projects, not just ideas.",
  projectsIntro:"A selection of personal projects and experiments. Each one is a way to put skills into practice and learn something new.",
  personalProject:"PERSONAL PROJECT",inDevelopment:"IN DEVELOPMENT",
  mailflowDescription:"A web application for organising and analysing emails. An evolving project that lets me work on interfaces, data management and email service integrations.",
  tagIntegrations:"Integrations",tagData:"Data management",privateProject:"Personal project · Source code is private",
  demoProject:"DEMO PROJECT",completedDemo:"COMPLETED DEMO",
  lumeDescription:"A demo website for a contemporary Italian restaurant. It includes a visual identity, interactive menu, gallery and responsive layout; built with AI assistance.",
  visitProject:"View the project",
  projectsDisclaimer:"Mailflow is a personal project in development. LUME is a demo: the restaurant is fictional and the website was built with AI assistance.",
  servicesEyebrow:"WHAT I CAN DO",servicesTitle:"Let's shape<br>your idea.",
  servicesIntro:"I prefer clear, well-defined projects with practical goals and a scope that fits the work involved.",
  serviceOneTitle:"Websites and landing pages",serviceOneText:"Simple, carefully designed pages for a business, service or project.",
  serviceTwoTitle:"HTML and CSS improvements",serviceTwoText:"Changes to layout, structure and mobile presentation.",
  serviceThreeTitle:"Small Python tools",serviceThreeText:"Simple programs to organise information or streamline well-defined tasks.",
  skillsEyebrow:"TOOLS I USE",skillsTitle:"Technologies<br>I work with.",
  skillsDescription:"A practical foundation that I keep building through personal projects and practice.",
  aboutEyebrow:"A LITTLE ABOUT ME",aboutTitle:"Learning by building.",
  aboutText:"I enjoy understanding how digital tools work and turning ideas into practical projects. I build personal projects to strengthen my skills and work through different kinds of problems.",
  aboutTextTwo:"I aim to give every project a clear structure, an organised interface and a specific purpose.",
  aboutGithub:"Explore my GitHub",contactEyebrow:"THE NEXT PROJECT",contactTitle:"Have an idea<br>to build?",
  contactText:"For now, you can explore my projects and follow what I'm building on GitHub. A dedicated professional contact address will be added before using this page for work enquiries.",
  contactButton:"Visit my GitHub profile",footerText:"Personal portfolio · Web & Software",
  backTop:"Back to top ↑",footerNote:"Personal and demo projects, clearly described as such."
 }
};

const languageButtons = document.querySelectorAll("[data-lang]");
function setLanguage(language) {
 document.documentElement.lang = language;
 document.querySelectorAll("[data-i18n]").forEach((element) => {
  const key = element.dataset.i18n;
  if (copy[language][key]) element.innerHTML = copy[language][key];
 });
 languageButtons.forEach((button) => {
  const selected = button.dataset.lang === language;
  button.classList.toggle("active", selected);
  button.setAttribute("aria-pressed", String(selected));
 });
}
languageButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));

const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
 const open = toggle.getAttribute("aria-expanded") === "true";
 toggle.setAttribute("aria-expanded", String(!open));
 navLinks.classList.toggle("open", !open);
});
navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
 navLinks.classList.remove("open");
 toggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
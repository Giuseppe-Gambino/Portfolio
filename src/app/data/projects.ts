export interface Project {
  name: string;
  color: string;
  categories: string[];
  year: number;
  description: string;
  image: string;
  link: string;
  github: string;
  technologies: string[];
}

export const PROJECTS: Project[] = [
  {
    name: 'STRIDE',
    color: '#2A365F',
    categories: ['Full Stack', 'Branding', 'E-commerce'],
    year: 2025,
    description: `STRIDE è un e-commerce full stack sviluppata in autonomia come progetto finale del mio percorso con Epicode. Il progetto, realizzato in un mese, rappresenta una piattaforma completa per la vendita online, con funzionalità moderne sia lato utente che lato amministratore.`,
    image: 'STRIDE.png',
    link: 'https://fascinating-baklava-37ead4.netlify.app',
    github: 'https://github.com/Giuseppe-Gambino/Capstone-Project',
    technologies: ['Angular', 'TailwindCSS', 'Spring Boot', 'PostgreSQL'],
  },
  {
    name: 'Spotify',
    color: '#15803d',
    categories: ['Music', 'Branding', 'Vanilla JS', 'Clonazione UI'],
    year: 2024,
    description: `Durante una settimana intensiva di bootcamp, abbiamo realizzato in team una riproduzione funzionale dell’interfaccia di Spotify utilizzando tecnologie front-end: HTML, CSS/SCSS e JavaScript (Vanilla). Il progetto è nato con l'obiettivo di consolidare le competenze acquisite e simulare una vera collaborazione in team su un'app real-world.`,
    image: 'spotify.png',
    link: '',
    github: 'https://github.com/Rik991/Build-Week-2-Spotify',
    technologies: ['HTML-CSS-JS', 'BootStrap', 'SCSS'],
  },
  {
    name: 'NgeFlix',
    color: '#450a0a',
    categories: ['Front-End', 'Statico', 'Responsive Layout'],
    year: 2025,
    description: `In una giornata di sviluppo intensivo, ho realizzato una web app di film in stile Netflix, utilizzando il framework Angular per la struttura e Bootstrap per lo stile. Il progetto è completamente responsive, ottimizzato per dispositivi mobili, tablet e desktop. L’obiettivo era simulare un’interfaccia moderna e dinamica per una piattaforma di streaming.`,
    image: 'ngeflix.png',
    link: '',
    github: 'https://github.com/Giuseppe-Gambino/Ngeflix',
    technologies: ['Angular', 'BootStrap', 'Json Server'],
  },
  {
    name: 'Medium',
    color: '#EFD633',
    categories: ['Web Design', 'Responsive Layout', 'Vanilla', 'Clonazione UI'],
    year: 2024,
    description: `Durante un'esercitazione individuale ho realizzato una riproduzione fedele della homepage di Medium utilizzando esclusivamente HTML5 e CSS3, senza framework o librerie esterne (Vanilla). Il focus principale è stato sulla precisione visiva e sulla responsività, per adattare il layout a diverse dimensioni di schermo (mobile, tablet, desktop).`,
    image: 'medium.png',
    link: '',
    github: 'https://github.com/Giuseppe-Gambino/home-page-medium',
    technologies: ['HTML5', 'CSS3', 'Media Queries'],
  },
];

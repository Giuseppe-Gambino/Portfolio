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
    color: '#1a1a31',
    categories: ['Full Stack', 'Branding', 'E-commerce'],
    year: 2025,
    description: `STRIDE è un'applicazione e-commerce full stack sviluppata in autonomia come progetto finale del mio percorso con Epicode. Il progetto, realizzato in un mese, rappresenta una piattaforma completa per la vendita online, con funzionalità moderne sia lato utente che lato amministratore.`,
    image: 'STRIDE.png',
    link: 'https://fascinating-baklava-37ead4.netlify.app',
    github: 'https://github.com/Giuseppe-Gambino/Capstone-Project',
    technologies: ['Angular', 'TailwindCSS', 'Spring Boot', 'PostgreSQL'],
  },
];

// ============================================================================
//  PROFIL DE L'ÉTABLISSEMENT
//  C'est le fichier à adapter pour décliner le site pour une autre école :
//  identité, coordonnées, tarifs par défaut, textes de l'accueil, cycles, FAQ…
//  Les images référencées se trouvent dans le dossier public/.
//
//  En mode API, les coordonnées et les tarifs (bloc `settings`) sont ensuite
//  remplacés par ceux enregistrés dans l'administration (GET /api/public/settings).
// ============================================================================
import type { Settings } from '../models'

export interface CycleProfile {
  /** Nom du cycle. Doit correspondre aux cycles acceptés par le backend (utils/schemas.js). */
  name: string
  /** Segment d'URL de la page d'admission : /admissions/<slug>. */
  slug: string
  age: string
  text: string
  /** Classes proposées. Doivent correspondre aux classes acceptées par le backend. */
  classes: string[]
  skills: string[]
  programs: { icon: string; title: string; text: string }[]
}

export interface SchoolProfile {
  /** Identifiant technique (sert aussi de clé de stockage des fake data). */
  id: string
  logo: string
  /** Valeurs par défaut des paramètres (affichées avant chargement et utilisées par les fake data). */
  settings: Settings
  footerText: string
  hero: { eyebrow: string; titleLines: string[]; highlight: string; intro: string; images: string[] }
  founder: {
    photo: string
    photoAlt: string
    eyebrow: string
    titleLines: string[]
    greeting: string
    paragraphs: string[]
    signature: string
  }
  history: { title: string; paragraphs: string[]; stats: { value: string; label: string }[] }
  values: { icon: string; title: string; text: string }[]
  faq: { q: string; a: string; link?: { to: string; label: string } }[]
  cycles: CycleProfile[]
  admissions: { documents: string[] }
}

export const school: SchoolProfile = {
  id: 'css-rene-descartes-dapaong',
  logo: '/logo-css-rene-descartes.png',
  settings: {
    name: 'CSS RENÉ DESCARTES',
    shortName: 'CSS RENÉ DESCARTES',
    slogan: 'PENSER, APPRENDRE, RÉUSSIR',
    address: 'Quartier Worogo — Dapaong, Togo',
    email: 'contact@css-renedescartes.tg',
    phone: '+228 91 09 19 32',
    phone2: '+228 99 17 48 77',
    hours: 'Lundi – Vendredi : 7h00 – 17h00',
    annualFee: 80000,
    canteenFee: 400,
    badgeFee: 1000,
    uniformFee: 3500,
    apeFee: 2000,
  },
  footerText:
    'Un complexe scolaire à Dapaong qui accompagne les élèves de la 6e jusqu’au baccalauréat et au-delà, avec rigueur et esprit scientifique.',
  hero: {
    eyebrow: 'RIGUEUR - SCIENCE - RÉUSSITE',
    titleLines: ['Complexe Scolaire', 'Secondaire'],
    highlight: 'RENÉ DESCARTES',
    intro:
      'Bienvenue sur le site officiel du CSS RENÉ DESCARTES, au quartier Worogo à Dapaong : un complexe scolaire qui accompagne les élèves du collège au lycée, jusqu’au baccalauréat et aux formations post-bac.',
    images: ['/hero/hero-1.jpg', '/hero/hero-2.jpg', '/hero/hero-3.jpg'],
  },
  founder: {
    photo: '/directeur-general.jpg',
    photoAlt: 'La direction du CSS RENÉ DESCARTES',
    eyebrow: 'UN MOT DE LA DIRECTION',
    titleLines: ['Penser par soi-même,', 'réussir ensemble.'],
    greeting: 'Chers parents, chers élèves,',
    paragraphs: [
      'Au CSS RENÉ DESCARTES, nous croyons à la force de la méthode, de la rigueur et de l’esprit critique. Notre ambition est d’aider chaque élève à apprendre à raisonner, à travailler avec régularité et à prendre confiance en lui.',
      'Notre équipe éducative accompagne les élèves avec exigence et attention, de la 6e jusqu’à la Terminale, en lien étroit avec les familles de Worogo et de toute la ville de Dapaong, pour qu’ils réussissent le BEPC, le baccalauréat et la suite de leurs études.',
    ],
    signature: 'DYAME Lampouguin — Censeur',
  },
  history: {
    title: 'Notre Histoire',
    paragraphs: [
      'Le CSS RENÉ DESCARTES est un complexe scolaire implanté dans le quartier Worogo, à Dapaong, chef-lieu de la région des Savanes. Il regroupe plusieurs niveaux d’enseignement sur un même site : le collège, le lycée et des formations du supérieur.',
      'Son cœur d’activité historique est l’enseignement secondaire. Enregistré auprès du Ministère de l’Éducation nationale sous l’appellation LPL René Descartes (Lycée Privé Laïc), il prépare les élèves du second degré, de la 6e jusqu’à la Terminale, aux examens du BEPC et du baccalauréat.',
      'L’établissement s’étend aujourd’hui vers le supérieur, avec des parcours post-bac (de type BTS ou formations courtes), pour permettre aux jeunes de la région de poursuivre leurs études près de chez eux.',
    ],
    stats: [
      { value: 'Un suivi attentif', label: 'Chaque élève est suivi avec attention.' },
      { value: 'Un cadre sûr', label: 'Pour apprendre dans de bonnes conditions.' },
      { value: 'Pour bien réussir', label: 'Notre engagement pour chaque enfant.' },
    ],
  },
  values: [
    { icon: 'graduation', title: 'Excellence académique', text: 'Une préparation sérieuse au BEPC et au baccalauréat.' },
    { icon: 'idea', title: 'Esprit scientifique', text: 'Apprendre à raisonner avec méthode et esprit critique.' },
    { icon: 'heart', title: 'Discipline et travail', text: 'Le goût de l’effort et la rigueur au quotidien.' },
    { icon: 'users', title: 'Communauté', text: 'Une communauté éducative unie avec les familles de Dapaong.' },
  ],
  faq: [
    {
      q: 'Quels niveaux propose l’établissement ?',
      a: 'Le CSS RENÉ DESCARTES accueille les élèves de la 6e jusqu’à la Terminale (préparation au BEPC et au baccalauréat), et propose aussi des parcours post-bac (de type BTS ou formations courtes).',
    },
    {
      q: 'Avez-vous un bus scolaire ?',
      a: 'Contactez le secrétariat pour connaître les possibilités de transport et les quartiers de Dapaong desservis.',
    },
    {
      q: 'Les frais de scolarité au CSS RENÉ DESCARTES s’élèvent à combien ?',
      a: 'La scolarité annuelle et les frais annexes sont détaillés sur la page Tarifs et scolarité.',
      link: { to: '/tarifs', label: 'Voir les tarifs' },
    },
    {
      q: 'Quelles sont les échéances de paiement ?',
      a: 'Le paiement de la scolarité peut être effectué en trois tranches. Le calendrier est communiqué lors de l’inscription.',
    },
    {
      q: 'Vous semblez avoir un programme bien défini que vous leur léguez ?',
      a: 'Nos programmes conjuguent apprentissages fondamentaux, développement personnel et ouverture sur le monde. Découvrez le détail dans la rubrique Nos cycles.',
      link: { to: '/cycles', label: 'Voir nos cycles' },
    },
  ],
  cycles: [
    {
      name: 'Collège',
      slug: 'college',
      age: '12 à 16 ans',
      text: 'Le collège prépare les élèves à poursuivre leurs études avec confiance. Les enseignements approfondissent les connaissances, les méthodes de travail et l’esprit critique.',
      classes: ['6e', '5e', '4e', '3e'],
      skills: [
        'Enseignements généraux approfondis',
        'Méthodologie et autonomie',
        'Accompagnement et suivi des progrès',
        'Préparation aux examens et à l’orientation',
      ],
      programs: [
        {
          icon: 'graduation',
          title: 'Excellence académique',
          text: 'Des enseignements exigeants et un suivi régulier.',
        },
        {
          icon: 'book',
          title: 'Langues et culture',
          text: 'S’exprimer et s’ouvrir à de nouveaux horizons.',
        },
        {
          icon: 'shield',
          title: 'Préparer l’avenir',
          text: 'Construire son projet et développer ses compétences.',
        },
      ],
    },
  ],
  admissions: {
    documents: [
      'Une (1) copie légalisée de l’acte de naissance ou un jugement supplétif légalisé (dossier scolaire pour tout le cycle)',
      'Un (1) certificat de scolarité',
      'Les bulletins de notes de l’année écoulée (et le CEPD pour l’entrée en 6e)',
      'Un carnet de correspondance (pour la réinscription)',
      'Une (1) chemise dossier à rabat',
      'Un (1) carnet de santé',
    ],
  },
}

/** Classes par cycle, dérivées du profil (formulaires, filtres, fake data). */
export const classesByCycle: Record<string, string[]> = Object.fromEntries(
  school.cycles.map((c) => [c.name, c.classes]),
)

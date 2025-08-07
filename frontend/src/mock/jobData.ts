// jobData.ts - Mock-Daten für die Karriereseite

export interface Job {
    id: number;
    title: string;
    department: string;
    location: string;
    type: string;
    experience: string;
    teamSize: string;
    posted: string;
    description: string;
    responsibilities: string[];
    requirements: string[];
    benefits: string[];
}

export const jobOpenings: Job[] = [
    {
        id: 1,
        title: "Senior Projektingenieur Anlagenbau",
        department: "Engineering",
        location: "Graz, Österreich",
        type: "Vollzeit",
        experience: "5+ Jahre",
        teamSize: "8-12 Personen",
        posted: "Vor 2 Tagen",
        description: "Wir suchen einen erfahrenen Projektingenieur für die Leitung komplexer Industrieanlagen-Projekte. Sie verantworten die technische Projektabwicklung von der Konzeption bis zur Inbetriebnahme.",
        responsibilities: [
            "Technische Projektleitung von Industrieanlagen",
            "Koordination mit interdisziplinären Teams",
            "Kundenbetreuung und Abstimmung",
            "Qualitätssicherung und Terminplanung"
        ],
        requirements: [
            "Abgeschlossenes Studium Maschinenbau oder vergleichbar",
            "Mindestens 5 Jahre Berufserfahrung im Anlagenbau",
            "Erfahrung in der Projektleitung",
            "Sehr gute Deutsch- und Englischkenntnisse"
        ],
        benefits: [
            "Attraktives Gehaltspaket",
            "Flexible Arbeitszeiten",
            "Weiterbildungsmöglichkeiten",
            "Modernes Arbeitsumfeld"
        ]
    },
    {
        id: 2,
        title: "Projektmanager Pharma",
        department: "Projektmanagement",
        location: "Wien, Österreich",
        type: "Vollzeit",
        experience: "3+ Jahre",
        teamSize: "15+ Personen",
        posted: "Vor 1 Woche",
        description: "Für unsere wachsende Pharma-Sparte suchen wir einen engagierten Projektmanager zur Steuerung von GMP-konformen Anlagenprojekten.",
        responsibilities: [
            "Projektmanagement von Pharma-Anlagen",
            "GMP-konforme Projektabwicklung",
            "Stakeholder-Management",
            "Risikomanagement und Budgetkontrolle"
        ],
        requirements: [
            "Erfahrung im Pharma-Anlagenbau",
            "Kenntnisse der GMP-Richtlinien",
            "Projektmanagement-Zertifizierung von Vorteil",
            "Teamführungskompetenzen"
        ],
        benefits: [
            "Pharma-Branchenzuschlag",
            "30 Tage Urlaub",
            "Betriebliche Altersvorsorge",
            "Gesundheitsförderung"
        ]
    },
    {
        id: 3,
        title: "CAD-Konstrukteur Anlagentechnik",
        department: "Design & Engineering",
        location: "Linz, Österreich",
        type: "Vollzeit",
        experience: "2+ Jahre",
        teamSize: "5-8 Personen",
        posted: "Vor 3 Tagen",
        description: "Verstärken Sie unser Konstruktionsteam als CAD-Spezialist für innovative Anlagentechnik-Lösungen mit modernster Software.",
        responsibilities: [
            "3D-CAD-Konstruktion von Anlagenkomponenten",
            "Erstellung technischer Dokumentationen",
            "Zusammenarbeit mit Planungsteams",
            "Optimierung von Konstruktionslösungen"
        ],
        requirements: [
            "Ausbildung als Technischer Zeichner oder Ingenieur",
            "Sehr gute AutoCAD/Inventor Kenntnisse",
            "Grundkenntnisse in der Anlagentechnik",
            "Genauigkeit und technisches Verständnis"
        ],
        benefits: [
            "Moderne CAD-Arbeitsplätze",
            "Regelmäßige Software-Schulungen",
            "Homeoffice-Möglichkeiten",
            "Junges, dynamisches Team"
        ]
    },
    {
        id: 4,
        title: "Bauleiter Industrieanlagen",
        department: "Site Services",
        location: "Salzburg, Österreich",
        type: "Vollzeit",
        experience: "4+ Jahre",
        teamSize: "20+ Personen",
        posted: "Vor 5 Tagen",
        description: "Als Bauleiter koordinieren Sie die Errichtung komplexer Industrieanlagen direkt vor Ort und sorgen für termingerechte Projektabwicklung.",
        responsibilities: [
            "Baustellenleitung und -koordination",
            "Qualitätskontrolle und Abnahmen",
            "Sicherheitsmanagement",
            "Kommunikation mit Subunternehmern"
        ],
        requirements: [
            "Technische Ausbildung oder Studium",
            "Erfahrung in der Bauleitung",
            "Führungserfahrung und Durchsetzungsvermögen",
            "Reisebereitschaft"
        ],
        benefits: [
            "Auslösungen und Spesen",
            "Firmenwagen",
            "Überstundenausgleich",
            "Projektprämien"
        ]
    },
    {
        id: 5,
        title: "Trainee Anlagenbau",
        department: "Nachwuchsförderung",
        location: "Graz, Österreich",
        type: "Vollzeit",
        experience: "Berufseinsteiger",
        teamSize: "Rotation",
        posted: "Vor 1 Woche",
        description: "Starten Sie Ihre Karriere im Anlagenbau mit unserem strukturierten 18-monatigen Trainee-Programm in verschiedenen Fachbereichen.",
        responsibilities: [
            "Rotation durch verschiedene Abteilungen",
            "Mitarbeit in echten Projekten",
            "Aufbau eines internen Netzwerks",
            "Entwicklung fachlicher Kompetenzen"
        ],
        requirements: [
            "Abgeschlossenes Studium (Maschinenbau, Verfahrenstechnik)",
            "Interesse am Anlagenbau",
            "Teamfähigkeit und Lernbereitschaft",
            "Sehr gute Kommunikationsfähigkeiten"
        ],
        benefits: [
            "Strukturiertes Entwicklungsprogramm",
            "Mentoring und Coaching",
            "Übernahmegarantie bei Erfolg",
            "Internationale Projekterfahrung"
        ]
    },
    {
        id: 6,
        title: "Automatisierungstechniker",
        department: "Automation",
        location: "Innsbruck, Österreich",
        type: "Vollzeit",
        experience: "3+ Jahre",
        teamSize: "6-10 Personen",
        posted: "Vor 4 Tagen",
        description: "Für innovative Automatisierungslösungen in der Prozessindustrie suchen wir einen Spezialisten für SPS-Programmierung und Leitsysteme.",
        responsibilities: [
            "SPS-Programmierung (Siemens, ABB)",
            "Inbetriebnahme von Leitsystemen",
            "Optimierung von Automatisierungslösungen",
            "Support und Wartung bestehender Systeme"
        ],
        requirements: [
            "Ausbildung Elektrotechnik/Automatisierung",
            "Erfahrung mit SPS-Systemen",
            "Kenntnisse in SCADA/HMI-Systemen",
            "Problemlösungsorientiert"
        ],
        benefits: [
            "Technologie-Zuschlag",
            "Zertifizierungsprogramme",
            "Moderne Testumgebung",
            "Internationale Projekte"
        ]
    },
    {
        id: 7,
        title: "Verfahrensingenieur Chemie",
        department: "Engineering",
        location: "Graz, Österreich",
        type: "Vollzeit",
        experience: "3-5 Jahre",
        teamSize: "10-15 Personen",
        posted: "Vor 6 Tagen",
        description: "Für die Planung und Optimierung chemischer Prozessanlagen suchen wir einen erfahrenen Verfahrensingenieur mit Schwerpunkt Chemie.",
        responsibilities: [
            "Auslegung verfahrenstechnischer Anlagen",
            "Prozessoptimierung und Scale-up",
            "Erstellung von Verfahrensfließbildern",
            "Unterstützung bei der Inbetriebnahme"
        ],
        requirements: [
            "Studium der Verfahrenstechnik oder Chemieingenieurwesen",
            "Erfahrung in der chemischen Industrie",
            "Kenntnisse in Prozesssimulation",
            "Analytisches Denkvermögen"
        ],
        benefits: [
            "Fachliche Weiterbildung",
            "Flexible Arbeitszeiten",
            "Betriebliche Altersvorsorge",
            "Kantine und Fitnessstudio"
        ]
    },
    {
        id: 8,
        title: "Qualitätsmanager GMP",
        department: "Qualitätsmanagement",
        location: "Wien, Österreich",
        type: "Vollzeit",
        experience: "5+ Jahre",
        teamSize: "5-8 Personen",
        posted: "Vor 3 Tagen",
        description: "Zur Verstärkung unseres QM-Teams suchen wir einen erfahrenen Qualitätsmanager mit fundiertem GMP-Know-how.",
        responsibilities: [
            "Implementierung von QM-Systemen",
            "Durchführung von GMP-Audits",
            "Schulung von Mitarbeitern",
            "Dokumentenmanagement"
        ],
        requirements: [
            "Erfahrung im pharmazeutischen Qualitätsmanagement",
            "Umfassende GMP-Kenntnisse",
            "Auditerfahrung",
            "Sehr gute Englischkenntnisse"
        ],
        benefits: [
            "Attraktive Vergütung",
            "Weiterbildungsbudget",
            "30 Tage Urlaub",
            "Internationale Projekte"
        ]
    }
];

export const departments = [
    'all',
    'Engineering',
    'Projektmanagement',
    'Design & Engineering',
    'Site Services',
    'Nachwuchsförderung',
    'Automation',
    'Qualitätsmanagement'
];

export const getDepartmentColor = (department: string): string => {
    const colors: Record<string, string> = {
        'Engineering': '#1e3a5f',
        'Projektmanagement': '#8fa0a5',
        'Design & Engineering': '#1e3a5f',
        'Site Services': '#8fa0a5',
        'Nachwuchsförderung': '#8fa0a5',
        'Automation': '#1e3a5f',
        'Qualitätsmanagement': '#1e3a5f'
    };
    return colors[department] || colors['Engineering'];
};
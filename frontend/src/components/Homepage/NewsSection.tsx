import { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, ArrowRight, User, TrendingUp, Star } from 'lucide-react';
import styles from '../../css/NewsSection.module.css';

// Interface für Article-Objekte
interface Article {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    author: string;
    date: string;
    image: string;
    featured: boolean;
    layout: 'hero' | 'featured' | 'standard';
    readTime?: string;
}

const NewsSection = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Kleine Verzögerung für sanfteren Übergang
                    setTimeout(() => {
                        setIsVisible(true);
                    }, 100);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px' // Triggert früher
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    // Ersetzen Sie die newsArticles Array in Ihrem React-Code mit diesem:

    const newsArticles: Article[] = [
        {
            id: 1,
            title: "KI-Revolution im Industrieanlagenbau: Wie maschinelles Lernen die Zukunft der Automatisierung prägt",
            excerpt: "Künstliche Intelligenz transformiert die Art, wie wir Industrieanlagen planen, bauen und betreiben. Ein tiefer Einblick in die Technologien von morgen.",
            content: `Die Digitalisierung hat eine neue Ära im Industrieanlagenbau eingeläutet. Künstliche Intelligenz und maschinelles Lernen revolutionieren nicht nur die Planungsphase, sondern transformieren die gesamte Wertschöpfungskette der Industrie.

**Intelligente Planungstools**

Moderne KI-Systeme können komplexe Anlagendesigns in Bruchteilen der Zeit erstellen, die traditionelle Methoden benötigen würden. Durch die Analyse historischer Daten und die Simulation verschiedener Szenarien optimieren diese Systeme automatisch Layouts, Materialflüsse und Energieverbräuche.

**Predictive Maintenance**

Einer der größten Durchbrüche liegt in der vorausschauenden Wartung. Sensoren sammeln kontinuierlich Daten über Vibrationsmuster, Temperaturen und andere kritische Parameter. KI-Algorithmen analysieren diese Datenströme in Echtzeit und können Ausfälle Wochen oder sogar Monate im Voraus vorhersagen.

**Automatisierte Qualitätskontrolle**

Computer Vision und Deep Learning ermöglichen es, Produktionsfehler mit einer Genauigkeit zu erkennen, die menschliche Inspektoren bei weitem übertrifft. Diese Systeme lernen kontinuierlich dazu und werden mit jeder Inspektion präziser.

**Die Zukunft der Smart Factory**

Die Integration verschiedener KI-Technologien führt zur Entstehung wirklich intelligenter Fabriken, die sich selbst optimieren, Probleme eigenständig lösen und kontinuierlich ihre Effizienz steigern. Diese Entwicklung wird die Industrie in den kommenden Jahren grundlegend verändern.`,
            category: "Technologie",
            author: "Dr. Sarah Chen",
            date: "15. Januar 2025",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=800&fit=crop",
            featured: true,
            layout: "hero"
        },
        {
            id: 2,
            title: "Nachhaltige Prozessindustrie: Kreislaufwirtschaft als Schlüssel zum Erfolg",
            excerpt: "Wie innovative Recycling-Technologien und geschlossene Materialkreisläufe die Industrie revolutionieren.",
            content: `Die Transformation zu einer nachhaltigen Prozessindustrie ist nicht mehr nur eine ethische Verpflichtung, sondern ein wirtschaftlicher Imperativ. Unternehmen, die heute in Kreislaufwirtschaft investieren, sichern sich entscheidende Wettbewerbsvorteile für die Zukunft.

**Closed-Loop-Systeme**

Moderne Industrieanlagen werden zunehmend als geschlossene Kreisläufe konzipiert, in denen Abfälle aus einem Prozess als Rohstoffe für einen anderen dienen. Diese systematische Herangehensweise reduziert nicht nur den Ressourcenverbrauch, sondern schafft auch neue Geschäftsmodelle.

**Innovative Recycling-Technologien**

Neue Verfahren wie chemisches Recycling ermöglichen es, auch komplexe Materialien vollständig wiederzuverwerten. Polymerrecycling auf molekularer Ebene macht es möglich, aus Kunststoffabfällen wieder hochwertige Ausgangsmaterialien zu gewinnen, die in ihrer Qualität neuen Rohstoffen entsprechen.

**Digitale Zwillinge für Nachhaltigkeit**

Digital Twins ermöglichen es, verschiedene Nachhaltigkeitsszenarien zu simulieren und die optimale Balance zwischen Produktivität und Umweltverträglichkeit zu finden. Diese virtuellen Modelle helfen dabei, den ökologischen Fußabdruck systematisch zu reduzieren.

**Wirtschaftliche Vorteile**

Studien zeigen, dass Unternehmen mit konsequenter Kreislaufwirtschaft ihre Materialkosten um bis zu 40% senken können. Gleichzeitig entstehen neue Umsatzquellen durch die Verwertung von Nebenprodukten und die Entwicklung nachhaltiger Produktlinien.`,
            category: "Nachhaltigkeit",
            author: "Maria Hofstetter",
            date: "12. Januar 2025",
            image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop",
            featured: false,
            layout: "featured"
        },
        {
            id: 3,
            title: "Smart Manufacturing: Die vernetzte Fabrik wird Realität",
            excerpt: "Industrie 4.0 in der Praxis: Wie IoT, 5G und Edge Computing die Produktion revolutionieren.",
            content: `Die Smart Factory ist keine Zukunftsvision mehr, sondern industrielle Realität. Die Konvergenz von IoT, 5G-Kommunikation und Edge Computing schafft völlig neue Möglichkeiten für die Produktionsoptimierung und -automatisierung.

**IoT-Sensoren als Nervensystem**

Moderne Produktionsanlagen sind mit Tausenden von Sensoren ausgestattet, die kontinuierlich Daten über jeden Aspekt des Produktionsprozesses sammeln. Diese Sensoren bilden das Nervensystem der Smart Factory und ermöglichen eine bisher unerreichte Transparenz über alle Betriebsabläufe.

**5G: Die Kommunikationsrevolution**

Die fünfte Generation der Mobilfunktechnologie bringt die notwendige Bandbreite und niedrige Latenz, um industrielle Anwendungen in Echtzeit zu unterstützen. Mit Übertragungsgeschwindigkeiten von bis zu 10 Gigabit pro Sekunde und Latenzzeiten unter einer Millisekunde wird eine völlig neue Klasse von Anwendungen möglich.

**Edge Computing für Echtzeitentscheidungen**

Durch die Verlagerung der Datenverarbeitung an den Rand des Netzwerks können kritische Entscheidungen in Millisekunden getroffen werden, ohne dass Daten erst in die Cloud übertragen werden müssen. Dies ist besonders wichtig für sicherheitskritische Anwendungen und Prozesse, die sofortige Reaktionen erfordern.

**Adaptive Produktionssysteme**

Smart Manufacturing-Systeme können sich dynamisch an verändernde Anforderungen anpassen. Wenn ein Produktionsschritt ausfällt, reorganisiert sich das System automatisch und leitet die Produktion über alternative Pfade um, ohne dass menschliche Eingriffe notwendig sind.

**Integration und Interoperabilität**

Ein zentraler Aspekt von Smart Manufacturing ist die nahtlose Integration aller Systeme und Komponenten. Standardisierte Kommunikationsprotokolle und offene Schnittstellen sorgen dafür, dass Maschinen verschiedener Hersteller problemlos zusammenarbeiten können.`,
            category: "Innovation",
            author: "Dr. Thomas Reichert",
            date: "10. Januar 2025",
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop",
            featured: false,
            layout: "standard"
        },
        {
            id: 4,
            title: "Pharma 4.0: Digitalisierung in der Arzneimittelproduktion",
            excerpt: "Wie digitale Technologien die Pharmaindustrie sicherer, effizienter und patientenorientierter machen.",
            content: `Die Pharmaindustrie durchläuft derzeit eine der bedeutendsten Transformationen ihrer Geschichte. Die Digitalisierung revolutioniert nicht nur die Arzneimittelentwicklung, sondern verändert grundlegend die Art, wie Medikamente produziert, überwacht und an die Patienten gebracht werden.

**Continuous Manufacturing**

Der Übergang von der traditionellen Batch-Produktion zur kontinuierlichen Fertigung markiert einen Paradigmenwechsel in der pharmazeutischen Industrie. Continuous Manufacturing ermöglicht es, Arzneimittel in einem durchgängigen Prozess zu produzieren, was zu konsistenteren Produktqualitäten, reduzierten Produktionszeiten und niedrigeren Kosten führt.

**Real-Time Quality Control**

Moderne Analysesysteme können die Qualität von Arzneimitteln während der Produktion in Echtzeit überwachen. Process Analytical Technology (PAT) nutzt spektroskopische Methoden und künstliche Intelligenz, um kritische Qualitätsparameter kontinuierlich zu messen und sofort auf Abweichungen zu reagieren.

**Digital Twins in der Pharmaproduktion**

Digitale Zwillinge von Produktionsanlagen ermöglichen es, verschiedene Produktionsszenarien zu simulieren und zu optimieren, bevor sie in der realen Anlage implementiert werden. Dies reduziert das Risiko von Produktionsausfällen und ermöglicht eine präzisere Vorhersage von Produktionsergebnissen.

**Blockchain für die Supply Chain**

Die Pharmaindustrie nutzt Blockchain-Technologie, um die Integrität der Lieferkette zu gewährleisten und Arzneimittelfälschungen zu verhindern. Jeder Schritt von der Produktion bis zur Abgabe an den Patienten wird in einer unveränderlichen digitalen Kette dokumentiert.

**KI-gestützte Arzneimittelentwicklung**

Maschinelles Lernen und künstliche Intelligenz beschleunigen den Prozess der Wirkstoffidentifikation und -optimierung erheblich. KI-Algorithmen können aus riesigen Datenmengen neue Arzneimittelkandidaten identifizieren und deren Eigenschaften vorhersagen, was die Zeit bis zur Markteinführung drastisch verkürzt.

**Personalisierte Medizin**

Die Digitalisierung ermöglicht es auch, Arzneimittel individuell auf die Bedürfnisse einzelner Patienten zuzuschneiden. 3D-Druck-Technologien können Medikamente mit patientenspezifischen Dosierungen und Freisetzungsprofilen herstellen.

**Regulatorische Transformation**

Auch die Regulierungsbehörden passen sich an die digitale Transformation an. Konzepte wie "regulatory science" und digitale Einreichungen beschleunigen die Zulassungsprozesse und ermöglichen eine engere Zusammenarbeit zwischen Industrie und Behörden.

Die Zukunft der Pharmaindustrie wird geprägt sein von intelligenten, vernetzten und adaptiven Produktionssystemen, die nicht nur effizienter und kostengünstiger sind, sondern auch zu besseren Behandlungsergebnissen für die Patienten führen.`,
            category: "Pharma",
            author: "Prof. Dr. Lisa Wagner",
            date: "8. Januar 2025",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
            featured: true,
            layout: "standard"
        },
        {
            id: 5,
            title: "Wasserstofftechnologie: Der Energieträger der Zukunft",
            excerpt: "Grüne Wasserstoffproduktion als Schlüsseltechnologie für die Energiewende und klimaneutrale Industrie.",
            content: `Wasserstoff gilt als einer der wichtigsten Energieträger der Zukunft und spielt eine zentrale Rolle in der globalen Energiewende. Die Entwicklung effizienter und kostengünstiger Produktionsverfahren für grünen Wasserstoff steht im Mittelpunkt zahlreicher Forschungs- und Entwicklungsprojekte.

**Elektrolyse-Technologien**

Die Wasserelektrolyse ist derzeit das vielversprechendste Verfahren zur Herstellung von grünem Wasserstoff. Verschiedene Technologien wie die alkalische Elektrolyse, die PEM-Elektrolyse und die Hochtemperatur-Elektrolyse werden kontinuierlich weiterentwickelt, um höhere Wirkungsgrade und niedrigere Kosten zu erreichen.

**Integration erneuerbarer Energien**

Ein Schlüsselfaktor für die Wirtschaftlichkeit der Wasserstoffproduktion ist die direkte Kopplung mit erneuerbaren Energiequellen. Wind- und Solarparks werden zunehmend mit Elektrolyseanlagen kombiniert, um überschüssige Energie in speicherbaren Wasserstoff umzuwandeln.

**Industrielle Anwendungen**

In der Industrie findet Wasserstoff bereits heute vielfältige Anwendungen, von der Stahlproduktion über die chemische Industrie bis hin zur Raffinierung. Die Umstellung auf grünen Wasserstoff ermöglicht es diesen Industrien, ihre CO2-Emissionen drastisch zu reduzieren.

**Transport und Mobilität**

Wasserstoff-Brennstoffzellen bieten eine attraktive Alternative für schwere Nutzfahrzeuge, Schiffe und Flugzeuge, wo Batterien aufgrund ihres Gewichts und ihrer begrenzten Reichweite an ihre Grenzen stoßen. Die Entwicklung einer entsprechenden Infrastruktur schreitet weltweit voran.

**Speicher- und Transportlösungen**

Die Herausforderungen bei der Speicherung und dem Transport von Wasserstoff werden durch innovative Technologien wie die Umwandlung in synthetische Kraftstoffe oder die Entwicklung neuer Materialien für Hochdrucktanks gelöst.`,
            category: "Energie",
            author: "Ing. Michael Braun",
            date: "5. Januar 2025",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop",
            featured: false,
            layout: "standard"
        },
        {
            id: 6,
            title: "Cybersecurity in kritischen Infrastrukturen",
            excerpt: "Wie wir Industrieanlagen gegen Cyberangriffe schützen und gleichzeitig die Vorteile der Digitalisierung nutzen.",
            content: `Die zunehmende Vernetzung von Industrieanlagen bringt erhebliche Vorteile mit sich, schafft aber auch neue Angriffsflächen für Cyberkriminelle. Der Schutz kritischer Infrastrukturen vor Cyberangriffen ist zu einer der wichtigsten Aufgaben der modernen Industrie geworden.

**Zero Trust Architecture**

Das Konzept der Zero Trust Architecture revolutioniert die IT-Sicherheit in Industrieumgebungen. Anstatt auf traditionelle Perimeter-Sicherheit zu setzen, wird jeder Netzwerkzugriff kontinuierlich verifiziert und autorisiert, unabhängig vom Standort des Benutzers oder Geräts.

**Industrial Control Systems Security**

Spezialisierte Sicherheitslösungen für Industrial Control Systems (ICS) und SCADA-Systeme sind entscheidend für den Schutz kritischer Infrastrukturen. Diese Systeme erfordern maßgeschneiderte Sicherheitsansätze, die sowohl die betrieblichen Anforderungen als auch die Sicherheitsbedürfnisse berücksichtigen.

**KI-gestützte Bedrohungserkennung**

Künstliche Intelligenz und maschinelles Lernen ermöglichen es, verdächtige Aktivitäten in Industrienetzwerken in Echtzeit zu erkennen. Diese Systeme können Anomalien identifizieren, die auf einen möglichen Angriff hindeuten, und automatisch Gegenmaßnahmen einleiten.

**Incident Response und Recovery**

Ein effektiver Plan für die Reaktion auf Sicherheitsvorfälle ist unerlässlich. Dieser umfasst nicht nur die sofortige Eindämmung von Angriffen, sondern auch die schnelle Wiederherstellung des normalen Betriebs und die Analyse der Ursachen zur Verbesserung der zukünftigen Sicherheit.

**Compliance und Standards**

Die Einhaltung internationaler Sicherheitsstandards wie IEC 62443 und NIST ist nicht nur regulatorisch erforderlich, sondern bietet auch einen strukturierten Rahmen für die Implementierung effektiver Cybersecurity-Maßnahmen in industriellen Umgebungen.`,
            category: "Sicherheit",
            author: "Dr. Alexandra Müller",
            date: "3. Januar 2025",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
            featured: false,
            layout: "standard"
        }
    ];

    const handleArticleClick = (article: Article) => {
        setSelectedArticle(article);
    };

    const closeModal = () => {
        setSelectedArticle(null);
    };

    const getCategoryGradient = (category: string): string => {
        const gradients: Record<string, string> = {
            'Technologie': 'linear-gradient(135deg, #1E3A5F, #2d4a73)',
            'Nachhaltigkeit': 'linear-gradient(135deg, #10b981, #059669)',
            'Innovation': 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
            'Pharma': 'linear-gradient(135deg, #E67E22, #d97706)',
            'Energie': 'linear-gradient(135deg, #f59e0b, #d97706)',
            'Sicherheit': 'linear-gradient(135deg, #ef4444, #dc2626)'
        };
        return gradients[category] || gradients['Technologie'];
    };

    const getCardLayoutClass = (layout: Article['layout']): string => {
        const layoutClasses: Record<Article['layout'], string> = {
            'hero': styles.heroCard,
            'featured': styles.featuredCard,
            'standard': styles.standardCard
        };
        return layoutClasses[layout] || styles.standardCard;
    };

    return (
        <section ref={sectionRef} className={styles.newsSection}>
            <div className={styles.container}>
                {/* Header */}
                <div className={`${styles.header} ${isVisible ? styles.headerVisible : ''}`}>
                    <div className={styles.badge}>
                        <div className={styles.badgeDot}></div>
                        <span>Aktuelle Insights</span>
                        <TrendingUp size={16} />
                    </div>

                    <h2 className={styles.title}>
                        News & <span className={styles.titleAccent}>Innovation</span>
                    </h2>

                    <div className={styles.titleUnderline}></div>

                    <p className={styles.subtitle}>
                        Entdecken Sie die neuesten Entwicklungen und Innovationen im Industrieanlagenbau –
                        von KI-Revolution bis hin zu nachhaltigen Produktionstechnologien.
                    </p>
                </div>

                {/* News Grid */}
                <div className={styles.newsGrid}>
                    {newsArticles.map((article, index) => (
                        <article
                            key={article.id}
                            className={`${styles.newsCard} ${getCardLayoutClass(article.layout)} ${isVisible ? styles.newsCardVisible : ''} ${styles[`delay-${Math.min(index + 1, 6)}`]}`}
                            onClick={() => handleArticleClick(article)}
                        >
                            <div className={styles.cardWrapper}>
                                <div className={styles.cardImageWrapper}>
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className={styles.cardImage}
                                        loading="lazy"
                                    />
                                    <div className={styles.imageOverlay}></div>
                                    <div className={styles.cardBadges}>
                                        <span
                                            className={styles.categoryBadge}
                                            style={{ background: getCategoryGradient(article.category) }}
                                        >
                                            {article.category}
                                        </span>
                                        {article.featured && (
                                            <span className={styles.featuredBadge}>
                                                <Star size={12} />
                                                Featured
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className={styles.cardContent}>
                                    <div className={styles.cardContentHeader}>
                                        {article.layout !== 'hero' && (
                                            <span
                                                className={styles.cardCategoryBadge}
                                                style={{ background: getCategoryGradient(article.category) }}
                                            >
                                                {article.category}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className={styles.cardTitle}>
                                        {article.title}
                                    </h3>
                                    <p className={styles.cardExcerpt}>
                                        {article.excerpt}
                                    </p>

                                    <div className={styles.cardFooter}>
                                        <div className={styles.cardMeta}>
                                            <div className={styles.metaItem}>
                                                <User size={14} />
                                                <span>{article.author}</span>
                                            </div>
                                            <div className={styles.metaItem}>
                                                <Calendar size={14} />
                                                <span>{article.date}</span>
                                            </div>
                                        </div>
                                        <div className={styles.cardAction}>
                                            <ArrowRight size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedArticle && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={closeModal}>
                            ×
                        </button>

                        <div className={styles.modalHeader}>
                            <img
                                src={selectedArticle.image}
                                alt={selectedArticle.title}
                                className={styles.modalHeaderImage}
                            />
                            <div className={styles.modalHeaderOverlay}></div>
                            <div className={styles.modalHeaderContent}>
                                <span
                                    className={styles.modalCategoryBadge}
                                    style={{ background: getCategoryGradient(selectedArticle.category) }}
                                >
                                    {selectedArticle.category}
                                </span>
                                <h2 className={styles.modalTitle}>
                                    {selectedArticle.title}
                                </h2>
                                <div className={styles.modalMeta}>
                                    <div className={styles.metaItem}>
                                        <User size={16} />
                                        <span>{selectedArticle.author}</span>
                                    </div>
                                    <div className={styles.metaItem}>
                                        <Calendar size={16} />
                                        <span>{selectedArticle.date}</span>
                                    </div>
                                    {selectedArticle.readTime && (
                                        <div className={styles.metaItem}>
                                            <Clock size={16} />
                                            <span>{selectedArticle.readTime}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className={styles.modalBody}>
                            <div className={styles.modalExcerpt}>
                                {selectedArticle.excerpt}
                            </div>
                            <div className={styles.modalText}>
                                {selectedArticle.content.split('\n\n').map((paragraph, index) => (
                                    <p key={index}>
                                        {paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**') ? (
                                            <strong>{paragraph.replace(/\*\*/g, '')}</strong>
                                        ) : (
                                            paragraph
                                        )}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default NewsSection;
import { useEffect, useRef, useState, useCallback } from 'react';
import { MapPin, Clock, Users, ArrowRight, Calendar, Award, Target, Heart, Send, Upload, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import styles from '../css/Karriere.module.css';
import { Job, jobOpenings, getDepartmentColor } from '../mock/jobData.ts';

// Interface für Formular
interface ApplicationForm {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    position: string;
    message: string;
    cv: File | null;
}

const Karriere = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [formData, setFormData] = useState<ApplicationForm>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        message: '',
        cv: null
    });
    const [showForm, setShowForm] = useState<boolean>(false);
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

    // Refs
    const heroRef = useRef<HTMLElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    // Helper function for section refs
    const setSectionRef = (key: string) => (el: HTMLElement | null) => {
        sectionRefs.current[key] = el;
    };

    // Intersection Observer für Scroll-Animationen
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute('data-section');
                    if (sectionId === 'hero') {
                        setIsVisible(true);
                    } else if (sectionId) {
                        setVisibleSections(prev => new Set(prev).add(sectionId));
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe hero
        if (heroRef.current) {
            heroRef.current.setAttribute('data-section', 'hero');
            observer.observe(heroRef.current);
        }

        // Observe other sections
        Object.entries(sectionRefs.current).forEach(([key, ref]) => {
            if (ref) {
                ref.setAttribute('data-section', key);
                observer.observe(ref);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    // Carousel scroll functions
    const scrollCarousel = useCallback((direction: 'left' | 'right') => {
        if (carouselRef.current) {
            const scrollAmount = 350; // Width of one card + gap
            const currentScroll = carouselRef.current.scrollLeft;
            const targetScroll = direction === 'left'
                ? currentScroll - scrollAmount
                : currentScroll + scrollAmount;

            carouselRef.current.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    }, []);

    // Check if carousel can scroll
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScrollability = useCallback(() => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    }, []);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            carousel.addEventListener('scroll', checkScrollability);
            checkScrollability();

            // Check on resize
            window.addEventListener('resize', checkScrollability);

            return () => {
                carousel.removeEventListener('scroll', checkScrollability);
                window.removeEventListener('resize', checkScrollability);
            };
        }
    }, [checkScrollability]);

    // Touch handling for mobile
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            scrollCarousel('right');
        }
        if (isRightSwipe) {
            scrollCarousel('left');
        }
    };

    // Split jobs into featured and carousel
    const featuredJobs = jobOpenings.slice(0, 3);
    const carouselJobs = jobOpenings.slice(3);

    const handleJobClick = (job: Job) => {
        setSelectedJob(job);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedJob(null);
        document.body.style.overflow = 'unset';
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData(prev => ({
                ...prev,
                cv: e.target.files![0]
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Hier würde die Formularverarbeitung stattfinden
        console.log('Form submitted:', formData);
        alert('Vielen Dank für Ihre Bewerbung! Wir melden uns bald bei Ihnen.');
        setShowForm(false);
        document.body.style.overflow = 'unset';
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            position: '',
            message: '',
            cv: null
        });
    };

    const openApplicationForm = (position?: string) => {
        setSelectedJob(null);
        setShowForm(true);
        document.body.style.overflow = 'hidden';
        if (position) {
            setFormData(prev => ({
                ...prev,
                position
            }));
        }
    };

    return (
        <div className={styles.karrierePage}>
            {/* Hero Section */}
            <section ref={heroRef} className={`${styles.heroSection} ${isVisible ? styles.heroVisible : ''}`}>
                <div className={styles.heroBackground}></div>
                <div className={styles.heroContent}>
                    <div className={styles.heroBadge}>
                        <Sparkles size={16} />
                        <span>Wir stellen ein</span>
                    </div>
                    <h1 className={styles.heroTitle}>
                        Gestalten Sie die Zukunft des <span className={styles.heroAccent}>Anlagenbaus</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Werden Sie Teil eines innovativen Teams von über 100 Experten und arbeiten Sie an
                        wegweisenden Projekten in der Pharma-, Chemie- und Lebensmittelindustrie.
                    </p>
                    <div className={styles.heroStats}>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>100+</div>
                            <div className={styles.statLabel}>Mitarbeiter</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>30+</div>
                            <div className={styles.statLabel}>Jahre Erfahrung</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>500+</div>
                            <div className={styles.statLabel}>Projekte</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>{jobOpenings.length}</div>
                            <div className={styles.statLabel}>Offene Stellen</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section
                ref={setSectionRef('values')}
                className={`${styles.valuesSection} ${styles.scrollAnimation} ${visibleSections.has('values') ? styles.scrollAnimationVisible : ''}`}
            >
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Unsere Werte & Kultur</h2>
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <Award size={32} />
                            </div>
                            <h3 className={styles.valueTitle}>Exzellenz</h3>
                            <p className={styles.valueText}>
                                Wir streben nach höchster Qualität in allen unseren Projekten und fördern kontinuierliche Verbesserung.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <Target size={32} />
                            </div>
                            <h3 className={styles.valueTitle}>Innovation</h3>
                            <p className={styles.valueText}>
                                Modernste Technologien und kreative Lösungen prägen unseren Arbeitsalltag.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <Users size={32} />
                            </div>
                            <h3 className={styles.valueTitle}>Teamgeist</h3>
                            <p className={styles.valueText}>
                                Gemeinsam erreichen wir mehr - Zusammenarbeit ist der Schlüssel zu unserem Erfolg.
                            </p>
                        </div>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>
                                <Heart size={32} />
                            </div>
                            <h3 className={styles.valueTitle}>Work-Life-Balance</h3>
                            <p className={styles.valueText}>
                                Flexible Arbeitszeiten und moderne Arbeitsmodelle für Ihre persönliche Lebensqualität.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Jobs Section - Neue Struktur */}
            <section
                ref={setSectionRef('jobs')}
                className={`${styles.jobsSection} ${styles.scrollAnimation} ${visibleSections.has('jobs') ? styles.scrollAnimationVisible : ''}`}
            >
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Offene Stellen</h2>
                        <p className={styles.sectionSubtitle}>
                            Finden Sie Ihre perfekte Position in unserem wachsenden Unternehmen
                        </p>
                    </div>

                    {/* Featured Jobs - First 3 */}
                    <div className={styles.featuredJobsGrid}>
                        {featuredJobs.map((job, index) => (
                            <div
                                key={job.id}
                                className={styles.jobCard}
                                style={{ animationDelay: `${index * 0.1}s` }}
                                onClick={() => handleJobClick(job)}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={styles.badgesContainer}>
                                        <span
                                            className={styles.departmentBadge}
                                            style={{ backgroundColor: getDepartmentColor(job.department) }}
                                        >
                                            {job.department}
                                        </span>
                                    </div>

                                    <h3 className={styles.jobTitle}>
                                        {job.title}
                                    </h3>

                                    <div className={styles.jobMeta}>
                                        <div className={styles.metaItem}>
                                            <MapPin size={14} />
                                            <span>{job.location}</span>
                                        </div>
                                        <div className={styles.metaItem}>
                                            <Clock size={14} />
                                            <span>{job.type}</span>
                                        </div>
                                        <div className={styles.metaItem}>
                                            <Users size={14} />
                                            <span>Team: {job.teamSize}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.cardBody}>
                                    <p className={styles.jobDescription}>
                                        {job.description}
                                    </p>
                                </div>

                                <div className={styles.cardFooter}>
                                    <div className={styles.footerInfo}>
                                        <div className={styles.footerItem}>
                                            <span className={styles.footerLabel}>Erfahrung</span>
                                            <span className={styles.footerValue}>{job.experience}</span>
                                        </div>
                                        <div className={styles.footerItem}>
                                            <span className={styles.footerLabel}>Veröffentlicht</span>
                                            <span className={styles.footerValue}>{job.posted}</span>
                                        </div>
                                    </div>
                                    <div className={styles.cardAction}>
                                        <ArrowRight size={16} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Carousel for additional jobs */}
                    {carouselJobs.length > 0 && (
                        <div className={styles.jobCarouselContainer}>
                            <div className={styles.carouselHeader}>
                                <h3 className={styles.carouselTitle}>Weitere Positionen</h3>
                                <div className={styles.carouselControls}>
                                    <button
                                        className={styles.carouselButton}
                                        onClick={() => scrollCarousel('left')}
                                        disabled={!canScrollLeft}
                                        aria-label="Vorherige Jobs"
                                    >
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button
                                        className={styles.carouselButton}
                                        onClick={() => scrollCarousel('right')}
                                        disabled={!canScrollRight}
                                        aria-label="Nächste Jobs"
                                    >
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                            </div>

                            <div
                                className={styles.jobCarousel}
                                ref={carouselRef}
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                            >
                                <div className={styles.carouselTrack}>
                                    {carouselJobs.map((job, index) => (
                                        <div
                                            key={job.id}
                                            className={styles.jobCard}
                                            style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                                            onClick={() => handleJobClick(job)}
                                        >
                                            <div className={styles.cardHeader}>
                                                <div className={styles.badgesContainer}>
                                                    <span
                                                        className={styles.departmentBadge}
                                                        style={{ backgroundColor: getDepartmentColor(job.department) }}
                                                    >
                                                        {job.department}
                                                    </span>
                                                </div>

                                                <h3 className={styles.jobTitle}>
                                                    {job.title}
                                                </h3>

                                                <div className={styles.jobMeta}>
                                                    <div className={styles.metaItem}>
                                                        <MapPin size={14} />
                                                        <span>{job.location}</span>
                                                    </div>
                                                    <div className={styles.metaItem}>
                                                        <Clock size={14} />
                                                        <span>{job.type}</span>
                                                    </div>
                                                    <div className={styles.metaItem}>
                                                        <Users size={14} />
                                                        <span>Team: {job.teamSize}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={styles.cardBody}>
                                                <p className={styles.jobDescription}>
                                                    {job.description}
                                                </p>
                                            </div>

                                            <div className={styles.cardFooter}>
                                                <div className={styles.footerInfo}>
                                                    <div className={styles.footerItem}>
                                                        <span className={styles.footerLabel}>Erfahrung</span>
                                                        <span className={styles.footerValue}>{job.experience}</span>
                                                    </div>
                                                    <div className={styles.footerItem}>
                                                        <span className={styles.footerLabel}>Veröffentlicht</span>
                                                        <span className={styles.footerValue}>{job.posted}</span>
                                                    </div>
                                                </div>
                                                <div className={styles.cardAction}>
                                                    <ArrowRight size={16} />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.scrollIndicator}>
                                ← Wischen Sie für weitere Stellen →
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Benefits Section */}
            <section
                ref={setSectionRef('benefits')}
                className={`${styles.benefitsSection} ${styles.scrollAnimation} ${visibleSections.has('benefits') ? styles.scrollAnimationVisible : ''}`}
            >
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Was wir bieten</h2>
                    <div className={styles.benefitsGrid}>
                        <div className={styles.benefitItem}>
                            <h4>Attraktive Vergütung</h4>
                            <p>Leistungsgerechte Bezahlung über Kollektivvertrag</p>
                        </div>
                        <div className={styles.benefitItem}>
                            <h4>Flexible Arbeitszeiten</h4>
                            <p>Gleitzeit und Home-Office Möglichkeiten</p>
                        </div>
                        <div className={styles.benefitItem}>
                            <h4>Weiterbildung</h4>
                            <p>Individuelle Entwicklungsprogramme und Schulungen</p>
                        </div>
                        <div className={styles.benefitItem}>
                            <h4>Gesundheitsvorsorge</h4>
                            <p>Betriebsarzt und Gesundheitsprogramme</p>
                        </div>
                        <div className={styles.benefitItem}>
                            <h4>Internationale Projekte</h4>
                            <p>Spannende Projekte weltweit</p>
                        </div>
                        <div className={styles.benefitItem}>
                            <h4>Modernes Arbeitsumfeld</h4>
                            <p>State-of-the-art Büros und Technologie</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Process Section */}
            <section
                ref={setSectionRef('process')}
                className={`${styles.processSection} ${styles.scrollAnimation} ${visibleSections.has('process') ? styles.scrollAnimationVisible : ''}`}
            >
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Unser Bewerbungsprozess</h2>
                    <div className={styles.processSteps}>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>1</div>
                            <h4>Bewerbung</h4>
                            <p>Senden Sie uns Ihre aussagekräftigen Unterlagen</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>2</div>
                            <h4>Erstgespräch</h4>
                            <p>Persönliches oder virtuelles Kennenlernen</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>3</div>
                            <h4>Fachgespräch</h4>
                            <p>Detailliertes Gespräch mit dem Fachbereich</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>4</div>
                            <h4>Angebot</h4>
                            <p>Individuelles Vertragsangebot</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>5</div>
                            <h4>Onboarding</h4>
                            <p>Strukturierte Einarbeitung im Team</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                ref={setSectionRef('cta')}
                className={`${styles.ctaSection} ${styles.scrollAnimation} ${visibleSections.has('cta') ? styles.scrollAnimationVisible : ''}`}
            >
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h3 className={styles.ctaTitle}>
                            Keine passende Stelle gefunden?
                        </h3>
                        <p className={styles.ctaText}>
                            Wir sind immer auf der Suche nach talentierten Menschen.
                            Senden Sie uns Ihre Initiativbewerbung!
                        </p>
                        <button
                            className={styles.ctaButton}
                            onClick={() => openApplicationForm('Initiativbewerbung')}
                        >
                            <span>Initiativbewerbung senden</span>
                            <div className={styles.ctaIcon}>
                                <ArrowRight size={14} />
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            {/* Job Details Modal */}
            {selectedJob && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={closeModal}>
                            ×
                        </button>

                        <div className={styles.modalHeader}>
                            <div className={styles.modalBadges}>
                                <span
                                    className={styles.modalDepartmentBadge}
                                    style={{ backgroundColor: getDepartmentColor(selectedJob.department) }}
                                >
                                    {selectedJob.department}
                                </span>
                            </div>

                            <h2 className={styles.modalTitle}>
                                {selectedJob.title}
                            </h2>

                            <div className={styles.modalMetaGrid}>
                                <div className={styles.modalMetaItem}>
                                    <MapPin size={16} />
                                    <span>{selectedJob.location}</span>
                                </div>
                                <div className={styles.modalMetaItem}>
                                    <Clock size={16} />
                                    <span>{selectedJob.type}</span>
                                </div>
                                <div className={styles.modalMetaItem}>
                                    <Users size={16} />
                                    <span>Team: {selectedJob.teamSize}</span>
                                </div>
                                <div className={styles.modalMetaItem}>
                                    <Calendar size={16} />
                                    <span>{selectedJob.posted}</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.modalBody}>
                            <div className={styles.modalGrid}>
                                <div>
                                    <div className={styles.modalSection}>
                                        <h3 className={styles.modalSectionTitle}>Beschreibung</h3>
                                        <p className={styles.modalDescription}>
                                            {selectedJob.description}
                                        </p>
                                    </div>

                                    <div className={styles.modalSection}>
                                        <h3 className={styles.modalSectionTitle}>Ihre Aufgaben</h3>
                                        <ul className={styles.modalList}>
                                            {selectedJob.responsibilities.map((item, index) => (
                                                <li key={index} className={styles.modalListItem}>
                                                    <div className={`${styles.modalListDot} ${styles.modalListDotBlue}`}></div>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <div className={styles.modalSection}>
                                        <h3 className={styles.modalSectionTitle}>Ihr Profil</h3>
                                        <ul className={styles.modalList}>
                                            {selectedJob.requirements.map((item, index) => (
                                                <li key={index} className={styles.modalListItem}>
                                                    <div className={`${styles.modalListDot} ${styles.modalListDotBlue}`}></div>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className={styles.modalSection}>
                                        <h3 className={styles.modalSectionTitle}>Wir bieten</h3>
                                        <ul className={styles.modalList}>
                                            {selectedJob.benefits.map((item, index) => (
                                                <li key={index} className={styles.modalListItem}>
                                                    <div className={`${styles.modalListDot} ${styles.modalListDotGreen}`}></div>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.modalFooter}>
                                <button
                                    className={styles.modalApplyButton}
                                    onClick={() => openApplicationForm(selectedJob.title)}
                                >
                                    <span>Jetzt bewerben</span>
                                    <div className={styles.modalApplyIcon}>
                                        <ArrowRight size={14} />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Application Form Modal */}
            {showForm && (
                <div className={styles.formOverlay} onClick={() => {
                    setShowForm(false);
                    document.body.style.overflow = 'unset';
                }}>
                    <div className={styles.formContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={() => {
                            setShowForm(false);
                            document.body.style.overflow = 'unset';
                        }}>
                            ×
                        </button>

                        <h2 className={styles.formTitle}>Bewerbungsformular</h2>
                        <p className={styles.formSubtitle}>
                            Wir freuen uns auf Ihre Bewerbung! Bitte füllen Sie das folgende Formular aus.
                        </p>

                        <form onSubmit={handleSubmit} className={styles.applicationForm}>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="firstName">Vorname *</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="lastName">Nachname *</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email">E-Mail *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="phone">Telefon</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="position">Position</label>
                                <input
                                    type="text"
                                    id="position"
                                    name="position"
                                    value={formData.position}
                                    onChange={handleInputChange}
                                    placeholder="z.B. Initiativbewerbung oder gewünschte Position"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message">Nachricht</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={5}
                                    placeholder="Erzählen Sie uns mehr über sich..."
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="cv">Lebenslauf (PDF, max. 5MB)</label>
                                <div className={styles.fileInputWrapper}>
                                    <input
                                        type="file"
                                        id="cv"
                                        name="cv"
                                        onChange={handleFileChange}
                                        accept=".pdf"
                                        className={styles.fileInput}
                                    />
                                    <label htmlFor="cv" className={styles.fileLabel}>
                                        <Upload size={20} />
                                        <span>{formData.cv ? formData.cv.name : 'Datei auswählen'}</span>
                                    </label>
                                </div>
                            </div>

                            <div className={styles.formActions}>
                                <button type="button" className={styles.cancelButton} onClick={() => {
                                    setShowForm(false);
                                    document.body.style.overflow = 'unset';
                                }}>
                                    Abbrechen
                                </button>
                                <button type="submit" className={styles.submitButton}>
                                    <Send size={16} />
                                    <span>Bewerbung senden</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Karriere;

import { useEffect, useRef, useState } from 'react';
import planungImage from '../../assets/Fotolia Planung M.jpg';
import puzzleImage from '../../assets/Fotolia Puzzle S.jpg';

const ServicesSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.2,
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

    return (
        <section ref={sectionRef} style={styles.servicesSection}>
            <div style={styles.container}>
                {/* Intro Text */}
                <div style={{
                    ...styles.introSection,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                }}>
                    <div style={styles.introContent}>
                        <h2 style={styles.sectionTitle}>Wir sind Ihr Partner für technische Exzellenz</h2>
                        <p style={styles.introText}>
                            Mit über 20 Jahren Erfahrung in der Industrieplanung entwickeln wir
                            maßgeschneiderte Lösungen für komplexe technische Herausforderungen.
                            Von der ersten Idee bis zur erfolgreichen Umsetzung – wir begleiten
                            Sie durch alle Projektphasen mit bewährten Methoden und innovativen Ansätzen.
                        </p>
                    </div>
                </div>

                {/* Services Grid */}
                <div style={styles.servicesGrid}>
                    {/* Planung Service */}
                    <div
                        style={{
                            ...styles.serviceCard,
                            ...styles.planningCard,
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                            transitionDelay: '0.2s'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-6px)';
                            e.currentTarget.style.boxShadow = '0 8px 32px rgba(15, 31, 63, 0.18)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = isVisible ? 'translateY(0)' : 'translateY(30px)';
                            e.currentTarget.style.boxShadow = '0 2px 16px rgba(15, 31, 63, 0.08)';
                        }}
                    >
                        <div style={styles.serviceImageContainer}>
                            <img
                                src={planungImage}
                                alt="Planung und Engineering"
                                style={styles.serviceImage}
                            />
                            <div style={styles.imageOverlay}></div>
                            <div style={styles.serviceIcon}>
                                <div style={styles.planningIcon}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div style={styles.serviceContent}>
                            <h3 style={styles.serviceTitle}>Technische Planung & Engineering</h3>
                            <p style={styles.serviceDescription}>
                                Umfassende Planungsleistungen von der Konzeptentwicklung bis zur
                                Detail- und Ausführungsplanung für komplexe Industrieanlagen.
                            </p>
                            <div style={styles.serviceFeatures}>
                                <span style={styles.feature}>Anlagenkonzeption</span>
                                <span style={styles.feature}>3D-Modellierung</span>
                                <span style={styles.feature}>Verfahrenstechnik</span>
                                <span style={styles.feature}>Genehmigungsplanung</span>
                            </div>
                        </div>
                    </div>

                    {/* Projektmanagement Service */}
                    <div
                        style={{
                            ...styles.serviceCard,
                            ...styles.projectCard,
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                            transitionDelay: '0.4s'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-6px)';
                            e.currentTarget.style.boxShadow = '0 8px 32px rgba(230, 126, 34, 0.18)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = isVisible ? 'translateY(0)' : 'translateY(30px)';
                            e.currentTarget.style.boxShadow = '0 2px 16px rgba(230, 126, 34, 0.08)';
                        }}
                    >
                        <div style={styles.serviceImageContainer}>
                            <img
                                src={puzzleImage}
                                alt="Projektmanagement"
                                style={styles.serviceImage}
                            />
                            <div style={styles.imageOverlay}></div>
                            <div style={styles.serviceIcon}>
                                <div style={styles.projectIcon}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                                        <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
                                        <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
                                        <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                                        <path d="m9 16 2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div style={styles.serviceContent}>
                            <h3 style={styles.serviceTitle}>Projektmanagement & Koordination</h3>
                            <p style={styles.serviceDescription}>
                                Professionelles Projektmanagement nach internationalen Standards
                                für die erfolgreiche Umsetzung komplexer Industrieprojekte.
                            </p>
                            <div style={styles.serviceFeatures}>
                                <span style={styles.feature}>Projektsteuerung</span>
                                <span style={styles.feature}>Risikomanagement</span>
                                <span style={styles.feature}>Qualitätssicherung</span>
                                <span style={styles.feature}>Gewerkekoordination</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA - KOMPLETT NEU */}
                <div style={{
                    textAlign: 'center',
                    padding: '3rem 2rem',
                    background: '#0f1f3f',
                    borderRadius: '20px',
                    color: '#ffffff',
                    transition: 'all 0.8s ease',
                    boxShadow: '0 8px 32px rgba(15, 31, 63, 0.15)',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    transitionDelay: '0.6s'
                }}>
                    <h3 style={{
                        fontSize: '1.8rem',
                        fontWeight: '700',
                        marginBottom: '1rem',
                        lineHeight: 1.3,
                    }}>Bereit für Ihr nächstes Projekt?</h3>
                    <p style={{
                        fontSize: '1.1rem',
                        color: 'rgba(255, 255, 255, 0.9)',
                        lineHeight: 1.6,
                        fontWeight: '400',
                        maxWidth: '500px',
                        margin: '0 auto 1rem auto',
                    }}>
                        Lassen Sie uns gemeinsam die optimale Lösung für Ihre Anforderungen entwickeln.
                    </p>
                    <p style={{
                        fontSize: '1rem',
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontWeight: '300',
                        marginBottom: '2rem',
                    }}>
                        Entdecken Sie unser vollständiges Leistungsspektrum
                    </p>
                    <div
                        style={{
                            display: 'inline-block',
                            background: '#e67e22',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '50px',
                            padding: '0.875rem 2.25rem',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 16px rgba(230, 126, 34, 0.3)',
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = '#d35400';
                            e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = '#e67e22';
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        Zu unseren Leistungen
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    servicesSection: {
        background: '#ffffff',
        padding: '6rem 0',
        fontFamily: "'Inter', 'Segoe UI', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif",
    },

    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
    },

    introSection: {
        marginBottom: '4rem',
        transition: 'all 0.8s ease',
    },

    introContent: {
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'center',
    },

    sectionTitle: {
        fontSize: 'clamp(2rem, 4.5vw, 2.75rem)',
        fontWeight: '700',
        color: '#0f1f3f',
        marginBottom: '1.5rem',
        lineHeight: 1.3,
        letterSpacing: '-0.01em',
    },

    introText: {
        fontSize: 'clamp(1rem, 2.2vw, 1.125rem)',
        color: '#64748b',
        lineHeight: 1.7,
        fontWeight: '400',
        maxWidth: '800px',
        margin: '0 auto',
    },

    servicesGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        marginBottom: '4rem',
    },

    serviceCard: {
        background: '#ffffff',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 2px 16px rgba(15, 31, 63, 0.08)',
        border: '1px solid rgba(15, 31, 63, 0.06)',
        transition: 'all 0.4s ease',
        position: 'relative',
        cursor: 'pointer',
        height: 'auto',
    },

    planningCard: {
        borderTop: '3px solid #0f1f3f',
    },

    projectCard: {
        borderTop: '3px solid #e67e22',
    },

    serviceImageContainer: {
        width: '100%',
        height: '180px',
        position: 'relative',
        overflow: 'hidden',
    },

    serviceImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.4s ease',
    },

    imageOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(15, 31, 63, 0.2)',
    },

    serviceIcon: {
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        zIndex: 2,
    },

    planningIcon: {
        width: '48px',
        height: '48px',
        background: '#0f1f3f',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        boxShadow: '0 4px 16px rgba(15, 31, 63, 0.25)',
    },

    projectIcon: {
        width: '48px',
        height: '48px',
        background: '#e67e22',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        boxShadow: '0 4px 16px rgba(230, 126, 34, 0.25)',
    },

    serviceContent: {
        padding: '1.75rem',
    },

    serviceTitle: {
        fontSize: '1.3rem',
        fontWeight: '600',
        color: '#0f1f3f',
        marginBottom: '0.75rem',
        lineHeight: 1.4,
    },

    serviceDescription: {
        fontSize: '0.9rem',
        color: '#64748b',
        lineHeight: 1.6,
        marginBottom: '1.25rem',
        fontWeight: '400',
    },

    serviceFeatures: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
    },

    feature: {
        fontSize: '0.8rem',
        color: '#4b5563',
        fontWeight: '500',
        background: '#f8fafc',
        padding: '0.4rem 0.8rem',
        borderRadius: '20px',
        border: '1px solid #e2e8f0',
    },

    // Responsive Styles
    '@media (max-width: 768px)': {
        servicesSection: {
            padding: '4rem 0',
        },
        container: {
            padding: '0 1rem',
        },
        servicesGrid: {
            gridTemplateColumns: '1fr',
            gap: '1.5rem',
        },
        introSection: {
            marginBottom: '3rem',
        },
        serviceImageContainer: {
            height: '160px',
        },
        serviceContent: {
            padding: '1.5rem',
        },
    },

    '@media (max-width: 480px)': {
        servicesSection: {
            padding: '3rem 0',
        },
        serviceImageContainer: {
            height: '140px',
        },
        serviceContent: {
            padding: '1.25rem',
        },
        planningIcon: {
            width: '40px',
            height: '40px',
        },
        projectIcon: {
            width: '40px',
            height: '40px',
        },
    },
};

export default ServicesSection;
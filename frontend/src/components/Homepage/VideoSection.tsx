import { useEffect, useRef, useState } from 'react';

const VideoSection = () => {
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
                threshold: 0.1,
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
        <section ref={sectionRef} style={styles.videoSection}>
            {/* Full-screen video background */}
            <div style={styles.videoContainer}>
                <iframe
                    style={styles.video}
                    src="https://www.youtube.com/embed/JIN6KC3glto?autoplay=1&mute=1&loop=1&playlist=JIN6KC3glto&controls=0&showinfo=0&rel=0&modestbranding=1&vq=hd1080"
                    title="PROMAX Industrial Plant Engineering"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />

                {/* Dark gradient overlay */}
                <div style={styles.videoOverlay} />
            </div>

            {/* Company information overlay */}
            <div style={styles.contentOverlay}>
                <div style={{
                    ...styles.overlayContent,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
                }}>
                    {/* Professional Badge */}
                    <div style={styles.badge}>
                        <span>Industrieanlagenbau & Projektmanagement</span>
                    </div>

                    {/* Main Title */}
                    <h1 style={styles.title}>
                        <span style={styles.titleMain}>PROMAX</span>
                        <span style={styles.titleSub}>Engineering Excellence</span>
                    </h1>

                    {/* Description */}
                    <div style={styles.description}>
                        <p>
                            Professionelle Lösungen im Industrieanlagenbau mit jahrelanger
                            Erfahrung in den Branchen Chemie, Energie & Umwelt, Pharma und Papier & Zellstoff.
                        </p>
                    </div>

                    {/* Professional Stats */}
                    <div style={styles.statsContainer}>
                        <div style={styles.statItem}>
                            <div style={styles.statNumber}>15+</div>
                            <div style={styles.statLabel}>Jahre Erfahrung</div>
                        </div>
                        <div style={styles.statDivider} />
                        <div style={styles.statItem}>
                            <div style={styles.statNumber}>ISO</div>
                            <div style={styles.statLabel}>9001:2015 zertifiziert</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    videoSection: {
        position: 'relative',
        width: '100%',
        height: '90vh', // Reduziert von 100vh auf 75vh
        minHeight: '500px', // Reduziert von 600px auf 500px
        overflow: 'hidden',
        fontFamily: "'Inter', 'Segoe UI', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif",
    },

    videoContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: 1,
    },

    video: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '120vw',
        height: '67.5vw',
        minWidth: '100%',
        minHeight: '100%',
        transform: 'translate(-50%, -50%)',
        objectFit: 'cover',
        pointerEvents: 'none',
    },

    videoOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(30, 58, 95, 0.7) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(230, 126, 34, 0.3) 100%)',
        zIndex: 2,
    },

    contentOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '0 8rem',
        zIndex: 3,
    },

    overlayContent: {
        maxWidth: '600px',
        color: 'white',
        transition: 'all 0.8s ease',
    },

    badge: {
        display: 'inline-flex',
        alignItems: 'center',
        padding: '8px 16px',
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '6px',
        color: '#ffffff',
        fontSize: '0.75rem',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        marginBottom: '1.5rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    },

    title: {
        margin: '0 0 2rem 0',
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
    },

    titleMain: {
        display: 'block',
        fontSize: 'clamp(3rem, 8vw, 6rem)',
        fontWeight: '900',
        color: '#ffffff',
        marginBottom: '0.5rem',
        textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
    },

    titleSub: {
        display: 'block',
        fontSize: 'clamp(1.25rem, 3vw, 2rem)',
        fontWeight: '300',
        color: '#E67E22',
        textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
    },

    description: {
        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
        color: 'rgba(255, 255, 255, 0.9)',
        fontWeight: '400',
        lineHeight: 1.6,
        marginBottom: '3rem',
        textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
        maxWidth: '500px',
    },

    statsContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        padding: '2rem 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        marginTop: '2rem',
    },

    statItem: {
        textAlign: 'center',
    },

    statNumber: {
        fontSize: '2.5rem',
        fontWeight: '800',
        color: '#E67E22',
        lineHeight: 1,
        marginBottom: '0.5rem',
        textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
    },

    statLabel: {
        fontSize: '0.875rem',
        color: 'rgba(255, 255, 255, 0.8)',
        fontWeight: '500',
        textShadow: '0 1px 5px rgba(0, 0, 0, 0.5)',
    },

    statDivider: {
        width: '1px',
        height: '60px',
        background: 'rgba(255, 255, 255, 0.2)',
    },

    // Responsive styles would be handled by media queries in real CSS
    '@media (max-width: 1024px)': {
        contentOverlay: {
            padding: '0 4rem',
        },
        statsContainer: {
            gap: '1.5rem',
        },
    },

    '@media (max-width: 768px)': {
        videoSection: {
            minHeight: '400px', // Reduziert von 500px auf 400px für mobile
            height: '65vh', // Reduziert für mobile Geräte
        },
        contentOverlay: {
            padding: '0 1.5rem',
            justifyContent: 'center',
            textAlign: 'center',
        },
        overlayContent: {
            maxWidth: '100%',
        },
        statsContainer: {
            flexDirection: 'column',
            gap: '1rem',
        },
        statDivider: {
            width: '60px',
            height: '1px',
        },
    },

    '@media (max-width: 480px)': {
        videoSection: {
            height: '60vh', // Noch weniger Höhe für sehr kleine Bildschirme
            minHeight: '350px',
        },
        contentOverlay: {
            padding: '0 1rem',
        },
        badge: {
            fontSize: '0.625rem',
            padding: '6px 12px',
        },
    },
};

export default VideoSection;
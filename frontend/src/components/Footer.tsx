import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Footer.module.css';
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    ArrowUp
} from 'lucide-react';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const footerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        const handleScroll = () => {
            setShowScrollTop(window.pageYOffset > 300);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            if (footerRef.current) observer.unobserve(footerRef.current);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const footerLinks = {
        navigation: {
            title: 'Navigation',
            links: [
                { name: 'Startseite', path: '/' },
                { name: 'Das Unternehmen', path: '/unternehmen' },
                { name: 'Branchen', path: '/branchen' },
                { name: 'Leistungen', path: '/leistungen' },
                { name: 'Karriere', path: '/karriere' },
                { name: 'Kontakt', path: '/kontakt' }
            ]
        },
        legal: {
            title: 'Rechtliches',
            links: [
                { name: 'Impressum', path: '/Rechtliches#impressum' },
                { name: 'Datenschutz', path: '/Rechtliches#datenschutz' },
                { name: 'AGB', path: '/Rechtliches#agb' }
            ]
        }
    };

    const contactInfo = [
        { icon: MapPin, text: 'Parkring 18/F, 8074 Raaba-Grambach' },
        { icon: Phone, text: '+43 (0) 316 / 241 393' },
        { icon: Mail, text: 'office@promax.at' },
        { icon: Clock, text: 'Mo-Fr: 8:00-18:00 Uhr' }
    ];

    const socialLinks = [
        { icon: Facebook, url: '#', name: 'Facebook' },
        { icon: Twitter, url: '#', name: 'Twitter' },
        { icon: Linkedin, url: '#', name: 'LinkedIn' },
        { icon: Instagram, url: '#', name: 'Instagram' }
    ];

    return (
        <>
            <footer
                ref={footerRef}
                className={`${styles.footer} ${isVisible ? styles.footerVisible : ''}`}
            >
                {/* Orange Gradient Line */}
                <div className={styles.footerGradientLine}></div>

                {/* Main Footer Content */}
                <div className={styles.footerContainer}>
                    {/* Company Info Section */}
                    <div className={`${styles.footerSection} ${styles.companySection} ${isVisible ? styles.animateUp : ''}`}>
                        <div className={styles.companyLogo}>
                            <h3 className={styles.logoText}>PROMAX</h3>
                            <p className={styles.companyTagline}>Project Management GesmbH</p>
                        </div>
                        <p className={styles.companyDescription}>
                            Seit über 15 Jahren unterstützen wir Unternehmen dabei, ihre Projekte
                            erfolgreich zu planen und umzusetzen. Vertrauen Sie auf
                            unsere Expertise im Projektmanagement und Industrieanlagenbau.
                        </p>

                        {/* Contact Info */}
                        <div className={styles.contactInfo}>
                            <h4 className={styles.contactTitle}>Kontaktieren Sie uns</h4>
                            {contactInfo.map((item, index) => (
                                <div
                                    key={index}
                                    className={`${styles.contactItem} ${isVisible ? styles.animateFadeIn : ''}`}
                                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                                >
                                    <item.icon size={16} />
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div
                        className={`${styles.footerSection} ${styles.linksSection} ${isVisible ? styles.animateUp : ''}`}
                        style={{ animationDelay: '0.3s' }}
                    >
                        <h4 className={styles.sectionTitle}>{footerLinks.navigation.title}</h4>
                        <ul className={styles.linksList}>
                            {footerLinks.navigation.links.map((link, linkIndex) => (
                                <li
                                    key={linkIndex}
                                    className={`${styles.linkItem} ${isVisible ? styles.animateFadeIn : ''}`}
                                    style={{ animationDelay: `${0.5 + linkIndex * 0.05}s` }}
                                >
                                    <Link to={link.path} className={styles.footerLink}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div
                        className={`${styles.footerSection} ${styles.linksSection} ${isVisible ? styles.animateUp : ''}`}
                        style={{ animationDelay: '0.4s' }}
                    >
                        <h4 className={styles.sectionTitle}>{footerLinks.legal.title}</h4>
                        <ul className={styles.linksList}>
                            {footerLinks.legal.links.map((link, linkIndex) => (
                                <li
                                    key={linkIndex}
                                    className={`${styles.linkItem} ${isVisible ? styles.animateFadeIn : ''}`}
                                    style={{ animationDelay: `${0.6 + linkIndex * 0.05}s` }}
                                >
                                    <Link to={link.path} className={styles.footerLink}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Social Media & Bottom Bar */}
                <div className={`${styles.footerBottom} ${isVisible ? styles.animateUp : ''}`} style={{ animationDelay: '0.8s' }}>
                    <div className={styles.footerBottomContainer}>
                        <div className={styles.socialSection}>
                            <span className={styles.socialTitle}>Folgen Sie uns:</span>
                            <div className={styles.socialLinks}>
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        className={`${styles.socialLink} ${isVisible ? styles.animateBounce : ''}`}
                                        style={{ animationDelay: `${1.0 + index * 0.1}s` }}
                                        aria-label={social.name}
                                    >
                                        <social.icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className={styles.copyright}>
                            <p>&copy; 2025 PROMAX Project Management GesmbH. Alle Rechte vorbehalten.</p>
                        </div>

                        <div className={styles.qualityBadges}>
                        </div>
                    </div>
                </div>

                {/* Scroll to Top Button */}
                {showScrollTop && (
                    <button
                        className={`${styles.scrollTopBtn} ${styles.animateBounceIn}`}
                        onClick={scrollToTop}
                        aria-label="Nach oben scrollen"
                    >
                        <ArrowUp size={20} />
                    </button>
                )}
            </footer>
        </>
    );
};

export default Footer;
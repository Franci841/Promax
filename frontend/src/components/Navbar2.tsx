import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/thumbnail_image002.png';

const Navbar2 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavClick = (item) => {
        setActiveItem(item);
        setIsOpen(false);
    };

    return (
        <>
            {/* CSS Animations */}
            <style jsx>{`
                @keyframes slideIn {
                    0% {
                        transform: translateX(-50%) scaleX(0);
                        opacity: 0;
                    }
                    100% {
                        transform: translateX(-50%) scaleX(1);
                        opacity: 1;
                    }
                }

                @keyframes fadeInUp {
                    0% {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .nav-link {
                    position: relative;
                    overflow: hidden;
                }

                .nav-link::before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(90deg, #E67E22, #d35400);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    transform: translateX(-50%);
                }

                .nav-link:hover::before {
                    width: 100%;
                }

                .nav-link.active::before {
                    width: 100%;
                    animation: slideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .mobile-menu-enter {
                    animation: fadeInUp 0.3s ease-out;
                }
            `}</style>

            <nav style={styles.navbar}>
                <div style={styles.container}>
                    {/* Logo Section */}
                    <div style={styles.logoSection}>
                        <div style={styles.logo}>
                            <img
                                src={logo}
                                alt="PROMAX Logo"
                                style={styles.logoImage}
                            />
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div style={styles.desktopMenu}>
                        <div style={styles.navItem}>
                            <a
                                href="#unternehmen"
                                className={`nav-link ${activeItem === 'unternehmen' ? 'active' : ''}`}
                                style={{
                                    ...styles.navLink,
                                    ...(activeItem === 'unternehmen' ? styles.activeLink : {})
                                }}
                                onClick={() => handleNavClick('unternehmen')}
                                onMouseEnter={(e) => {
                                    if (activeItem !== 'unternehmen') {
                                        e.target.style.transform = 'translateY(-1px)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (activeItem !== 'unternehmen') {
                                        e.target.style.transform = 'translateY(0)';
                                    }
                                }}
                            >
                                Das Unternehmen
                            </a>
                        </div>

                        <div style={styles.navItem}>
                            <a
                                href="#leistungen"
                                className={`nav-link ${activeItem === 'leistungen' ? 'active' : ''}`}
                                style={{
                                    ...styles.navLink,
                                    ...(activeItem === 'leistungen' ? styles.activeLink : {})
                                }}
                                onClick={() => handleNavClick('leistungen')}
                                onMouseEnter={(e) => {
                                    if (activeItem !== 'leistungen') {
                                        e.target.style.transform = 'translateY(-1px)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (activeItem !== 'leistungen') {
                                        e.target.style.transform = 'translateY(0)';
                                    }
                                }}
                            >
                                Leistungen
                            </a>
                        </div>

                        <div style={styles.navItem}>
                            <a
                                href="#referenzen"
                                className={`nav-link ${activeItem === 'referenzen' ? 'active' : ''}`}
                                style={{
                                    ...styles.navLink,
                                    ...(activeItem === 'referenzen' ? styles.activeLink : {})
                                }}
                                onClick={() => handleNavClick('referenzen')}
                                onMouseEnter={(e) => {
                                    if (activeItem !== 'referenzen') {
                                        e.target.style.transform = 'translateY(-1px)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (activeItem !== 'referenzen') {
                                        e.target.style.transform = 'translateY(0)';
                                    }
                                }}
                            >
                                Referenzen
                            </a>
                        </div>

                        <div style={styles.navItem}>
                            <a
                                href="#karriere"
                                className={`nav-link ${activeItem === 'karriere' ? 'active' : ''}`}
                                style={{
                                    ...styles.navLink,
                                    ...(activeItem === 'karriere' ? styles.activeLink : {})
                                }}
                                onClick={() => handleNavClick('karriere')}
                                onMouseEnter={(e) => {
                                    if (activeItem !== 'karriere') {
                                        e.target.style.transform = 'translateY(-1px)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (activeItem !== 'karriere') {
                                        e.target.style.transform = 'translateY(0)';
                                    }
                                }}
                            >
                                Karriere
                            </a>
                        </div>

                        <div style={styles.navItem}>
                            <a
                                href="#kontakt"
                                className={`nav-link ${activeItem === 'kontakt' ? 'active' : ''}`}
                                style={{
                                    ...styles.navLink,
                                    ...(activeItem === 'kontakt' ? styles.activeLink : {})
                                }}
                                onClick={() => handleNavClick('kontakt')}
                                onMouseEnter={(e) => {
                                    if (activeItem !== 'kontakt') {
                                        e.target.style.transform = 'translateY(-1px)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (activeItem !== 'kontakt') {
                                        e.target.style.transform = 'translateY(0)';
                                    }
                                }}
                            >
                                Kontakt
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        style={styles.mobileMenuButton}
                        onClick={toggleMenu}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = 'rgba(30, 58, 95, 0.1)';
                            e.target.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.transform = 'scale(1)';
                        }}
                    >
                        {isOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mobile-menu-enter" style={styles.mobileMenu}>
                        <a
                            href="#unternehmen"
                            style={{
                                ...styles.mobileNavLink,
                                ...(activeItem === 'unternehmen' ? styles.activeMobileLink : {})
                            }}
                            onClick={() => handleNavClick('unternehmen')}
                            onMouseEnter={(e) => {
                                e.target.style.color = '#E67E22';
                                e.target.style.paddingLeft = '20px';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = '#1E3A5F';
                                e.target.style.paddingLeft = '0';
                            }}
                        >
                            Das Unternehmen
                        </a>
                        <a
                            href="#leistungen"
                            style={{
                                ...styles.mobileNavLink,
                                ...(activeItem === 'leistungen' ? styles.activeMobileLink : {})
                            }}
                            onClick={() => handleNavClick('leistungen')}
                            onMouseEnter={(e) => {
                                e.target.style.color = '#E67E22';
                                e.target.style.paddingLeft = '20px';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = '#1E3A5F';
                                e.target.style.paddingLeft = '0';
                            }}
                        >
                            Leistungen
                        </a>
                        <a
                            href="#referenzen"
                            style={{
                                ...styles.mobileNavLink,
                                ...(activeItem === 'referenzen' ? styles.activeMobileLink : {})
                            }}
                            onClick={() => handleNavClick('referenzen')}
                            onMouseEnter={(e) => {
                                e.target.style.color = '#E67E22';
                                e.target.style.paddingLeft = '20px';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = '#1E3A5F';
                                e.target.style.paddingLeft = '0';
                            }}
                        >
                            Referenzen
                        </a>
                        <a
                            href="#karriere"
                            style={{
                                ...styles.mobileNavLink,
                                ...(activeItem === 'karriere' ? styles.activeMobileLink : {})
                            }}
                            onClick={() => handleNavClick('karriere')}
                            onMouseEnter={(e) => {
                                e.target.style.color = '#E67E22';
                                e.target.style.paddingLeft = '20px';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = '#1E3A5F';
                                e.target.style.paddingLeft = '0';
                            }}
                        >
                            Karriere
                        </a>
                        <a
                            href="#kontakt"
                            style={{
                                ...styles.mobileNavLink,
                                ...(activeItem === 'kontakt' ? styles.activeMobileLink : {})
                            }}
                            onClick={() => handleNavClick('kontakt')}
                            onMouseEnter={(e) => {
                                e.target.style.color = '#E67E22';
                                e.target.style.paddingLeft = '20px';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.color = '#1E3A5F';
                                e.target.style.paddingLeft = '0';
                            }}
                        >
                            Kontakt
                        </a>
                    </div>
                )}
            </nav>
        </>
    );
};

const styles = {
    navbar: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: '#C5C9D4',
        borderBottom: '1px solid rgba(139, 155, 180, 0.2)',
        zIndex: 1000,
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        fontFamily: "'Inter', 'Segoe UI', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif",
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    },

    container: {
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
    },

    logoSection: {
        display: 'flex',
        alignItems: 'center',
        flex: '0 0 auto',
    },

    logo: {
        display: 'flex',
        alignItems: 'center',
    },

    logoImage: {
        height: '220px',
        width: 'auto',
        objectFit: 'contain',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
    },

    desktopMenu: {
        display: 'flex',
        alignItems: 'center',
        gap: '3rem',
        flex: '1 1 auto',
        justifyContent: 'flex-end',
        marginRight: '2rem',
    },

    navItem: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    navLink: {
        fontSize: '1.2rem',
        fontWeight: '500',
        color: '#1E3A5F',
        textDecoration: 'none',
        padding: '14px 18px',
        borderRadius: '8px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        position: 'relative',
    },

    activeLink: {
        fontWeight: '600',
    },

    mobileMenuButton: {
        display: 'none',
        background: 'none',
        border: 'none',
        color: '#1E3A5F',
        cursor: 'pointer',
        padding: '8px',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
    },

    mobileMenu: {
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        background: '#C5C9D4',
        borderTop: '1px solid rgba(139, 155, 180, 0.2)',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    },

    mobileNavLink: {
        fontSize: '1.5rem',
        fontWeight: '600',
        color: '#1E3A5F',
        textDecoration: 'none',
        padding: '16px 0',
        borderBottom: '1px solid rgba(139, 155, 180, 0.2)',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    },

    activeMobileLink: {
        color: '#E67E22',
        fontWeight: '700',
    },
};

export default Navbar2;
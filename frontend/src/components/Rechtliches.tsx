import React, { useEffect, useState } from 'react';
import { Building2, Phone, Mail, Globe, FileText, Scale, MapPin, Shield, Gavel } from 'lucide-react';

const LegalPage = () => {
    const [activeSection, setActiveSection] = useState('impressum');
    const [isScrolling, setIsScrolling] = useState(false);

    // Navigation Heights - matching the main navbar CSS
    const getMainNavHeight = () => {
        const width = window.innerWidth;
        if (width <= 360) return 55;
        if (width <= 480) return 60;
        if (width <= 768) return 65;
        if (width >= 1920) return 85;
        return 75; // default
    };

    const [mainNavHeight, setMainNavHeight] = useState(getMainNavHeight());
    const LEGAL_NAV_HEIGHT = 64;

    // Update nav height on resize
    useEffect(() => {
        const handleResize = () => {
            setMainNavHeight(getMainNavHeight());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Scroll to section based on URL hash
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                setTimeout(() => {
                    const elementPosition = element.offsetTop - mainNavHeight - LEGAL_NAV_HEIGHT - 20;
                    window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                    });
                }, 100);
            }
        }
    }, [mainNavHeight]);

    // Track active section on scroll
    useEffect(() => {
        let scrollTimeout;

        const handleScroll = () => {
            if (isScrolling) return;

            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                const sections = ['impressum', 'datenschutz', 'agb'];
                const scrollPosition = window.scrollY + mainNavHeight + LEGAL_NAV_HEIGHT + 50;

                for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                        const { offsetTop, offsetHeight } = element;
                        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                            setActiveSection(section);
                            break;
                        }
                    }
                }
            }, 50);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, [isScrolling, mainNavHeight]);

    const scrollToSection = (sectionId) => {
        setIsScrolling(true);
        setActiveSection(sectionId);

        const element = document.getElementById(sectionId);
        if (element) {
            const elementPosition = element.offsetTop - mainNavHeight - LEGAL_NAV_HEIGHT - 20;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });

            setTimeout(() => {
                setIsScrolling(false);
            }, 800);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Legal Navigation - Positioned below main nav with dynamic top */}
            <div
                className="bg-white shadow-sm border-b border-slate-200 sticky z-40"
                style={{
                    top: `${mainNavHeight}px`,
                    height: `${LEGAL_NAV_HEIGHT}px`
                }}
            >
                <div className="max-w-6xl mx-auto px-6 h-full">
                    <nav className="flex space-x-8 h-full">
                        <button
                            onClick={() => scrollToSection('impressum')}
                            className={`py-4 px-2 border-b-2 transition-all duration-300 flex items-center space-x-2 bg-transparent cursor-pointer ${
                                activeSection === 'impressum'
                                    ? 'border-orange-500 text-orange-600'
                                    : 'border-transparent text-slate-700 hover:border-orange-300 hover:text-slate-900'
                            }`}
                        >
                            <FileText className={`h-4 w-4 transition-transform duration-200 ${
                                activeSection === 'impressum' ? 'scale-110' : ''
                            }`} />
                            <span className="font-medium">Impressum</span>
                        </button>
                        <button
                            onClick={() => scrollToSection('datenschutz')}
                            className={`py-4 px-2 border-b-2 transition-all duration-300 flex items-center space-x-2 bg-transparent cursor-pointer ${
                                activeSection === 'datenschutz'
                                    ? 'border-orange-500 text-orange-600'
                                    : 'border-transparent text-slate-700 hover:border-orange-300 hover:text-slate-900'
                            }`}
                        >
                            <Shield className={`h-4 w-4 transition-transform duration-200 ${
                                activeSection === 'datenschutz' ? 'scale-110' : ''
                            }`} />
                            <span className="font-medium">Datenschutz</span>
                        </button>
                        <button
                            onClick={() => scrollToSection('agb')}
                            className={`py-4 px-2 border-b-2 transition-all duration-300 flex items-center space-x-2 bg-transparent cursor-pointer ${
                                activeSection === 'agb'
                                    ? 'border-orange-500 text-orange-600'
                                    : 'border-transparent text-slate-700 hover:border-orange-300 hover:text-slate-900'
                            }`}
                        >
                            <Gavel className={`h-4 w-4 transition-transform duration-200 ${
                                activeSection === 'agb' ? 'scale-110' : ''
                            }`} />
                            <span className="font-medium">AGB</span>
                        </button>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-12">

                {/* IMPRESSUM SECTION */}
                <section
                    id="impressum"
                    className="mb-20"
                    style={{ scrollMarginTop: `${mainNavHeight + LEGAL_NAV_HEIGHT + 20}px` }}
                >
                    <div className="mb-12">
                        <div className="flex items-center space-x-3 mb-4">
                            <FileText className="h-8 w-8 text-orange-500" />
                            <h2 className="text-4xl font-bold text-slate-800">Impressum</h2>
                        </div>
                        <p className="text-slate-600 text-lg">Rechtliche Informationen gemäß § 5 TMG</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Company Information */}
                        <div className="space-y-6">
                            <div className="border-l-4 border-orange-500 pl-4">
                                <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                                    <Building2 className="h-5 w-5 mr-2 text-slate-600" />
                                    Firmeninformationen
                                </h3>
                                <div className="space-y-3 text-slate-700">
                                    <p className="font-medium text-lg">PROMAX Project Management GesmbH</p>
                                    <div className="flex items-start space-x-2">
                                        <MapPin className="h-4 w-4 mt-1 text-slate-500 flex-shrink-0" />
                                        <p>Parkring 18/F<br />8074 Raaba-Grambach<br />Österreich</p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="border-l-4 border-slate-400 pl-4">
                                <h3 className="text-xl font-semibold text-slate-800 mb-4">Kontakt</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <Phone className="h-4 w-4 text-slate-500" />
                                        <span className="text-slate-700">+43 (0) 316 / 241 393</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Phone className="h-4 w-4 text-slate-500" />
                                        <span className="text-slate-700">+43 (0) 316 / 241 393 - 99 (Fax)</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Mail className="h-4 w-4 text-slate-500" />
                                        <a href="mailto:office@promax.at" className="text-orange-600 hover:text-orange-700 transition-colors">
                                            office@promax.at
                                        </a>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Globe className="h-4 w-4 text-slate-500" />
                                        <a href="https://www.promax.at" className="text-orange-600 hover:text-orange-700 transition-colors">
                                            www.promax.at
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Legal Information */}
                        <div className="space-y-6">
                            <div className="border-l-4 border-slate-600 pl-4">
                                <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                                    <Scale className="h-5 w-5 mr-2 text-slate-600" />
                                    Rechtliche Angaben
                                </h3>
                                <div className="space-y-4">
                                    <div className="bg-slate-50 rounded-lg p-4">
                                        <div className="grid gap-3">
                                            <div className="flex justify-between items-center">
                                                <span className="font-medium text-slate-600">Firmenbuchnummer:</span>
                                                <span className="text-slate-800">181286y</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="font-medium text-slate-600">UID-Nummer:</span>
                                                <span className="text-slate-800">ATU47536901</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="font-medium text-slate-600">DVR:</span>
                                                <span className="text-slate-800">1018329</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-sm text-slate-600 mb-1">Firmengericht:</p>
                                        <p className="text-slate-800">Landesgericht für ZRS Graz</p>
                                    </div>

                                    <div>
                                        <p className="text-sm text-slate-600 mb-1">Behörde gem. ECG:</p>
                                        <p className="text-slate-800">Bezirkshauptmannschaft Graz-Umgebung</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Legal Notices */}
                    <div className="mt-12 pt-8 border-t border-slate-200">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-semibold text-slate-800 mb-3">Haftungsausschluss</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
                                    externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-slate-800 mb-3">Urheberrecht</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    © 2024 PROMAX Project Management GesmbH. Alle Rechte vorbehalten.
                                    Die Inhalte und Werke auf dieser Website unterliegen dem österreichischen Urheberrecht.
                                </p>
                            </div>
                        </div>

                        {/* Bildnachweis */}
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold text-slate-800 mb-3">Bildnachweis</h3>
                            <div className="bg-slate-50 rounded-lg p-4">
                                <p className="text-slate-600 text-xs leading-relaxed">
                                    © Andrei Merkulov - Fotolia.com | © werbefoto-burger.ch - Fotolia.com | © Gina Sanders - Fotolia.com |
                                    © coramax - Fotolia.com | © Moreno Soppelsa - Fotolia.com | © pressmaster - Fotolia.com |
                                    © CandyBox Images - Fotolia.com | © erikdegraaf - Fotolia.com | © guukaa - Fotolia.com |
                                    © photollurg - Fotolia.com | © FotoGentile
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DATENSCHUTZ SECTION */}
                <section
                    id="datenschutz"
                    className="mb-20"
                    style={{ scrollMarginTop: `${mainNavHeight + LEGAL_NAV_HEIGHT + 20}px` }}
                >
                    <div className="mb-12">
                        <div className="flex items-center space-x-3 mb-4">
                            <Shield className="h-8 w-8 text-orange-500" />
                            <h2 className="text-4xl font-bold text-slate-800">Datenschutzerklärung</h2>
                        </div>
                        <p className="text-slate-600 text-lg">Informationen zur Verarbeitung Ihrer personenbezogenen Daten</p>
                    </div>

                    <div className="space-y-8">
                        <div className="border-l-4 border-orange-500 pl-4">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">Verantwortlicher</h3>
                            <p className="text-slate-700 mb-2">Verantwortlicher im Sinne der DSGVO:</p>
                            <div className="bg-slate-50 rounded-lg p-4">
                                <p className="font-medium">PROMAX Project Management GesmbH</p>
                                <p>Parkring 18/F, 8074 Raaba-Grambach</p>
                                <p>E-Mail: <a href="mailto:office@promax.at" className="text-orange-600 hover:text-orange-700">office@promax.at</a></p>
                                <p>Telefon: +43 (0) 316 / 241 393</p>
                            </div>
                        </div>

                        <div className="border-l-4 border-slate-400 pl-4">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">Datenverarbeitung auf dieser Website</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-2">Server-Log-Dateien</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Der Provider der Seiten erhebt und speichert automatisch Informationen in Server-Log-Dateien,
                                        die Ihr Browser automatisch übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes
                                        Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-2">Kontaktformular</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                                        Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
                                        der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-2">E-Mail-Verkehr</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Wenn Sie per E-Mail mit uns Kontakt aufnehmen, werden die in der E-Mail enthaltenen
                                        personenbezogenen Daten gespeichert. Eine Weitergabe an Dritte erfolgt nicht.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="border-l-4 border-slate-600 pl-4">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">Ihre Rechte</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-2">Auskunftsrecht</h4>
                                    <p className="text-slate-600 text-sm">Sie haben das Recht auf Auskunft über die von uns verarbeiteten personenbezogenen Daten.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-2">Berichtigung</h4>
                                    <p className="text-slate-600 text-sm">Sie haben das Recht auf Berichtigung unrichtiger Daten.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-2">Löschung</h4>
                                    <p className="text-slate-600 text-sm">Sie haben das Recht auf Löschung Ihrer personenbezogenen Daten.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-2">Widerspruch</h4>
                                    <p className="text-slate-600 text-sm">Sie haben das Recht, der Verarbeitung Ihrer Daten zu widersprechen.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* AGB SECTION */}
                <section
                    id="agb"
                    className="mb-20"
                    style={{ scrollMarginTop: `${mainNavHeight + LEGAL_NAV_HEIGHT + 20}px` }}
                >
                    <div className="mb-12">
                        <div className="flex items-center space-x-3 mb-4">
                            <Gavel className="h-8 w-8 text-orange-500" />
                            <h2 className="text-4xl font-bold text-slate-800">Allgemeine Geschäftsbedingungen</h2>
                        </div>
                        <p className="text-slate-600 text-lg">Geltungsbereich und Vertragsschluss</p>
                    </div>

                    <div className="space-y-8">
                        <div className="border-l-4 border-orange-500 pl-4">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">§ 1 Geltungsbereich</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-3">
                                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Geschäftsbeziehungen zwischen
                                der PROMAX Project Management GesmbH und ihren Kunden. Abweichende Bedingungen des Kunden
                                werden nicht anerkannt, es sei denn, wir haben ausdrücklich schriftlich zugestimmt.
                            </p>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Diese AGB gelten auch für künftige Geschäfte, ohne dass wir nochmals auf sie hinweisen müssen.
                            </p>
                        </div>

                        <div className="border-l-4 border-slate-400 pl-4">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">§ 2 Vertragsschluss</h3>
                            <div className="space-y-3">
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    (1) Unsere Angebote sind freibleibend und unverbindlich, sofern nicht ausdrücklich
                                    anders angegeben.
                                </p>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    (2) Ein Vertrag kommt durch unsere schriftliche Auftragsbestätigung oder durch
                                    Ausführung der Leistung zustande.
                                </p>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    (3) Änderungen und Ergänzungen des Vertrags bedürfen zu ihrer Wirksamkeit der Schriftform.
                                </p>
                            </div>
                        </div>

                        <div className="border-l-4 border-slate-600 pl-4">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">§ 3 Leistungsumfang</h3>
                            <div className="space-y-3">
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    (1) Der Umfang unserer Leistungen ergibt sich aus der jeweiligen Auftragsbestätigung
                                    sowie diesen AGB.
                                </p>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    (2) Zusätzliche Leistungen werden gesondert berechnet, soweit nicht anders vereinbart.
                                </p>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    (3) Wir behalten uns Änderungen und Verbesserungen vor, soweit sie dem Kunden zumutbar sind.
                                </p>
                            </div>
                        </div>

                        <div className="border-l-4 border-orange-400 pl-4">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">§ 4 Preise und Zahlungsbedingungen</h3>
                            <div className="space-y-3">
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    (1) Es gelten die bei Vertragsschluss vereinbarten Preise. Alle Preise verstehen sich
                                    zuzüglich der gesetzlichen Mehrwertsteuer.
                                </p>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    (2) Rechnungen sind binnen 14 Tagen nach Rechnungsstellung ohne Abzug zu begleichen.
                                </p>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    (3) Bei Zahlungsverzug sind wir berechtigt, Verzugszinsen in Höhe von 8% über dem
                                    Basiszinssatz zu verlangen.
                                </p>
                            </div>
                        </div>

                        <div className="border-l-4 border-slate-500 pl-4">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">§ 5 Haftung</h3>
                            <div className="space-y-3">
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    (1) Wir haften unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers
                                    oder der Gesundheit sowie für Schäden aus der Verletzung wesentlicher Vertragspflichten.
                                </p>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    (2) Im Übrigen ist unsere Haftung auf Vorsatz und grobe Fahrlässigkeit beschränkt.
                                </p>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    (3) Die Haftung für mittelbare Schäden und entgangenen Gewinn ist ausgeschlossen.
                                </p>
                            </div>
                        </div>

                        <div className="border-l-4 border-slate-700 pl-4">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">§ 6 Schlussbestimmungen</h3>
                            <div className="space-y-3">
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    (1) Es gilt österreichisches Recht unter Ausschluss des UN-Kaufrechts.
                                </p>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    (2) Erfüllungsort und Gerichtsstand ist Graz, sofern der Kunde Vollkaufmann ist.
                                </p>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    (3) Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der
                                    übrigen Bestimmungen unberührt.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <div className="text-center mt-12 pt-8 border-t border-slate-200 text-slate-500 text-sm">
                    <p>Stand: {new Date().toLocaleDateString('de-AT')} | PROMAX Project Management GesmbH</p>
                </div>
            </div>
        </div>
    );
};

export default LegalPage;
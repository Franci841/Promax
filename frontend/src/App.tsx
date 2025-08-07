import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage.tsx";
import Unternehmen from "./components/Unternehmen.tsx";
import Kontakt from "./components/Kontakt.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import Branchen from "./components/Branchen.tsx";
import Leistungen from "./components/Leistungen.tsx";
import Projektberichte from "./components/Projektberichte.tsx";
import Karriere from "./components/Karriere.tsx";
import FitImJob from "./components/FitImJob.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Rechtliches from "./components/Rechtliches.tsx"; // Neuer Import für App-spezifische Styles

function App() {
    return (
        <div>
            <Navbar/>
            <ScrollToTop/>
                <Routes>
                    <Route path="/" element={<Homepage/>} />
                    <Route path="/Unternehmen" element={<Unternehmen/>} />
                    <Route path="/Kontakt" element={<Kontakt/>} />
                    <Route path="/Home" element={<Homepage/>} />
                    <Route path="/Branchen" element={<Branchen/>} />
                    <Route path="/Leistungen" element={<Leistungen/>} />
                    <Route path="/Projektberichte" element={<Projektberichte/>} />
                    <Route path="/Karriere" element={<Karriere/>} />
                    <Route path="/FitImJob" element={<FitImJob/>}/>
                    <Route path={"/Rechtliches"} element={<Rechtliches/>}/>
                </Routes>
            <Footer/>
        </div>
    );
}

export default App;
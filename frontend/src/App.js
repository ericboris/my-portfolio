import Header from "./components/Header";
import HorizontalLine from "./components/HorizontalLine";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Educations from "./components/Educations";
import Footer from "./components/Footer";

function App() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />

            <div className="flex-grow">
                <AboutMe />
                <HorizontalLine />
                <Projects/>
            </div>
            
            <Footer />
        </main>
    )
}

export default App;

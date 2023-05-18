import Header from "./components/Header";
import HorizontalLine from "./components/HorizontalLine";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
    return (
        <main className="container mx-auto min-h-screen flex flex-col">
            <Header />

            <div className="flex-grow md:px-16 lg:px-32 xl:px-64">
                <AboutMe />
                <HorizontalLine />
                <Projects/>
            </div>

            <Footer />
        </main>
    )
}

export default App;

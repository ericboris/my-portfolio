import Header from "../components/Header";
import HorizontalLine from "../components/HorizontalLine";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <main>
        <Header />

        <AboutMe />
        <HorizontalLine />
        <Projects />
        <HorizontalLine />
        <Education />

        <Footer />
        </main>
    )
}

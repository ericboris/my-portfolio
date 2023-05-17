import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Stack from "../components/Stack";
import Tools from "../components/Tools";
import Footer from "../components/Footer";
import Education from "../components/Education";
import Blog from "../components/Blog";
import Skills from "../components/Skills";
import References from "../components/References";
import HorizontalLine from "../components/HorizontalLine";

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

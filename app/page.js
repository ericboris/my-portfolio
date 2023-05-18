import Header from "../components/Header";
import HorizontalLine from "../components/HorizontalLine";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Educations from "../components/Educations";
import Footer from "../components/Footer";

export default function Home() {
    const project = { 
        company_title: "Geometry",
        company_subtitle: "Decentralized Exchange",
        description: "Reimagined trading on the ethereum blockchain.",
        image: "/helix.png",
        link: "https://github.com/ericboris/aura-backend",
    };

    return (
        <main>
        <Header />

        <AboutMe />

        <HorizontalLine />

        <Projects/>

        <Footer />
        </main>
    )
}

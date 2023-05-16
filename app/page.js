import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Stack from "../components/Stack";
import Tools from "../components/Tools";
import Footer from "../components/Footer";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";
import Blog from "../components/Blog";
import Skills from "../components/Skills";
import References from "../components/References";

export default function Home() {
  return (
    <main>
      <Header />
      <AboutMe />
      <Contact />
      <Stack />
      <Tools />
      <Projects />
      <WorkExperience />
      <Education />
      <Blog />
      <Skills />
      <References />
      <Footer />
    </main>
  )
}

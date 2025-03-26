import Home from "@/app/components/Home";
import About from "@/app/components/About";
import Skills from "@/app/components/Skills";
import ProjectsSection from "@/app/components/Projects/ProjectsSection";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";





export default function HomePage() {
  return (
      <>
          <section id="home"> <Home/> </section>
          <section id="about"><About/></section>
          <section id="Skills"><Skills/></section>
          <section id="project"><ProjectsSection/></section>
          <section id="contact"><Contact/></section>
          <section id="footer"><Footer/></section>

      </>
  )
}


import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import CV from "@/components/sections/CV";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-bg text-fg">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <CV />
      <Footer />
    </main>
  );
}

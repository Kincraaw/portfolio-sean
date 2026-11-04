
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Skills from "@/src/components/Skills";
import Footer from "@/src/components/Footer";
import CV from "@/src/components/CV";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b12] text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Footer />
      <CV />
    </main>
  );
}

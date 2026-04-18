import { Navbar, Footer, Hero, About, Services, Advantages, Portfolio, Testimonials, FAQ, Contact } from "@/components/";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Advantages />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
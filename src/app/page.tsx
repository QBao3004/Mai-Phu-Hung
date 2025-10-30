import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import About from '@/components/About';
import Blogs from '@/components/Blogs';
import Contact from '@/components/Contact';
import Careers from '@/components/Careers';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <Products />
      {/* <About /> */}
      {/* <Blogs /> */}
      <Careers />
      <Contact />
      
      <Footer />
    </div>
  );
}

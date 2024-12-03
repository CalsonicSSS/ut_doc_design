import About from '@/components/About';
import ChooseContent from '@/components/ChooseContent';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ResourceFlow from '@/components/ResourceFlow';
// import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Header />
      <Hero />
      <About />
      <ResourceFlow />
      <ChooseContent />
      <Footer />
    </main>
  );
}

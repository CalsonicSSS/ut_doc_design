import About from '@/components/Home/About';
import ChooseContent from '@/components/Home/ChooseContent';
import Footer from '@/components/Home/Footer';
import Header from '@/components/layout/Header';
import Hero from '@/components/Home/Hero';
import ResourceFlow from '@/components/Home/ResourceFlow';

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

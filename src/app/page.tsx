import About from '@/components/Home/About';
import ChooseContent from '@/components/Home/ChooseContent';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/Home/Hero';
import ResourceFlow from '@/components/Home/ResourceFlow';
import CrisisBanner from '@/components/layout/CrisisBanner';
import CleverleylabHeader from '@/components/layout/CleverleylabHeader';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <CrisisBanner />
      <CleverleylabHeader />
      <Hero />
      <About />
      <ResourceFlow />
      <ChooseContent />
      <Footer />
    </main>
  );
}

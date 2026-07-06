'use client';
import dynamic from 'next/dynamic';
import Loader from './components/Loader';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Biography from './components/Biography';
import OutfitCatalogue from './components/OutfitCatalogue';
import InterviewLibrary from './components/InterviewLibrary';
import Gallery from './components/Gallery';
import SocialAndMedia from './components/SocialAndMedia';
import FanZone from './components/FanZone';
import ScrollProgress from './components/ScrollProgress';

const Cursor = dynamic(() => import('./components/Cursor'), { ssr: false });
const FloatingPetals = dynamic(() => import('./components/FloatingPetals'), { ssr: false });

export default function Home() {
  return (
    <>
      <Loader />
      <Cursor />
      <FloatingPetals />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Biography />
        <OutfitCatalogue />
        <InterviewLibrary />
        <Gallery />
        <SocialAndMedia />
        <FanZone />
      </main>
    </>
  );
}

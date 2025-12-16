import { useEffect } from 'react'; 
import './Home.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Skills from '../../components/skills/Skills'
import Timeline from '../../components/timeline/Timeline'

function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <Timeline />
      <Skills />
    </div>
  );
}

export default Home;

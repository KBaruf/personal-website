import React, { useEffect } from 'react';
import AllRoutes from './router/AllRoutes';
import ScrollToTop from './components/ScrollToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    AOS.init({
      once: true,
      duration: 700,
      offset: 60,
      easing: 'ease-out-cubic',
      disable: prefersReducedMotion,
    });
  }, []);

  return (
    <>
      <ScrollToTop />
      <AllRoutes />
    </>
  );
};

export default App;

import './styles/globals.css';
import 'lite-youtube-embed/src/lite-yt-embed.css';
import 'lite-youtube-embed/src/lite-yt-embed.js';


import '@fontsource/montserrat/800.css'; 
import '@fontsource/montserrat/600.css'; 
import '@fontsource/montserrat/500.css'; 
import '@fontsource/montserrat';

import "@phosphor-icons/web/bold";
import "@phosphor-icons/web/fill";


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.isIntersecting ? 
    entry.target.classList.add('animate-visible'):
    entry.target.classList.remove('animate-visible')
  });
  
},  { threshold: 0.1 });

const animatedElements = document.querySelectorAll('.animate-hidden');
animatedElements.forEach((e) => observer.observe(e));
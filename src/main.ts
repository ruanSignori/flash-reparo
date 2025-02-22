import './styles/globals.css';
import 'lite-youtube-embed/src/lite-yt-embed.css';
import 'lite-youtube-embed/src/lite-yt-embed.js';

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

// Necessário para o Safari, pois a fonte não é carregada corretamente
if (navigator.userAgent.match(/iPhone|iPad/) && !navigator.userAgent.match(/Macintosh/)) {
  document.documentElement.classList.add("iphone");
}

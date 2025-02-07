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

// Afiliados
// Comentado pq da erro no deploy
// function getAffiliateParams() {

//   console.log('Xgrow Affiliate Params Loaded');

//   const affiliateId = new URLSearchParams(window.location.search).get('xa');

//   return { platformId: 'b2198636-5591-4ef9-9942-7c40df45f1a9', planId: '75920', affiliateId }

// }

const affiliateId = new URLSearchParams(window.location.search).get("xa");

if (affiliateId) {

  localStorage.setItem('affiliateId', affiliateId)

}

const elementosHref = document.querySelectorAll('[href]')



elementosHref.forEach(elemento => {

  const hrefAtual = elemento.getAttribute('href')
  console.log(hrefAtual)
  if (!hrefAtual) return;
  elemento.setAttribute('href', hrefAtual + '?xa=' + localStorage.getItem('affiliateId'))

})

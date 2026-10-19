import { responsiveImage } from '../utils/images';
import escaparateCasa800 from '../assets/escaparates/escaparateCasa-800.webp';
import escaparateCasa1200 from '../assets/escaparates/escaparateCasa-1200.webp';
import cristalera2600 from '../assets/cristales/cristalera2-600.webp';
import cristalera2900 from '../assets/cristales/cristalera2-900.webp';
import empresas600 from '../assets/cristales/empresas-600.webp';
import empresas900 from '../assets/cristales/empresas-900.webp';
import fachada600 from '../assets/fachadas/fachada-acristalada-600.webp';
import fachada900 from '../assets/fachadas/fachada-acristalada-900.webp';
import escaparate600 from '../assets/escaparates/escaparate-600.webp';
import escaparate900 from '../assets/escaparates/escaparate-900.webp';
import paneles800 from '../assets/paneles-solares/paneles-800.webp';
import paneles1200 from '../assets/paneles-solares/paneles-1200.webp';
import padel828 from '../assets/cristales/pexels-padel-1-828.webp';
import padel1280 from '../assets/cristales/pexels-padel-1-1280.webp';
import atico600 from '../assets/cristales/atico-600.webp';
import atico900 from '../assets/cristales/atico-900.webp';

// Variantes generadas con scripts/optimize-images.py. Las tarjetas se muestran
// a ~400px de ancho como máximo (100vw en móvil), así que basta con 900/1200.
const cristaleraImg = responsiveImage({ 800: escaparateCasa800, 1200: escaparateCasa1200 }, 1200, 900);
const cristalera2Img = responsiveImage({ 600: cristalera2600, 900: cristalera2900 }, 900, 1599);
const cristalera3Img = responsiveImage({ 600: empresas600, 900: empresas900 }, 900, 1599);
const fachada = responsiveImage({ 600: fachada600, 900: fachada900 }, 900, 1599);
const escaparateImg = responsiveImage({ 600: escaparate600, 900: escaparate900 }, 900, 1350);
const panelesImg = responsiveImage({ 800: paneles800, 1200: paneles1200 }, 1200, 676);
const padelImg = responsiveImage({ 828: padel828, 1280: padel1280 }, 1280, 960);
const aticoImg = responsiveImage({ 600: atico600, 900: atico900 }, 900, 1125);

export const services = [
  {
    id: 1,
    title: 'Limpieza de cristales a particulares',
    description: 'Ventanas, terrazas, áticos y cerramientos de tu vivienda, por dentro y por fuera. Trato cuidadoso dentro de tu casa y en el horario que mejor te venga.',
    image: aticoImg,
    alt: 'Terraza de ático con techo y cerramiento de cristal limpios y transparentes',
  },
  {
    id: 2,
    title: 'Limpieza de cristales en altura',
    description: 'Trabajamos en fachadas y cristaleras de difícil acceso con los medios técnicos adecuados: plataformas, pértigas telescópicas y sistemas seguros de trabajo vertical.',
    image: cristalera2Img,
    alt: 'Limpieza de cristalera acristalada en altura en un edificio urbano',
  },
  {
    id: 3,
    title: 'Limpieza de escaparates',
    description: 'El escaparate es la primera imagen de tu negocio. Mantenemos tus cristales y marcos impecables para que cada cliente vea lo mejor de tu local antes de entrar.',
    image: escaparateImg,
    alt: 'Escaparate de local comercial con cristales limpios y transparentes',
  },
  {
    id: 4,
    title: 'Limpieza de comunidades',
    description: 'Servicio periódico para comunidades de propietarios. Cristales de zonas comunes, portales acristalados y fachadas siempre en perfecto estado.',
    image: cristaleraImg,
    alt: 'Gran cristalera de vivienda residencial limpia tras servicio profesional',
  },
  {
    id: 5,
    title: 'Mantenimiento para empresas',
    description: 'Contratos de mantenimiento con visitas programadas para que las instalaciones de tu empresa mantengan una imagen profesional constante.',
    image: cristalera3Img,
    alt: 'Cristaleras interiores de oficina o espacio empresarial moderno',
  },
  {
    id: 6,
    title: 'Fachadas acristaladas',
    description: 'Limpieza integral de fachadas de vidrio en edificios de oficinas, centros comerciales y grandes superficies. Presupuesto personalizado según características del edificio.',
    image: fachada,
    alt: 'Fachada acristalada de edificio moderno con ventanas limpias',
  },
  {
    id: 7,
    title: 'Limpieza de paneles solares',
    description: 'Los paneles sucios pierden eficiencia. Realizamos la limpieza con agua osmotizada y técnicas específicas que no dañan la superficie ni los sistemas de anclaje.',
    image: panelesImg,
    alt: 'Operario limpiando paneles solares en cubierta industrial',
  },
  {
    id: 8,
    title: 'Limpieza de cristales de pistas de pádel',
    description: 'Para clubes, centros deportivos y comunidades con pista propia. Dejamos los cristales de la pista limpios y transparentes, con una limpieza puntual o un mantenimiento periódico.',
    image: padelImg,
    alt: 'Pasillo entre dos pistas de pádel cubiertas con cerramiento de cristal',
  },
];

export const allServices = [
  'Limpieza de cristales en altura',
  'Limpieza de fachadas acristaladas',
  'Limpieza de comunidades',
  'Mantenimiento periódico para empresas',
  'Eliminación de marcas, cal y suciedad persistente',
  'Limpieza de paneles solares',
  'Limpieza de escaparates',
  'Limpieza de moquetas',
  'Limpieza de sofás y tapizados',
  'Limpieza de persianas',
  'Abrillantado de suelos',
  'Eliminación de grafitis',
];

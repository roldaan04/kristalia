import { responsiveImage } from '../utils/images';
import antesDespues800 from '../assets/antes-despues/antesDespues-800.webp';
import antesDespues1298 from '../assets/antes-despues/antesDespues-1298.webp';
import cristalAntes600 from '../assets/antes-despues/cristalAntes-600.webp';
import cristalAntes900 from '../assets/antes-despues/cristalAntes-900.webp';
import cristalDespues600 from '../assets/antes-despues/cristalDespues-600.webp';
import cristalDespues900 from '../assets/antes-despues/cristalDespues-900.webp';

// Variantes generadas con scripts/optimize-images.py ({ src, srcSet }).
// El marco mide ~460px en escritorio y el ancho de pantalla en móvil.
const antesDespuesImg = responsiveImage({ 800: antesDespues800, 1298: antesDespues1298 }, 1298, 1212);
const cristalAntesImg = responsiveImage({ 600: cristalAntes600, 900: cristalAntes900 }, 900, 1599);
const cristalDespuesImg = responsiveImage({ 600: cristalDespues600, 900: cristalDespues900 }, 900, 1599);

// Ancho al que se pinta cada foto dentro del marco 4/5 (object-fit: cover):
// las verticales llenan el ancho; la cuadrada (stacked) se amplía por el alto.
export const BA_SIZES_PORTRAIT = '(max-width: 640px) 100vw, 460px';
export const BA_SIZES_STACKED = '(max-width: 640px) 125vw, 610px';

// Diapositivas del carrusel «Resultados reales».
// Todas se muestran en el mismo marco vertical (ver BeforeAfterCarousel.css).
// width/height = tamaño real de cada fotografía (evita saltos de layout).
export const beforeAfterSlides = [
  {
    id: 1,
    type: 'compare',
    before: cristalAntesImg,
    after: cristalDespuesImg,
    width: 1153,
    height: 2048,
    title: 'Comprueba la diferencia',
    description: 'Desliza para comparar el resultado de la limpieza.',
    beforeAlt: 'Vista desde una ventana sucia hacia una piscina y una pista de pádel, antes de la limpieza.',
    afterAlt: 'La misma vista hacia la piscina y la pista de pádel con el cristal limpio, después de la limpieza.',
  },
  {
    id: 2,
    type: 'stacked', // antes arriba, después abajo
    image: antesDespuesImg,
    width: 1298,
    height: 1212,
    title: 'Cristales libres de suciedad',
    description: 'La diferencia de una limpieza especializada.',
    alt: 'Misma vista de un edificio a través de un cristal: arriba, antes de la limpieza, cubierto de gotas secas y suciedad; abajo, después, completamente transparente.',
  },
];

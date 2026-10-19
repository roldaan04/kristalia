import antesDespuesImg from '../assets/antes-despues/antesDespues-900.webp';
import cristalAntesImg from '../assets/antes-despues/cristalAntes-900.webp';
import cristalDespuesImg from '../assets/antes-despues/cristalDespues-900.webp';

// Diapositivas del carrusel «Resultados reales».
// Todas se muestran en el mismo marco vertical (ver BeforeAfterCarousel.css).
// width/height = tamaño real de cada fotografía (evita saltos de layout).
// Variantes de 900 px generadas con scripts/optimize-images.py.
export const beforeAfterSlides = [
  {
    id: 1,
    type: 'compare',
    before: cristalAntesImg,
    after: cristalDespuesImg,
    width: 900,
    height: 1599,
    title: 'Comprueba la diferencia',
    description: 'Desliza para comparar el resultado de la limpieza.',
    beforeAlt: 'Vista desde una ventana sucia hacia una piscina y una pista de pádel, antes de la limpieza.',
    afterAlt: 'La misma vista hacia la piscina y la pista de pádel con el cristal limpio, después de la limpieza.',
  },
  {
    id: 2,
    type: 'stacked', // antes arriba, después abajo
    image: antesDespuesImg,
    width: 900,
    height: 840,
    title: 'Cristales libres de suciedad',
    description: 'La diferencia de una limpieza especializada.',
    alt: 'Misma vista de un edificio a través de un cristal: arriba, antes de la limpieza, cubierto de gotas secas y suciedad; abajo, después, completamente transparente.',
  },
];

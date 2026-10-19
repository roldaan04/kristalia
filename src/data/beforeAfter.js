import antesDespuesImg from '../assets/antes-despues/antesDespues.webp';
import cristalAntesImg from '../assets/antes-despues/cristalAntes.jpeg';
import cristalDespuesImg from '../assets/antes-despues/cristalDespues.jpeg';

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

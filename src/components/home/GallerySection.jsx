import ResponsiveImage from '../ui/ResponsiveImage';
import { responsiveImage } from '../../utils/images';
import cristalera800 from '../../assets/cristales/cristalera-800.webp';
import cristalera1200 from '../../assets/cristales/cristalera-1200.webp';
import cristalera2000 from '../../assets/cristales/cristalera-2000.webp';
import atico600 from '../../assets/cristales/atico-600.webp';
import atico900 from '../../assets/cristales/atico-900.webp';
import atico1122 from '../../assets/cristales/atico-1122.webp';
import cristalera3600 from '../../assets/cristales/cristalera3-600.webp';
import cristalera3900 from '../../assets/cristales/cristalera3-900.webp';
import cristalera31126 from '../../assets/cristales/cristalera3-1126.webp';
import escaparate600 from '../../assets/escaparates/escaparate2-600.webp';
import escaparate971 from '../../assets/escaparates/escaparate2-971.webp';
import './GallerySection.css';

// Variantes generadas con scripts/optimize-images.py
const cristaleraImg = responsiveImage({ 800: cristalera800, 1200: cristalera1200, 2000: cristalera2000 }, 2000, 1126);
const cristalera2Img = responsiveImage({ 600: atico600, 900: atico900, 1122: atico1122 }, 1122, 1402);
const cristalera3Img = responsiveImage({ 600: cristalera3600, 900: cristalera3900, 1126: cristalera31126 }, 1126, 2000);
const escaparateImg = responsiveImage({ 600: escaparate600, 971: escaparate971 }, 971, 1619);

// `sizes` = ancho al que se pinta la foto, no el de la pieza: con object-fit
// cover una foto apaisada en una pieza alta se amplía hasta cubrir el alto.
// La destacada ocupa dos filas (~92vh) en escritorio y se pinta a ~165vh.
const SIZES_FEATURED = '(max-width: 560px) 125vw, (max-width: 1000px) 620px, 165vh';
const SIZES_VERTICAL = '(max-width: 560px) 100vw, (max-width: 1000px) 50vw, 36vw';
const SIZES_SMALL = '(max-width: 560px) 100vw, (max-width: 1000px) 50vw, 30vw';

const galleryItems = [
  {
    id: 1,
    image: cristaleraImg,
    title: 'Cristaleras residenciales',
    alt: 'Limpieza profesional de una cristalera en una vivienda residencial',
    className: 'gallery__item--featured',
    sizes: SIZES_FEATURED,
  },
  {
    id: 2,
    image: escaparateImg,
    title: 'Locales comerciales',
    alt: 'Escaparate de un local comercial con los cristales limpios',
    className: 'gallery__item--vertical',
    sizes: SIZES_VERTICAL,
  },
  {
    id: 3,
    image: cristalera2Img,
    title: 'Áticos y terrazas',
    alt: 'Limpieza de cristales en un ático con terraza',
    className: 'gallery__item--terrace',
    sizes: SIZES_SMALL,
  },
  {
    id: 4,
    image: cristalera3Img,
    title: 'Espacios singulares',
    alt: 'Espacio moderno con grandes cristaleras y techo acristalado',
    className: 'gallery__item--singular',
    sizes: SIZES_SMALL,
  },
];

export default function GallerySection() {
  return (
    <section
      className="gallery"
      aria-labelledby="gallery-title"
    >
      <div className="gallery__grid">
        {galleryItems.map((item) => (
          <article
            className={`gallery__item ${item.className}`}
            key={item.id}
          >
            <ResponsiveImage
              image={item.image}
              sizes={item.sizes}
              alt={item.alt}
              className="gallery__image"
            />

            <div className="gallery__overlay" aria-hidden="true" />

            <h3 className="gallery__caption">
              {item.title}
            </h3>
          </article>
        ))}
      </div>

      <div className="gallery__information container">
        <span className="section-tag">
          Trabajos realizados
        </span>

        <p
          className="gallery__description"
          id="gallery-title"
        >
          Cada proyecto es diferente. Adaptamos el servicio a las
          características de cada espacio.
        </p>
      </div>
    </section>
  );
}
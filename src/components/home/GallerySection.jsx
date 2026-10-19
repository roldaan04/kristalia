import { responsiveImage } from '../../utils/images';
import cristalera800 from '../../assets/cristales/cristalera-800.webp';
import cristalera1200 from '../../assets/cristales/cristalera-1200.webp';
import cristalera2000 from '../../assets/cristales/cristalera.webp';
import atico600 from '../../assets/cristales/atico-600.webp';
import atico900 from '../../assets/cristales/atico-900.webp';
import cristalera3600 from '../../assets/cristales/cristalera3-600.webp';
import cristalera3900 from '../../assets/cristales/cristalera3-900.webp';
import escaparate2600 from '../../assets/escaparates/escaparate2-600.webp';
import escaparate2900 from '../../assets/escaparates/escaparate2-900.webp';
import escaparate2971 from '../../assets/escaparates/escaparate2.webp';
import './GallerySection.css';

// Variantes de scripts/optimize-images.py. En escritorio las dos primeras
// celdas ocupan dos filas y la imagen se ajusta por altura (object-fit: cover),
// así que su `sizes` de escritorio pide el original para no perder nitidez.
const cristaleraImg = responsiveImage({ 800: cristalera800, 1200: cristalera1200, 2000: cristalera2000 }, 2000, 1126);
const escaparateImg = responsiveImage({ 600: escaparate2600, 900: escaparate2900, 971: escaparate2971 }, 971, 1619);
const cristalera2Img = responsiveImage({ 600: atico600, 900: atico900 }, 900, 1125);
const cristalera3Img = responsiveImage({ 600: cristalera3600, 900: cristalera3900 }, 900, 1599);

const MOBILE_SIZES = '(max-width: 560px) 100vw, (max-width: 1000px) 50vw';

const galleryItems = [
  {
    id: 1,
    image: cristaleraImg,
    title: 'Cristaleras residenciales',
    alt: 'Limpieza profesional de una cristalera en una vivienda residencial',
    className: 'gallery__item--featured',
    sizes: `${MOBILE_SIZES}, 100vw`,
  },
  {
    id: 2,
    image: escaparateImg,
    title: 'Locales comerciales',
    alt: 'Escaparate de un local comercial con los cristales limpios',
    className: 'gallery__item--vertical',
    sizes: `${MOBILE_SIZES}, 60vw`,
  },
  {
    id: 3,
    image: cristalera2Img,
    title: 'Áticos y terrazas',
    alt: 'Limpieza de cristales en un ático con terraza',
    className: 'gallery__item--terrace',
    sizes: `${MOBILE_SIZES}, 30vw`,
  },
  {
    id: 4,
    image: cristalera3Img,
    title: 'Espacios singulares',
    alt: 'Espacio moderno con grandes cristaleras y techo acristalado',
    className: 'gallery__item--singular',
    sizes: `${MOBILE_SIZES}, 30vw`,
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
            <img
              className="gallery__image"
              src={item.image.src}
              srcSet={item.image.srcSet}
              sizes={item.sizes}
              width={item.image.width}
              height={item.image.height}
              alt={item.alt}
              loading="lazy"
              decoding="async"
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
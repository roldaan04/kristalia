import cristaleraImg from '../../assets/cristales/cristalera.webp';
import cristalera2Img from '../../assets/cristales/cristalera4.webp';
import cristalera3Img from '../../assets/cristales/cristalera3.webp';
import escaparateImg from '../../assets/escaparates/escaparate.webp';
import './GallerySection.css';

const galleryItems = [
  {
    id: 1,
    image: cristaleraImg,
    title: 'Cristaleras residenciales',
    alt: 'Limpieza profesional de una cristalera en una vivienda residencial',
    className: 'gallery__item--featured',
  },
  {
    id: 2,
    image: escaparateImg,
    title: 'Locales comerciales',
    alt: 'Escaparate de un local comercial con los cristales limpios',
    className: 'gallery__item--vertical',
  },
  {
    id: 3,
    image: cristalera2Img,
    title: 'Áticos y terrazas',
    alt: 'Limpieza de cristales en un ático con terraza',
    className: 'gallery__item--terrace',
  },
  {
    id: 4,
    image: cristalera3Img,
    title: 'Espacios singulares',
    alt: 'Espacio moderno con grandes cristaleras y techo acristalado',
    className: 'gallery__item--singular',
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
              src={item.image}
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
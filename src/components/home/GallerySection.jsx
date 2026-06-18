import cristaleraImg from '../../assets/cristales/cristalera.jpeg';
import cristalera2Img from '../../assets/cristales/cristalera2.jpeg';
import cristalera3Img from '../../assets/cristales/cristalera3.jpeg';
import escaparateImg from '../../assets/escaparates/escaparate.jpeg';
import './GallerySection.css';

export default function GallerySection() {
  return (
    <section className="gallery" aria-label="Galería de trabajos realizados">
      <div className="gallery__grid">
        <div className="gallery__item gallery__item--large">
          <img
            src={cristaleraImg}
            alt="Limpieza profesional de cristalera acristalada en vivienda residencial"
            loading="lazy"
          />
          <div className="gallery__caption">Cristaleras residenciales</div>
        </div>
        <div className="gallery__item gallery__item--tall">
          <img
            src={cristalera2Img}
            alt="Limpieza de cristales en ático con vistas a la ciudad"
            loading="lazy"
          />
          <div className="gallery__caption">Áticos y terrazas</div>
        </div>
        <div className="gallery__item">
          <img
            src={escaparateImg}
            alt="Escaparate de local comercial con cristales limpios y transparentes"
            loading="lazy"
          />
          <div className="gallery__caption">Locales comerciales</div>
        </div>
        <div className="gallery__item">
          <img
            src={cristalera3Img}
            alt="Interior de espacio moderno con grandes cristaleras y lucernario"
            loading="lazy"
          />
          <div className="gallery__caption">Espacios singulares</div>
        </div>
      </div>

      <div className="gallery__label container">
        <span className="section-tag">Trabajos realizados</span>
        <p className="gallery__label-text">Cada proyecto es diferente. Adaptamos el servicio a las características de cada espacio.</p>
      </div>
    </section>
  );
}

import ServicioExtraLanding from './ServicioExtraLanding';
import { buildServiceJsonLd } from '../../utils/serviceJsonLd';
import { buildWhatsAppUrl, buildQuoteMessage } from '../../utils/constants';
import { responsiveImage } from '../../utils/images';
import hero828 from '../../assets/servicios-extra/sofa-828.webp';
import hero1280 from '../../assets/servicios-extra/sofa-1280.webp';
import hero1536 from '../../assets/servicios-extra/sofa-1536.webp';
import salon800 from '../../assets/servicios-extra/salon-800.webp';
import salon1200 from '../../assets/servicios-extra/salon-1200.webp';

const PATH = '/limpieza-sofas-madrid';
const NAME = 'Limpieza profesional de sofás en Madrid';

const WHATSAPP_QUOTE = buildWhatsAppUrl(
  buildQuoteMessage({
    subject: 'tu presupuesto de limpieza de sofás',
    placeQuestion: '🏠 ¿Es para una vivienda, oficina o local comercial?',
    sizeQuestion:
      '🛋️ ¿Cuántos sofás o plazas son y de qué tejido (tela, piel...)? (Indícanos si hay manchas concretas, olores o mascotas).',
  }),
);

// Variantes generadas con scripts/optimize-images.py
const heroImg = responsiveImage({ 828: hero828, 1280: hero1280, 1536: hero1536 }, 1536, 1024);
const introImg = responsiveImage({ 800: salon800, 1200: salon1200 }, 1200, 800);

const jsonLd = buildServiceJsonLd({
  path: PATH,
  name: NAME,
  serviceType: 'Limpieza de sofás y tapicerías',
  description:
    'Limpieza en profundidad de sofás, sillones y tapicerías en Madrid, en el propio domicilio, oficina o local. Manchas, olores y suciedad acumulada en el tejido.',
  offers: [
    'Limpieza de sofás',
    'Limpieza de sillones y butacas',
    'Limpieza de sillas tapizadas',
    'Tratamiento de manchas y olores en tapicerías',
  ],
});

const content = {
  seo: {
    title: 'Limpieza profesional de sofás en Madrid | Kristalia',
    description:
      'Limpieza de sofás, sillones y tapicerías a domicilio en Madrid. Eliminamos manchas, olores y suciedad acumulada con el método adecuado para cada tejido.',
    path: PATH,
    jsonLd,
  },
  breadcrumb: 'Limpieza de sofás en Madrid',
  hero: {
    image: heroImg,
    alt: 'Sofá de tela clara limpio en un salón luminoso con cojines y alfombra',
    title: 'Limpieza profesional de sofás en Madrid',
    subtitle:
      'Limpiamos en profundidad sofás, sillones y tapicerías en tu casa, oficina o local. Manchas, olores y la suciedad que se queda en el tejido con el uso diario, tratadas según el tipo de tela.',
    subtitleShort:
      'Sofás, sillones y tapicerías limpios en tu casa, sin moverlos de sitio. Sin contrato ni permanencia.',
  },
  intro: {
    image: {
      image: introImg,
      alt: 'Salón luminoso con un sofá de tela clara limpio, cojines verdes y crema y vistas a edificios de ladrillo de Madrid',
    },
    tag: 'Sofás y tapicerías',
    title: 'Un sofá limpio se nota en todo el salón',
    paragraphs: [
      'El sofá es el mueble que más se usa de la casa y el que menos se limpia a fondo. Con el tiempo el tejido acumula polvo, grasa, restos de comida y pelo de mascotas que el aspirador no saca, y el color se apaga sin que te des cuenta.',
      'Hacemos la limpieza en tu propia vivienda u oficina, sin desmontar ni llevarnos nada. Antes de empezar revisamos el tejido para elegir cómo tratarlo, porque no se limpia igual un sofá de tela que uno de microfibra o de piel.',
      'Es un trabajo puntual: puedes pedirlo cuando lo necesites, sin contrato ni permanencia.',
    ],
    listTitle: 'Qué limpiamos',
    list: [
      {
        titulo: 'Sofás y chaise longues',
        texto: 'Asientos, respaldos, brazos y cojines, incluidos los que no tienen funda desmontable.',
      },
      {
        titulo: 'Sillones, butacas y sillas tapizadas',
        texto: 'Del salón, del comedor o de la sala de espera de tu negocio.',
      },
      {
        titulo: 'Manchas y olores',
        texto: 'Café, vino, comida, mascotas o el olor que deja el uso. Te decimos de antemano qué se puede esperar de cada mancha.',
      },
    ],
  },
  espacios: {
    tag: 'Dónde trabajamos',
    title: 'En casa, en la oficina o en tu local',
    subtitle: 'Vamos donde está el sofá y lo limpiamos allí mismo.',
    items: [
      {
        titulo: 'Viviendas',
        texto: 'Sofás del salón, sillones y sillas tapizadas. Un buen momento es antes de una visita, tras una mudanza o cuando hay niños y mascotas en casa.',
      },
      {
        titulo: 'Oficinas y despachos',
        texto: 'Sofás de recepción, salas de reuniones y zonas de descanso, que reciben mucho uso y son lo primero que ve una visita.',
      },
      {
        titulo: 'Hoteles y locales',
        texto: 'Tapicerías de habitaciones, halls, restaurantes y salas de espera, con limpiezas puntuales o periódicas según el uso.',
      },
    ],
  },
  faqs: [
    {
      pregunta: '¿Tenéis que llevaros el sofá?',
      respuesta:
        'No. La limpieza se hace en el mismo sitio donde está el sofá, sin desmontarlo ni sacarlo de casa. Solo necesitamos un poco de espacio alrededor para trabajar.',
    },
    {
      pregunta: '¿Se quitan todas las manchas?',
      respuesta:
        'La mayoría de manchas del uso diario salen o mejoran mucho, pero depende del tejido, de qué sea la mancha y de cuánto tiempo lleve. Si nos mandas una foto te decimos antes qué se puede esperar, para que no haya sorpresas.',
    },
    {
      pregunta: '¿Cuánto tarda en secarse?',
      respuesta:
        'Depende del tejido y de la ventilación de la habitación, pero normalmente es cuestión de unas horas. Al terminar te indicamos cuándo puedes volver a usarlo con normalidad.',
    },
    {
      pregunta: '¿Limpiáis sofás de piel?',
      respuesta:
        'Sí, aunque el tratamiento es distinto al de un sofá de tela. Indícanos el material cuando pidas presupuesto y te confirmamos cómo lo hacemos.',
    },
    {
      pregunta: '¿Cómo pido presupuesto?',
      respuesta:
        'Mándanos por WhatsApp una foto del sofá, el número de plazas y tu ubicación. Con eso solemos poder darte el precio sin necesidad de visita.',
    },
  ],
  cta: {
    title: 'Cuéntanos qué sofá necesitas limpiar',
    text: 'Con una foto, el tamaño del sofá y tu ubicación te damos una valoración clara. Sin visita comercial y sin compromiso.',
  },
  whatsappUrl: WHATSAPP_QUOTE,
};

export default function LimpiezaSofasMadridPage() {
  return <ServicioExtraLanding {...content} />;
}

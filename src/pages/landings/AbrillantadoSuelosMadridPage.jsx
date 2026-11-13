import ServicioExtraLanding from './ServicioExtraLanding';
import { buildServiceJsonLd } from '../../utils/serviceJsonLd';
import { buildWhatsAppUrl, buildQuoteMessage } from '../../utils/constants';
import { responsiveImage } from '../../utils/images';
import hero828 from '../../assets/servicios-extra/suelo-828.webp';
import hero1280 from '../../assets/servicios-extra/suelo-1280.webp';
import hero1536 from '../../assets/servicios-extra/suelo-1536.webp';
import entrada800 from '../../assets/servicios-extra/entrada-800.webp';
import entrada1200 from '../../assets/servicios-extra/entrada-1200.webp';

const PATH = '/abrillantado-cristalizado-suelos-madrid';
const NAME = 'Pulido y abrillantado de terrazo y mármol en Madrid';

const WHATSAPP_QUOTE = buildWhatsAppUrl(
  buildQuoteMessage({ service: 'abrillantado de suelos' }),
);

// Variantes generadas con scripts/optimize-images.py
const heroImg = responsiveImage({ 828: hero828, 1280: hero1280, 1536: hero1536 }, 1536, 1024);
const introImg = responsiveImage({ 800: entrada800, 1200: entrada1200 }, 1200, 900);

const jsonLd = buildServiceJsonLd({
  path: PATH,
  name: NAME,
  serviceType: 'Pulido y abrillantado de suelos',
  description:
    'Pulido, abrillantado y cristalizado de suelos de terrazo y mármol en portales, comunidades, locales, oficinas y viviendas de Madrid.',
  offers: [
    'Pulido de suelos de terrazo',
    'Cristalizado de suelos de mármol',
    'Cristalizado de suelos de terrazo',
    'Abrillantado de suelos',
    'Mantenimiento del brillo en portales y comunidades',
  ],
});

const content = {
  seo: {
    title: 'Pulido y abrillantado de terrazo y mármol en Madrid | Kristalia',
    description:
      'Pulido y abrillantado de terrazo y mármol en Madrid, también cristalizado. Portales, comunidades, locales y viviendas con un suelo brillante y protegido. Presupuesto sin compromiso.',
    path: PATH,
    jsonLd,
  },
  breadcrumb: 'Pulido y abrillantado de suelos en Madrid',
  hero: {
    image: heroImg,
    alt: 'Portal de comunidad con suelo de terrazo abrillantado que refleja la puerta de entrada',
    title: 'Pulido y abrillantado de terrazo y mármol en Madrid',
    subtitle:
      'Recuperamos el brillo de suelos de terrazo y mármol en portales, comunidades, locales y viviendas. Presupuesto sin compromiso por WhatsApp.',
    subtitleShort:
      'Pulido y abrillantado de suelos de terrazo y mármol en portales, locales y viviendas. Presupuesto por WhatsApp.',
  },
  intro: {
    image: {
      image: introImg,
      alt: 'Portal de un edificio de Madrid con suelo de mármol abrillantado que refleja la puerta de cristal de la entrada',
    },
    tag: 'Suelos',
    title: 'El suelo es lo primero que se ve al entrar',
    paragraphs: [
      'El paso diario va apagando el brillo de los suelos de mármol y terrazo: aparecen zonas mates, caminos de paso y pequeñas marcas que la fregona no quita. En un portal o en un local, eso cambia por completo la imagen del espacio.',
      'Con el abrillantado y el cristalizado recuperamos el brillo de la piedra y dejamos una capa que la protege y hace más fácil su limpieza diaria. Antes de empezar revisamos el tipo de suelo y su estado para decirte qué resultado se puede conseguir.',
      'Podemos hacerlo como trabajo puntual o con un mantenimiento periódico, que es lo que mejor conserva el brillo en zonas de mucho paso.',
    ],
    listTitle: 'Qué hacemos',
    list: [
      {
        titulo: 'Pulido',
        texto: 'Igualamos la superficie de suelos de terrazo y mármol desgastados o con marcas antes de abrillantar.',
      },
      {
        titulo: 'Abrillantado',
        texto: 'Recuperamos el brillo de suelos apagados por el uso y el paso del tiempo.',
      },
      {
        titulo: 'Cristalizado',
        texto: 'Un acabado brillante y más resistente para suelos de mármol y terrazo.',
      },
      {
        titulo: 'Mantenimiento',
        texto: 'Repasos periódicos para que el suelo conserve el brillo, sobre todo en zonas de mucho paso.',
      },
    ],
  },
  espacios: {
    tag: 'Dónde trabajamos',
    title: 'Portales, locales y viviendas',
    subtitle: 'Los espacios donde un suelo brillante marca más la diferencia.',
    items: [
      {
        titulo: 'Portales y comunidades',
        texto: 'Entradas, rellanos y zonas comunes. Coordinamos el trabajo con la comunidad para no cortar el paso a los vecinos.',
      },
      {
        titulo: 'Locales y oficinas',
        texto: 'Tiendas, recepciones y oficinas donde el suelo forma parte de la imagen del negocio. Podemos trabajar fuera del horario de apertura.',
      },
      {
        titulo: 'Viviendas',
        texto: 'Suelos de mármol o terrazo de pisos y chalets, antes de entrar a vivir, tras una obra o cuando han perdido el brillo.',
      },
    ],
  },
  faqs: [
    {
      pregunta: '¿Qué diferencia hay entre pulir, abrillantar y cristalizar?',
      respuesta:
        'El pulido iguala la superficie del suelo cuando está desgastado o marcado. El abrillantado recupera el brillo de un suelo apagado por el uso. El cristalizado deja además una capa más dura y brillante sobre la piedra, que la protege y aguanta mejor el paso. Te recomendamos uno u otro según el suelo y el uso que tenga.',
    },
    {
      pregunta: '¿En qué suelos se puede hacer?',
      respuesta:
        'Principalmente en suelos de mármol y terrazo, que son los que mejor responden. Si tienes otro tipo de suelo, mándanos una foto y te decimos si es posible.',
    },
    {
      pregunta: '¿Hay que dejar de usar el espacio?',
      respuesta:
        'Solo la zona en la que estamos trabajando y durante el tiempo que dura el trabajo. En portales lo organizamos por tramos para que los vecinos puedan seguir entrando y saliendo.',
    },
    {
      pregunta: '¿Cada cuánto hay que repetirlo?',
      respuesta:
        'Depende del paso que tenga el suelo. En portales y locales con mucho tránsito conviene un mantenimiento periódico; en una vivienda el brillo dura bastante más.',
    },
    {
      pregunta: '¿Cómo pido presupuesto?',
      respuesta:
        'Mándanos unas fotos del suelo, los metros aproximados y la ubicación. Con eso te damos una primera valoración, y si hace falta lo vemos en persona antes de confirmar el precio.',
    },
  ],
  cta: {
    title: 'Cuéntanos qué suelo quieres recuperar',
    text: 'Con unas fotos, los metros aproximados y la ubicación te damos una valoración clara. Sin compromiso.',
  },
  whatsappUrl: WHATSAPP_QUOTE,
};

export default function AbrillantadoSuelosMadridPage() {
  return <ServicioExtraLanding {...content} />;
}

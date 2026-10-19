import ServicioExtraLanding from './ServicioExtraLanding';
import { buildServiceJsonLd } from '../../utils/serviceJsonLd';
import { buildWhatsAppUrl } from '../../utils/constants';
import { responsiveImage } from '../../utils/images';
import hero828 from '../../assets/servicios-extra/moqueta-828.webp';
import hero1280 from '../../assets/servicios-extra/moqueta-1280.webp';
import hero1536 from '../../assets/servicios-extra/moqueta-1536.webp';

const PATH = '/limpieza-moquetas-madrid';
const NAME = 'Limpieza y desinfección de moquetas en Madrid';

const WHATSAPP_QUOTE = buildWhatsAppUrl(
  'Hola, quiero un presupuesto para limpiar moqueta. Os envío fotos, los metros aproximados y la ubicación.',
);

// Variantes generadas con scripts/optimize-images.py
const heroImg = responsiveImage({ 828: hero828, 1280: hero1280, 1536: hero1536 }, 1536, 1024);

const jsonLd = buildServiceJsonLd({
  path: PATH,
  name: NAME,
  serviceType: 'Limpieza y desinfección de moquetas',
  description:
    'Limpieza a fondo y desinfección de moquetas y alfombras fijas en oficinas, hoteles, locales y viviendas de Madrid.',
  offers: [
    'Limpieza de moquetas en oficinas',
    'Limpieza de moquetas en hoteles y locales',
    'Limpieza de moquetas en viviendas',
    'Desinfección de moquetas',
  ],
});

const content = {
  seo: {
    title: 'Limpieza y desinfección de moquetas en Madrid | Kristalia',
    description:
      'Limpieza a fondo y desinfección de moquetas en oficinas, hoteles, locales y viviendas de Madrid. Eliminamos la suciedad incrustada y recuperamos el aspecto del tejido.',
    path: PATH,
    jsonLd,
  },
  breadcrumb: 'Limpieza de moquetas en Madrid',
  hero: {
    image: heroImg,
    alt: 'Moqueta gris limpia en un despacho de oficina con escritorio y estantería',
    title: 'Limpieza y desinfección de moquetas en Madrid',
    subtitle:
      'Limpieza a fondo de moquetas en oficinas, hoteles, locales y viviendas. Sacamos la suciedad que se queda entre las fibras, desinfectamos el tejido y recuperamos su aspecto.',
    subtitleShort:
      'Moquetas limpias y desinfectadas en oficinas, locales y viviendas. Puntual o con mantenimiento periódico.',
  },
  intro: {
    tag: 'Moquetas',
    title: 'La moqueta guarda más suciedad de la que se ve',
    paragraphs: [
      'Una moqueta puede parecer limpia y tener las fibras cargadas de polvo, tierra y restos que el aspirado diario no llega a sacar. Con el paso del tiempo aparecen los caminos de paso, las manchas y ese tono apagado que hace que todo el espacio parezca más viejo.',
      'Hacemos una limpieza en profundidad del tejido y una desinfección final, adaptada al tipo de moqueta y al uso que tiene. Organizamos el trabajo para molestar lo menos posible: en oficinas y locales, fuera del horario de actividad si lo necesitas.',
      'Puedes pedir una limpieza puntual o programar un mantenimiento cada cierto tiempo.',
    ],
    listTitle: 'Qué incluye',
    list: [
      {
        titulo: 'Limpieza en profundidad',
        texto: 'Eliminamos la suciedad incrustada entre las fibras, no solo la de la superficie.',
      },
      {
        titulo: 'Zonas de paso y manchas',
        texto: 'Tratamos los pasillos, entradas y puestos de trabajo, que son los que más se ensucian.',
      },
      {
        titulo: 'Desinfección del tejido',
        texto: 'Un acabado higiénico, especialmente indicado en espacios con mucho tránsito de personas.',
      },
    ],
  },
  espacios: {
    tag: 'Dónde trabajamos',
    title: 'Moquetas de oficinas, hoteles y viviendas',
    subtitle: 'Cada espacio tiene un uso distinto y lo tenemos en cuenta al planificar el trabajo.',
    items: [
      {
        titulo: 'Oficinas y despachos',
        texto: 'Puestos de trabajo, salas de reuniones y pasillos. Podemos trabajar por zonas o fuera del horario de oficina.',
      },
      {
        titulo: 'Hoteles y locales',
        texto: 'Habitaciones, pasillos, salones y zonas comunes donde la moqueta soporta un tránsito constante.',
      },
      {
        titulo: 'Viviendas',
        texto: 'Dormitorios y salones con moqueta, antes de entrar a vivir, después de una obra o como limpieza anual.',
      },
    ],
  },
  faqs: [
    {
      pregunta: '¿Hace falta mover los muebles?',
      respuesta:
        'Nos encargamos nosotros de apartar el mobiliario ligero para llegar a toda la superficie. Si hay muebles pesados o equipos que no se pueden mover, lo vemos contigo antes de empezar.',
    },
    {
      pregunta: '¿Podéis trabajar fuera del horario de oficina?',
      respuesta:
        'Sí. En oficinas y locales es lo más habitual, para que la actividad no se interrumpa y la moqueta tenga tiempo de secarse antes del día siguiente.',
    },
    {
      pregunta: '¿Cuánto tarda en secarse la moqueta?',
      respuesta:
        'Depende del tejido, de la ventilación y de la época del año, pero normalmente son unas horas. Te indicamos cuándo se puede volver a pisar con normalidad.',
    },
    {
      pregunta: '¿Cada cuánto conviene limpiar una moqueta?',
      respuesta:
        'En oficinas y locales con mucho paso suele recomendarse una o dos veces al año, además del aspirado habitual. En viviendas, una limpieza anual suele ser suficiente.',
    },
    {
      pregunta: '¿Cómo pido presupuesto?',
      respuesta:
        'Mándanos unas fotos, los metros aproximados de moqueta y la ubicación. Si la superficie es grande o tiene particularidades, la vemos antes para darte un precio ajustado.',
    },
  ],
  cta: {
    title: 'Cuéntanos qué moqueta necesitas limpiar',
    text: 'Con unas fotos, los metros aproximados y la ubicación te damos una valoración clara. Sin compromiso.',
  },
  whatsappUrl: WHATSAPP_QUOTE,
};

export default function LimpiezaMoquetasMadridPage() {
  return <ServicioExtraLanding {...content} />;
}

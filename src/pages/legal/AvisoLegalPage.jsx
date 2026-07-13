import { Link } from 'react-router-dom';
import LegalLayout from './LegalLayout';
import { EMAIL, PHONE_DISPLAY, LEGAL_INFO } from '../../utils/constants';

// El dominio se muestra sin protocolo (kristalia.es) a partir de la constante.
const WEBSITE_DISPLAY = LEGAL_INFO.website.replace(/^https?:\/\//, '');

export default function AvisoLegalPage() {
  return (
    <LegalLayout
      title="Aviso legal"
      seoTitle="Aviso legal | Kristalia"
      seoDescription="Información legal y condiciones de uso del sitio web de Kristalia."
      path="/aviso-legal"
      updated="julio de 2026"
    >
      <h2>1. Datos identificativos</h2>
      <p>
        En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de
        la Información y de Comercio Electrónico (LSSI-CE), se informa de los siguientes datos:
      </p>
      <p>
        Este sitio web es titularidad de <strong>{LEGAL_INFO.ownerName}</strong>, con NIF/NIE{' '}
        <strong>{LEGAL_INFO.taxId}</strong>, profesional autónomo que desarrolla su actividad
        bajo el nombre comercial <strong>{LEGAL_INFO.tradeName}</strong>.
      </p>
      <ul>
        <li><strong>Titular:</strong> {LEGAL_INFO.ownerName}</li>
        <li><strong>NIF/NIE:</strong> {LEGAL_INFO.taxId}</li>
        <li><strong>Nombre comercial:</strong> {LEGAL_INFO.tradeName}</li>
        <li><strong>Ubicación:</strong> {LEGAL_INFO.location}</li>
        <li><strong>Correo electrónico:</strong> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
        <li><strong>Teléfono:</strong> <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, '')}`}>{PHONE_DISPLAY}</a></li>
        <li>
          <strong>Sitio web:</strong>{' '}
          <a href={LEGAL_INFO.website} target="_blank" rel="noopener noreferrer">{WEBSITE_DISPLAY}</a>
        </li>
        <li><strong>Actividad:</strong> servicios profesionales de limpieza, especialmente de cristales, escaparates y superficies acristaladas</li>
      </ul>

      <h2>2. Objeto</h2>
      <p>
        El presente aviso legal regula el uso del sitio web {WEBSITE_DISPLAY}, cuya finalidad es
        informar sobre los servicios de limpieza profesional de cristales, escaparates y
        superficies acristaladas prestados por {LEGAL_INFO.ownerName} bajo el nombre comercial
        Kristalia, así como facilitar el contacto y la solicitud de presupuestos.
      </p>

      <h2>3. Condiciones de uso</h2>
      <p>
        El acceso a este sitio web es gratuito y atribuye la condición de usuario. El usuario
        se compromete a utilizar el sitio, sus contenidos y servicios de conformidad con la
        ley, el presente aviso legal, la buena fe y el orden público. Queda prohibido el uso
        del sitio con fines ilícitos o lesivos contra el titular del sitio o terceros.
      </p>

      <h2>4. Propiedad intelectual e industrial</h2>
      <p>
        Todos los contenidos del sitio web (textos, fotografías, logotipos, diseño y código)
        son titularidad del titular del sitio o de terceros que han autorizado su uso, y están
        protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su
        reproducción, distribución o transformación sin autorización expresa del titular.
      </p>

      <h2>5. Responsabilidad</h2>
      <p>
        El titular del sitio no se hace responsable de los daños que pudieran derivarse del uso
        indebido del sitio, ni de las interrupciones, virus o fallos técnicos ajenos a su control.
        La información con fines de presupuesto tiene carácter orientativo y está sujeta a
        confirmación profesional.
      </p>

      <h2>6. Enlaces externos</h2>
      <p>
        Este sitio puede incluir enlaces a plataformas o sitios de terceros (por ejemplo,
        WhatsApp). El titular no se responsabiliza de los contenidos, servicios ni políticas de
        privacidad de dichos sitios, cuyo acceso y uso corresponden exclusivamente al usuario.
      </p>

      <h2>7. Protección de datos</h2>
      <p>
        El responsable del tratamiento de los datos personales recabados a través de este sitio
        web es {LEGAL_INFO.ownerName}. Puedes consultar cómo se tratan y protegen tus datos, así
        como la forma de ejercer tus derechos, en la{' '}
        <Link to="/privacidad">Política de privacidad</Link>.
      </p>

      <h2>8. Legislación aplicable</h2>
      <p>
        El presente aviso legal se rige por la legislación española. Para la resolución de
        cualquier controversia, las partes se someten a los juzgados y tribunales del domicilio
        del titular, salvo que la normativa de consumo disponga otro fuero.
      </p>
    </LegalLayout>
  );
}

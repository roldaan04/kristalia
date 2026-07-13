import LegalLayout from './LegalLayout';
import { EMAIL, LEGAL_INFO } from '../../utils/constants';

export default function PrivacidadPage() {
  return (
    <LegalLayout
      title="Política de privacidad"
      seoTitle="Política de privacidad | Kristalia"
      seoDescription="Cómo se tratan y protegen tus datos personales conforme al RGPD y la LOPDGDD."
      path="/privacidad"
      updated="julio de 2026"
    >
      <p>
        La protección de tus datos personales es una prioridad. Esta política explica qué datos
        se recogen, con qué finalidad y qué derechos tienes, conforme al Reglamento (UE) 2016/679
        (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        {LEGAL_INFO.ownerName} es el responsable del tratamiento de los datos personales recogidos
        a través de esta web y desarrolla su actividad profesional bajo el nombre comercial
        {' '}{LEGAL_INFO.tradeName}.
      </p>
      <ul>
        <li><strong>Responsable:</strong> {LEGAL_INFO.ownerName}</li>
        <li><strong>NIF/NIE:</strong> {LEGAL_INFO.taxId}</li>
        <li><strong>Nombre comercial:</strong> {LEGAL_INFO.tradeName}</li>
        <li><strong>Ubicación:</strong> {LEGAL_INFO.location}</li>
        <li><strong>Correo electrónico:</strong> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
      </ul>

      <h2>2. Datos que tratamos</h2>
      <p>
        Tratamos los datos que nos facilitas voluntariamente al contactar con nosotros por
        teléfono, WhatsApp, correo electrónico o a través de los canales de contacto habilitados
        en el sitio: nombre, teléfono, correo electrónico, empresa (cuando proceda) y la
        información que incluyas en tu mensaje o en las fotografías que nos envíes para valorar el
        trabajo. No se recaban categorías especiales de datos ni se solicitan más datos de los
        necesarios para atender tu solicitud.
      </p>

      <h2>3. Finalidad</h2>
      <ul>
        <li>Atender tus consultas y solicitudes de información.</li>
        <li>Preparar, enviar y hacer seguimiento de presupuestos de nuestros servicios.</li>
        <li>Gestionar tus solicitudes de servicio y la prestación del servicio contratado.</li>
        <li>Mantener las comunicaciones relacionadas con la relación profesional.</li>
      </ul>

      <h2>4. Base jurídica</h2>
      <p>
        El tratamiento se basa en la aplicación de medidas precontractuales solicitadas por el
        propio interesado (por ejemplo, la elaboración de un presupuesto) y, cuando exista, en la
        ejecución de la relación contractual de servicio. El consentimiento se solicita únicamente
        cuando resulta realmente necesario, y podrás retirarlo en cualquier momento sin que ello
        afecte a la licitud del tratamiento previo.
      </p>

      <h2>5. Conservación</h2>
      <p>
        Conservaremos tus datos durante el tiempo necesario para atender tu solicitud y, si se
        formaliza una relación comercial, durante los plazos legalmente exigibles. Una vez
        cumplidas dichas finalidades, se suprimirán de forma segura.
      </p>

      <h2>6. Destinatarios</h2>
      <p>
        No cedemos tus datos a terceros salvo obligación legal. Los proveedores tecnológicos que
        dan soporte al sitio, como el alojamiento web, actúan como encargados del tratamiento
        conforme al RGPD y únicamente en la medida necesaria para prestar su servicio. El sitio
        carga tipografías desde Google Fonts, lo que puede implicar una conexión con servidores de
        Google que registra la dirección IP a efectos técnicos, sin fines de seguimiento.
      </p>
      {/* TODO (antes de producción): confirmar y, si procede, nombrar expresamente el proveedor
          de alojamiento (p. ej. Vercel) y formalizar el encargo de tratamiento correspondiente. */}

      <h2>7. Seguridad</h2>
      <p>
        Aplicamos las medidas técnicas y organizativas razonables para proteger tus datos
        personales y evitar su pérdida, alteración o acceso no autorizado, teniendo en cuenta el
        estado de la técnica y la naturaleza de los datos tratados.
      </p>

      <h2>8. Tus derechos</h2>
      <p>
        Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación
        y portabilidad escribiendo a <a href={`mailto:${EMAIL}`}>{EMAIL}</a>, indicando el
        derecho que deseas ejercer. También puedes reclamar ante la Agencia Española de
        Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>)
        si consideras que el tratamiento no se ajusta a la normativa.
      </p>
    </LegalLayout>
  );
}

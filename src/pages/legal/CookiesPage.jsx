import LegalLayout from './LegalLayout';
import { openConsentSettings } from '../../utils/consent';

export default function CookiesPage() {
  return (
    <LegalLayout
      title="Política de cookies"
      seoTitle="Política de cookies | Kristalia"
      seoDescription="Información sobre el uso de cookies y tecnologías similares en el sitio web de Kristalia."
      path="/cookies"
      updated="agosto de 2026"
    >
      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Una cookie es un pequeño archivo que se descarga en tu dispositivo al visitar
        determinadas páginas web y que permite almacenar y recuperar información sobre la
        navegación. Junto a las cookies, este sitio puede usar tecnologías similares
        (como el almacenamiento local del navegador) con las mismas finalidades.
      </p>

      <h2>2. Cookies que utiliza este sitio</h2>
      <p>Este sitio clasifica las cookies en las siguientes categorías:</p>
      <ul>
        <li>
          <strong>Necesarias (siempre activas).</strong> Imprescindibles para el
          funcionamiento del sitio y para recordar tu decisión sobre las cookies. No
          requieren consentimiento previo. Incluyen el almacenamiento de tus
          preferencias de consentimiento en tu propio dispositivo.
        </li>
        <li>
          <strong>Analítica (opcional).</strong> Utilizamos <strong>Google Analytics 4</strong>,
          gestionado a través de <strong>Google Tag Manager</strong>, para conocer de forma
          agregada cómo se usa la web (páginas más visitadas, procedencia del tráfico,
          etc.) y mejorarla. Estas cookies <strong>solo se activan si prestas tu
          consentimiento</strong>; mientras tanto permanecen desactivadas.
        </li>
        <li>
          <strong>Publicidad (opcional).</strong> Cookies de personalización publicitaria.
          Actualmente Kristalia <strong>no las utiliza</strong>; se mantienen desactivadas
          salvo que decidas activarlas.
        </li>
      </ul>
      <p>
        El sitio carga tipografías desde <strong>Google Fonts</strong>, lo que implica una
        conexión con servidores de Google que puede registrar la dirección IP a efectos
        técnicos. No se emplea con fines de seguimiento por parte de Kristalia.
      </p>

      <h2>3. Consentimiento: cómo se gestiona y cómo cambiarlo</h2>
      <p>
        La primera vez que visitas el sitio se muestra un aviso que te permite{' '}
        <strong>aceptar</strong>, <strong>rechazar</strong> o <strong>configurar</strong> las
        cookies opcionales. Aplicamos el modo de consentimiento de Google (Consent Mode):
        hasta que decides, la analítica y la publicidad permanecen desactivadas por defecto.
      </p>
      <p>
        Puedes <strong>cambiar o retirar tu consentimiento en cualquier momento</strong>,
        sin que ello afecte a la licitud del tratamiento previo, desde el siguiente botón:
      </p>
      <p>
        <button type="button" className="legal-inline-button" onClick={openConsentSettings}>
          Configurar cookies
        </button>
      </p>
      <p>
        También encontrarás el enlace «Configurar cookies» en el pie de página de todo el
        sitio.
      </p>

      <h2>4. Gestión de cookies desde el navegador</h2>
      <p>
        Además, puedes permitir, bloquear o eliminar las cookies instaladas en tu dispositivo
        mediante la configuración de tu navegador. Consulta la ayuda de tu navegador (Chrome,
        Firefox, Safari o Edge) para más detalles.
      </p>
    </LegalLayout>
  );
}

import LegalLayout from './LegalLayout';

export default function CookiesPage() {
  return (
    <LegalLayout
      title="Política de cookies"
      seoTitle="Política de cookies | Kristalia"
      seoDescription="Información sobre el uso de cookies y tecnologías similares en el sitio web de Kristalia."
      path="/cookies"
      updated="julio de 2026"
    >
      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Una cookie es un pequeño archivo que se descarga en tu dispositivo al visitar
        determinadas páginas web y que permite almacenar y recuperar información sobre la
        navegación.
      </p>

      <h2>2. Cookies que utiliza este sitio</h2>
      <p>
        Actualmente, kristalia.es <strong>no utiliza cookies de análisis, publicidad ni
        seguimiento</strong>. El sitio funciona con tecnologías estrictamente necesarias para su
        correcto funcionamiento y no requieren consentimiento previo.
      </p>
      <p>
        El sitio carga tipografías desde <strong>Google Fonts</strong>, lo que implica una
        conexión con servidores de Google que puede registrar la dirección IP a efectos
        técnicos. No se emplea con fines de seguimiento por parte de Kristalia.
      </p>

      <h2>3. Cookies futuras</h2>
      <p>
        Si en el futuro se incorporan herramientas de analítica (por ejemplo, Google Analytics)
        o de marketing, esta política se actualizará y se mostrará un banner de consentimiento
        que te permitirá aceptar, rechazar o configurar dichas cookies antes de su instalación.
      </p>

      <h2>4. Gestión de cookies desde el navegador</h2>
      <p>
        Puedes permitir, bloquear o eliminar las cookies instaladas en tu dispositivo mediante
        la configuración de tu navegador. Consulta la ayuda de tu navegador (Chrome, Firefox,
        Safari o Edge) para más detalles.
      </p>
    </LegalLayout>
  );
}

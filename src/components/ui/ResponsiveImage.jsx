/**
 * <img> con srcSet/sizes y dimensiones intrínsecas (evita saltos de diseño).
 *
 * - `priority`: solo para la imagen del hero (LCP). Carga inmediata con
 *   fetchPriority alta; React incluye además un <link rel="preload"> con su
 *   imagesrcset en el HTML prerenderizado.
 * - Sin `priority`: carga diferida nativa.
 *
 * No usa <picture> a propósito: React no precarga imágenes dentro de <picture>.
 */
export default function ResponsiveImage({ image, sizes, alt, className, priority = false }) {
  return (
    <img
      src={image.src}
      srcSet={image.srcSet}
      sizes={sizes}
      width={image.width}
      height={image.height}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
    />
  );
}

/**
 * Agrupa las variantes de una imagen (generadas con scripts/optimize-images.py)
 * en los atributos que necesita <ResponsiveImage>.
 *
 * @param {Record<number, string>} variants  { ancho: url importada }
 * @param {number} width   Ancho intrínseco de la variante mayor
 * @param {number} height  Alto intrínseco de la variante mayor
 */
export function responsiveImage(variants, width, height) {
  const widths = Object.keys(variants)
    .map(Number)
    .sort((a, b) => a - b);

  return {
    src: variants[widths[widths.length - 1]],
    srcSet: widths.map((w) => `${variants[w]} ${w}w`).join(', '),
    width,
    height,
  };
}

import tinycolor from "tinycolor2";

/**
 * Generates a palette of color shades from a base color.
 * Pure function, safe for SSR and client.
 * @param baseColor - The base color (hex, rgb, etc.)
 * @returns Record of CSS variable names to color values.
 */
export const generateColorShades = (baseColor: string): Record<string, string> => {
  const color = tinycolor(baseColor);

  return {
    "--color-primary-50": tinycolor.mix("white", color.clone(), 5).toHexString(),
    "--color-primary-60": tinycolor.mix("white", color.clone(), 10).toHexString(),
    "--color-primary-70": tinycolor.mix("white", color.clone(), 15).toHexString(),
    "--color-primary-80": tinycolor.mix("white", color.clone(), 20).toHexString(),
    "--color-primary-90": tinycolor.mix("white", color.clone(), 25).toHexString(),
    "--color-primary-anchor": tinycolor(color.clone()).lighten(35).saturate(15).toHexString(),
    "--color-primary-100": tinycolor.mix("white", color.clone(), 95).toHexString(),
    "--color-primary-150": tinycolor.mix("white", color.clone(), 90).toHexString(),
    "--color-primary-200": tinycolor.mix("white", color.clone(), 87).toHexString(),
    "--color-primary-300": tinycolor.mix("white", color.clone(), 75).toHexString(),
    "--color-primary-400": tinycolor.mix("white", color.clone(), 60).toHexString(),
    "--color-primary-500": color.toHexString(),
    "--color-primary-600": tinycolor.mix("black", color.clone(), 25).toHexString(),
    "--color-primary-700": tinycolor.mix("black", color.clone(), 40).toHexString(),
    "--color-primary-800": tinycolor.mix("black", color.clone(), 55).toHexString(),
    "--color-primary-900": tinycolor.mix("black", color.clone(), 70).toHexString(),
  };
};

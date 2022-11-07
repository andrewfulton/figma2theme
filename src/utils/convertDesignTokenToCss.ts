import { Shadow } from './types';

// Convert a shadow design token to a CSS box-shadow value
export const convertShadowsDesignTokenToCss = (shadows: Shadow[]): string => {
  const css = [];

  for (const { inset, offsetX, offsetY, blur, spread, color } of shadows) {
    css.push(
      `${inset ? `inset ` : ``}${offsetX} ${offsetY} ${blur} ${spread} ${color}`
    );
  }

  return css.join(`, `);
};

import { toCSS } from './toCSS';

export const strNode = function (
  name: string,
  value: Record<any, any>,
  depth = 0
): string {
  let cssString = '';
  for (let i = 0; i <= depth; ++i) {
    cssString += '  ';
  }
  cssString += name + ' {\n';
  cssString += toCSS(value, depth + 1);
  for (let i = 0; i <= depth; ++i) {
    cssString += '  ';
  }
  cssString += '}\n';
  return cssString;
};

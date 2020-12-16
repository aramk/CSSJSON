import { strAttr } from './strAttr';
import { strNode } from './strNode';

/**
 * @param node
 *            A JSON node.
 * @param depth
 *            The depth of the current node; used for indentation and
 *            optional.
 * @param breaks
 *            Whether to add line breaks in the output.
 */
export const toCSS = function (
  node: Record<any, any>,
  depth = 0,
  breaks = 0
): string {
  let cssString = '';
  if (node.attributes) {
    for (const i in node.attributes) {
      const att = node.attributes[i];
      if (att instanceof Array) {
        for (let j = 0; j < att.length; j++) {
          cssString += strAttr(i, att[j], depth);
        }
      } else {
        cssString += strAttr(i, att, depth);
      }
    }
  }
  if (node.children) {
    let first = true;
    for (const i in node.children) {
      if (breaks && !first) {
        cssString += '\n';
      } else {
        first = false;
      }
      cssString += strNode(i, node.children[i], depth);
    }
  }
  return cssString;
};

import { strAttr } from './strAttr';
import { strNode } from './strNode';
import { JSONNode } from './toJSON';

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
  node: JSONNode,
  depth = 0,
  breaks = 0
): string {
  let cssString = '';
  if (node.attributes) {
    for (const i in node.attributes) {
      const att = node.attributes[i];
      cssString += strAttr(i, att, depth);
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

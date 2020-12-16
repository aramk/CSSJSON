import { altX, commentX, lineAttrX } from './regex';
import { isEmpty } from './isEmpty';

const capComment = 1;
const capSelector = 2;
const capEnd = 3;
const capAttr = 4;

/**
 * Input is css string and current pos, returns JSON object
 *
 * @param cssString
 *            The CSS string.
 * @param args
 *            An optional argument object. ordered: Whether order of
 *            comments and other nodes should be kept in the output. This
 *            will return an object where all the keys are numbers and the
 *            values are objects containing "name" and "value" keys for each
 *            node. comments: Whether to capture comments. split: Whether to
 *            split each comma separated list of selectors.
 */
const defaultArgs = {
  ordered: false,
  comments: false,
  stripComments: false,
  split: false,
};

export interface cssAttributes {
  [attribute: string]: string
}

export interface children {
  [attribute: string]: {
    children: children,
    attributes: cssAttributes
  }
}

export interface output {
  children: children,
  attributes: cssAttributes
}

export const toJSON = function (
  cssString: string,
  args = defaultArgs
): output {
  const node: any = {
    children: {},
    attributes: {},
  };
  let match: any = null;
  let count = 0;

  if (args.stripComments) {
    args.comments = false;
    cssString = cssString.replace(commentX, '');
  }

  while ((match = altX.exec(cssString)) != null) {
    if (!isEmpty(match[capComment]) && args.comments) {
      // Comment
      node[count++] = match[capComment].trim();
    } else if (!isEmpty(match[capSelector])) {
      // New node, we recurse
      const name = match[capSelector].trim();
      // This will return when we encounter a closing brace
      const newNode = toJSON(cssString, args);
      if (args.ordered) {
        // Since we must use key as index to keep order and not
        // name, this will differentiate between a Rule Node and an
        // Attribute, since both contain a name and value pair.
        node[count++] = { name, value: newNode, type: 'rule' };
      } else {
        const bits = args.split ? name.split(',') : [name];
        for (const i in bits) {
          const sel = bits[i].trim();
          if (sel in node.children) {
            for (const att in newNode.attributes) {
              node.children[sel].attributes[att] = newNode.attributes[att];
            }
          } else {
            node.children[sel] = newNode;
          }
        }
      }
    } else if (!isEmpty(match[capEnd])) {
      // Node has finished
      return node;
    } else if (!isEmpty(match[capAttr])) {
      const line = match[capAttr].trim();
      const attr = lineAttrX.exec(line);
      if (attr) {
        // Attribute
        const name = attr[1].trim();
        const value = attr[2].trim();
        if (args.ordered) {
          node[count++] = { name, value, type: 'attr' };
        } else {
          if (name in node.attributes) {
            const currVal = node.attributes[name];
            if (!(currVal instanceof Array)) {
              node.attributes[name] = [currVal];
            }
            node.attributes[name].push(value);
          } else {
            node.attributes[name] = value;
          }
        }
      } else {
        // Semicolon terminated line
        node[count++] = line;
      }
    }
  }

  return node;
};

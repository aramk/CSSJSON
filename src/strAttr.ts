export const strAttr = (name: string, value: string, depth = 0): string => {
  let response = '';
  for (let i = 0; i <= depth; ++i) {
    response += '  ';
  }
  return response + name + ': ' + value + ';\n';
};

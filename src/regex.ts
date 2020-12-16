export const selX = /([^\s\;\{\}][^\;\{\}]*)\{/g;
export const endX = /\}/g;
export const lineX = /([^\;\{\}]*)\;/g;
export const commentX = /\/\*[\s\S]*?\*\//g;
export const lineAttrX = /([^\:]+):([^\;]*);/;

// This is used, a concatenation of all above. We use alternation to
// capture.
export const altX = /(\/\*[\s\S]*?\*\/)|([^\s\;\{\}][^\;\{\}]*(?=\{))|(\})|([^\;\{\}]+\;(?!\s*\*\/))/gim;

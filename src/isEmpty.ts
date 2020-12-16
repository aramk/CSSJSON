export const isEmpty = function (x: Record<any, any>): boolean {
  return typeof x == 'undefined' || x.length == 0 || x == null;
};

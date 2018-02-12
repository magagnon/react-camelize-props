import  snakeToCamel from './snakeToCamel';

const { keys } = Object;

const isArray = obj => obj instanceof Array;
const isObject = obj => (typeof obj === 'object') && !isArray(obj);

/* eslint-disable no-param-reassign */
const camelizeObjectAttrs = attrs => keys(attrs).reduce((result, key) => {
  if (isArray(attrs[key])) {
    result[snakeToCamel(key)] = attrs[key].map((item) => {
      if (isObject(item)) {
        return camelizeObjectAttrs(item);
      }
      return item;
    });
  } else {
    result[snakeToCamel(key)] = attrs[key] && isObject(attrs[key])
      ? camelizeObjectAttrs(attrs[key])
      : attrs[key];
  }
  return result;
}, {});
/* eslint-enable no-param-reassign */

export default camelizeObjectAttrs;

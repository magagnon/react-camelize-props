import  snakeToCamel from './snakeToCamel';

const { keys } = Object;

const isObject = obj => typeof obj === 'object' && !(obj instanceof Array)

/* eslint-disable no-param-reassign */
const camelizeObjectAttrs = attrs => keys(attrs).reduce((result, key) => {
  result[snakeToCamel(key)] = attrs[key] && isObject(attrs[key])
    ? camelizeObjectAttrs(attrs[key])
    : attrs[key];
  return result;
}, {});
/* eslint-enable no-param-reassign */

export default camelizeObjectAttrs;

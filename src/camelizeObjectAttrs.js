"use strict";

const snakeToCamel = require('./snakeToCamel');
const { keys } = Object;

/* eslint-disable no-param-reassign */
const camelizeObjectAttrs = attrs => keys(attrs).reduce((result, key) => {
  result[snakeToCamel(key)] = typeof attrs[key] === 'object'
    ? camelizeObjectAttrs(attrs[key])
    : attrs[key];
  return result;
}, {});
/* eslint-enable no-param-reassign */

module.exports = camelizeObjectAttrs;

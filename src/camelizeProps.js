"use strict";

const { createFactory } = require('react');
const camelizeObjectAttrs = require('./camelizeObjectAttrs');

const getDisplayName = WrappedComponent =>
  WrappedComponent.displayName || WrappedComponent.name || 'Component';

const camelizeProps = (WrappedComponent) => {
  const factory = createFactory(WrappedComponent);
  const Component = props => factory(camelizeObjectAttrs(props));
  Component.displayName = getDisplayName(WrappedComponent);
  return Component;
};

module.exports = camelizeProps;

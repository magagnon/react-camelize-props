# react-camelize-props
[![Build Status - Travis CI](https://travis-ci.org/willian/react-camelize-props.svg?branch=master)](https://travis-ci.org/willian/react-camelize-props)
[![Build Status - CircleCI](https://circleci.com/gh/willian/react-camelize-props.svg?style=svg)](https://circleci.com/gh/willian/react-camelize-props)

Sometimes you receive props from back-end with keys in snake_case, but you are
using a linter to check if you are calling object's keys in camelCase form. You
have two options: 1) ask the back-end to convert keys to camelCase before
sending to your client code; 2) Convert yourself before assigning props to your
own components.

`react-camelize-props` is a HOC to help us with this. It will read your
component's props, convert each key to camelCase and then reassign those props
back to your component.

## Getting started

```
yarn add react-camelize-props
```
or
```
npm install --save react-camelize-props
```

## Usage

```javascript
import React from 'react';
import camelizeProps from 'react-camelize-props';

const User = ({ firstName, lastName }) => (
  <div>{firstName} {lastName}</div>
);

export default normalizeProps(User);
```

# Normalize numbers

Normalize numbers to [0, 1].

## Install

    npm i normalize-number

## Usage

normalize([min, max], number);

```js
var normalize = require('normalize-number');

normalize([0, 5], 2.5); // => 0.5
```

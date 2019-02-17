const path = require('path');

module.exports = {
  "extends": "airbnb",
  "plugins": [
    "import",
    "react"
  ],
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jest": true
  },
  "parser": "babel-eslint",
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "react/no-array-index-key": 0,
    "camelcase": 0,
    "jsx-a11y/label-has-for": 0
  },
  "settings": {
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, 'src')],
      },
    },
  },
};

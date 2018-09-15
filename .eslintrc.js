module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaFeatures": {
        "experimentalObjectRestSpread": true,
        "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
     "react/jsx-filename-extension": [1, { "extensions": [".js"] }]
  }
};

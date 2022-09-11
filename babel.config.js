module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",  
    ["@babel/preset-react", {
      "runtime": "automatic"
    }],  //optional: react: this resolves react-files (jsx, tsx)
  ]
}
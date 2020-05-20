const css = require("css");

function addCSSRules(text) {
  let rules = [];
  var ast = css.parse(text);
  rules.push(...ast.stylesheet.rules);

  return rules;
}

module.exports = addCSSRules;


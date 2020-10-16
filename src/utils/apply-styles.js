const style = require("style-attr");

export default function applyStyles(node, styleString) {
  const styleObject = style.parse(styleString);
  Object.assign(node.style, styleObject);
}

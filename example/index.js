const asciifyPixel = require("../lib");

console.log(asciifyPixel({
    r: 255
  , g: 255
  , b: 255
  , a: 0.9
}, {
    pixels: " .;#@"
}));
// @

const asciifier = new asciifyPixel.Asciifier({
    pixels: " .#"
  , colored: false
});

console.log(asciifier.asciify({
    r: 255
  , g: 200
  , b: 100
}).toString());
// .

console.log(asciifier.asciify({
    r: 255
  , g: 0
  , b: 0
}, {
    // Override the colored option
    colored: true
}).toString());
// .

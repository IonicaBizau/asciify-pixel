# asciify-pixel [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/asciify-pixel.svg)](https://www.npmjs.com/package/asciify-pixel) [![Downloads](https://img.shields.io/npm/dt/asciify-pixel.svg)](https://www.npmjs.com/package/asciify-pixel) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Asciifies a pixel object.

## Installation

```sh
$ npm i --save asciify-pixel
```

## Example

```js
const asciifyPixel = require("asciify-pixel");

console.log(asciifyPixel({
    r: 255
  , g: 255
  , b: 255
  , a: 0.9
}, {
    pixels: " .;#@"
}));
// #

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
  , g: 255
  , b: 255
}, {
    // Override the colored option
    colored: true
}).toString());
// #
```

## Documentation

### `Asciifier(options)`
Asciifer
Creates a new instance of the `Asciifier` class.

#### Params
- **Object** `options`: An option that will override the defaults:
 - `pixels` (Array|String): An array or string containing the characters used for converting the pixels in strings (default: `" .,:;i1tfLCG08@"`).
 - `reverse` (Boolean): If `true`, the pixels will be reversed creating a *negative image* effect (default: `false`).
 - `colored` (Boolean): If `true`, the output will contain ANSI styles (default: `true`).
 - `bg` (Boolean): If `true`, the background color will be used for coloring (default: false).
 - `fg` (Boolean): If `true`, the foreground color will be used for coloring (default: true).

### `asciify(pixel, opts)`
Calculates the best character to be used for that specific pixel.

#### Params
- **Object** `pixel`: The pixel object:
 - `r` (Number): The red value.
 - `g` (Number): The green value.
 - `b` (Number): The blue value.
 - `a` (Number): The alpha value.
- **Object** `opts`: An object that will override the options fields.

#### Return
- **Object** An object containing:
 - `pixel` (Object): The pixel object.
 - `value` (Number): The sum of the rgb values multiplied by `alpha`.
 - `toString` (Function): Returns the character.
 - `char` (String): The character value.

### `asciifyPixel(pixel, options)`
Ascifiies a pixel.

#### Params
- **Object** `pixel`: An pixel object to pass to the `Asciifier` class.
- **Object** `options`: The options to pass to the `Asciifier` class.

#### Return
- **String** The asciified pixel.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
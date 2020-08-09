<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->


















# asciify-pixel

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Ask me anything](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/asciify-pixel.svg)](https://www.npmjs.com/package/asciify-pixel) [![Downloads](https://img.shields.io/npm/dt/asciify-pixel.svg)](https://www.npmjs.com/package/asciify-pixel) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

<a href="https://www.buymeacoffee.com/H96WwChMy" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee"></a>







> Asciifies a pixel object.

















## :cloud: Installation

```sh
# Using npm
npm install --save asciify-pixel

# Using yarn
yarn add asciify-pixel
```













## :clipboard: Example



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
```











## :question: Get Help

There are few ways to get help:



 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:





## :memo: Documentation


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
 - `white_bg` (Boolean): Turn on the white background for transparent pixels (default: `true`).
 - `px_background` (Object): An object containing the `r` (red), `g` (green) and `b` (blue) values of the custom background color.

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














## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects
I open-source almost everything I can, and I try to reply to everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:


 - Starring and sharing the projects you like :rocket:
 - [![Buy me a book][badge_amazon]][amazon]—I love books! I will remember you after years if you buy me one. :grin: :book:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)


Thanks! :heart:
















## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - `asciify-pixel-matrix`











## :scroll: License

[MIT][license] © [Ionică Bizău][website]






[license]: /LICENSE
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
[badge_patreon]: https://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: https://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: https://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: https://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW

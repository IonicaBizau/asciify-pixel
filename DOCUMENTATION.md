## Documentation

You can see below the API reference of this module.

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


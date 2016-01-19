"use strict";

const ul = require("ul")
    , couleurs = require("couleurs")()
    , deffy = require("deffy")
    ;

const DEFAULTS = {
    pixels: " .,:;i1tfLCG08@"
  , reverse: false
  , colored: true
};

class Asciifier {
    /**
     * Asciifer
     * Creates a new instance of the `Asciifier` class.
     *
     * @name Asciifier
     * @function
     * @param {Object} options An option that will override the defaults:
     *
     *  - `pixels` (Array|String): An array or string containing the characters used for converting the pixels in strings (default: `" .,:;i1tfLCG08@"`).
     *  - `reverse` (Boolean): If `true`, the pixels will be reversed creating a *negative image* effect (default: `false`).
     *  - `colored` (Boolean): If `true`, the output will contain ANSI styles (default: `true`).
     *
     */
    constructor (options) {
        this.options = ul.merge(options, DEFAULTS);
    }

    /**
     * asciify
     * Calculates the best character to be used for that specific pixel.
     *
     * @name asciify
     * @function
     * @param {Object} pixel The pixel object:
     *
     *  - `r` (Number): The red value.
     *  - `g` (Number): The green value.
     *  - `b` (Number): The blue value.
     *  - `a` (Number): The alpha value.
     *
     * @param {Object} opts An object that will override the options fields.
     * @return {Object} An object containing:
     *
     *  - `pixel` (Object): The pixel object.
     *  - `value` (Number): The sum of the rgb values multiplied by `alpha`.
     *  - `toString` (Function): Returns the character.
     *  - `char` (String): The character value.
     *
     */
    asciify (pixel, opts) {
        opts = ul.merge(opts, this.options);
        pixel.a = deffy(pixel.a, 1);

        // Handle alpha
        pixel.r *= pixel.a;
        pixel.g *= pixel.a;
        pixel.b *= pixel.a;

        if (typeof opts.pixels === "string") {
            opts.pixels = opts.pixels.split("");
        }

        let pxs = [].concat(opts.pixels);

        // Reverse pixels
        if (opts.reverse) {
            pxs.reverse();
        }

        let precision = 255 * 3 / (opts.pixels.length - 1)
          , value = pixel.r + pixel.g + pixel.b
          , strPx = null
          ;

        strPx = pxs[Math.round(value / precision)];

        // Colored
        if (opts.colored) {
            strPx = couleurs.fg(strPx, pixel.r, pixel.g, pixel.b);
        }

        return {
            toString: () => strPx
          , value: value
          , pixel: pixel
          , char: strPx
        };
    }
}

/**
 * asciifyPixel
 * Ascifiies a pixel.
 *
 * @name asciifyPixel
 * @function
 * @param {Object} pixel An pixel object to pass to the `Asciifier` class.
 * @param {Object} options The options to pass to the `Asciifier` class.
 * @return {String} The asciified pixel.
 */
function asciifyPixel(pixel, options) {
    return new Asciifier(options).asciify(pixel).toString();
}

asciifyPixel.Asciifier = Asciifier;

module.exports = asciifyPixel;

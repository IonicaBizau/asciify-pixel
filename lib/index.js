"use strict";

const ul = require("ul")
    , couleurs = require("couleurs")
    , deffy = require("deffy")
    , Pixel = require("pixel-class")
    , pixelBg = require("pixel-bg")
    , pixelWhiteBg = require("pixel-white-bg")
    ;

const DEFAULTS = {
    pixels: " .,:;i1tfLCG08@"
  , reverse: false
  , colored: true
  , bg: false
  , fg: true
  , white_bg: true
  , px_background: null
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
     *  - `bg` (Boolean): If `true`, the background color will be used for coloring (default: false).
     *  - `fg` (Boolean): If `true`, the foreground color will be used for coloring (default: true).
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
     *  - `reverse` (Boolean): Reverse the pixels. The result will be a *negative* image (default: `false`).
     *  - `bg` (Boolean): Enable background coloring (default: `false`).
     *  - `fg` (Boolean): Enable foreground coloring (default: `true`).
     *  - `colored` (Boolean): Enable both foreground and background coloring.
     *  - `white_bg` (Boolean): Turn on the white background for transparent pixels (default: `true`).
     *  - `px_background` (Object): An object containing the `r` (red), `g` (green) and `b` (blue) values of the custom background color.
     *
     */
    asciify (pixel, opts) {
        opts = ul.merge(opts, this.options);
        pixel = new Pixel(pixel);

        if (typeof opts.pixels === "string") {
            opts.pixels = opts.pixels.split("");
        }

        let pxs = [].concat(opts.pixels);

        // Reverse pixels
        if (opts.reverse) {
            pxs.reverse();
        }


        let value = pixel.intensity();

        if (opts.px_background) {
            pixel = pixelBg(pixel, opts.px_background);
            value = pixel.intensity();
        } else if (opts.white_bg) {
            pixel = pixelWhiteBg(pixel);
            value = pixel.intensity();
        }

        let precision = 255 * 3 / (opts.pixels.length - 1)
          , strPx = null
          , rawChar = null
          ;

        rawChar = pxs[Math.round(value / precision)];

        // Colored
        if (!opts.colored) {
            opts.fg = opts.bg = false;
        }

        strPx = rawChar;

        if (opts.fg) {
            strPx = couleurs.fg(strPx, pixel.r, pixel.g, pixel.b);
        }

        if (opts.bg) {
            strPx = couleurs.bg(strPx, pixel.r, pixel.g, pixel.b);
        }

        return {
            toString: () => strPx
          , value: value
          , pixel: pixel
          , char: rawChar
          , ansii: strPx
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

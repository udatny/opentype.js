export type TableData = {
    /**
     * - The data offset.
     */
    offset: number;
};
import Font from './font.mjs';
import Glyph from './glyph.mjs';
import Path from './path.mjs';
import BoundingBox from './bbox.mjs';
import parse from './parse.mjs';
/**
 * Parse the OpenType file data (as an ArrayBuffer) and return a Font object.
 * Throws an error if the font could not be parsed.
 * @param  {ArrayBuffer}
 * @param  {Object} opt - options for parsing
 * @return {opentype.Font}
 */
declare function parseBuffer(buffer: any, opt?: Object): opentype.Font;
/**
 * Asynchronously load the font from a URL or a filesystem. When done, call the callback
 * with two arguments `(err, font)`. The `err` will be null on success,
 * the `font` is a Font object.
 * We use the node.js callback convention so that
 * opentype.js can integrate with frameworks like async.js.
 * @alias opentype.load
 * @deprecated
 */
export function load(): void;
/**
 * Synchronously load the font from a URL or file.
 * When done, returns the font object or throws an error.
 * @alias opentype.loadSync
 * @deprecated
 */
export function loadSync(): void;
export { Font, Glyph, Path, BoundingBox, parse as _parse, parseBuffer as parse };

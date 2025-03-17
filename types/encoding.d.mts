export const cffStandardStrings: string[];
export const cffISOAdobeStrings: string[];
export const cffIExpertStrings: string[];
export const cffExpertSubsetStrings: string[];
export const cffStandardEncoding: string[];
export const cffExpertEncoding: string[];
export const standardNames: string[];
/**
 * This is the encoding used for fonts created from scratch.
 * It loops through all glyphs and finds the appropriate unicode value.
 * Since it's linear time, other encodings will be faster.
 * @exports opentype.DefaultEncoding
 * @class
 * @constructor
 * @param {opentype.Font}
 */
export function DefaultEncoding(font: any): void;
export class DefaultEncoding {
    /**
     * This is the encoding used for fonts created from scratch.
     * It loops through all glyphs and finds the appropriate unicode value.
     * Since it's linear time, other encodings will be faster.
     * @exports opentype.DefaultEncoding
     * @class
     * @constructor
     * @param {opentype.Font}
     */
    constructor(font: any);
    font: any;
    charToGlyphIndex(c: any): number | null;
}
/**
 * @exports opentype.CmapEncoding
 * @class
 * @constructor
 * @param {Object} cmap - a object with the cmap encoded data
 */
export function CmapEncoding(cmap: Object): void;
export class CmapEncoding {
    /**
     * @exports opentype.CmapEncoding
     * @class
     * @constructor
     * @param {Object} cmap - a object with the cmap encoded data
     */
    constructor(cmap: Object);
    cmap: Object;
    /**
     * @param  {string} c - the character
     * @return {number} The glyph index.
     */
    charToGlyphIndex(c: string): number;
}
/**
 * @exports opentype.CffEncoding
 * @class
 * @constructor
 * @param {string} encoding - The encoding
 * @param {Array} charset - The character set.
 */
export function CffEncoding(encoding: string, charset: any[]): void;
export class CffEncoding {
    /**
     * @exports opentype.CffEncoding
     * @class
     * @constructor
     * @param {string} encoding - The encoding
     * @param {Array} charset - The character set.
     */
    constructor(encoding: string, charset: any[]);
    encoding: string;
    charset: any[];
    /**
     * @param  {string} s - The character
     * @return {number} The index.
     */
    charToGlyphIndex(s: string): number;
}
/**
 * @exports opentype.GlyphNames
 * @class
 * @constructor
 * @param {Object} post
 */
export function GlyphNames(post: Object): void;
export class GlyphNames {
    /**
     * @exports opentype.GlyphNames
     * @class
     * @constructor
     * @param {Object} post
     */
    constructor(post: Object);
    names: any[];
    /**
     * Gets the index of a glyph by name.
     * @param  {string} name - The glyph name
     * @return {number} The index
     */
    nameToGlyphIndex(name: string): number;
    /**
     * @param  {number} gid
     * @return {string}
     */
    glyphIndexToName(gid: number): string;
}
/**
 * @alias opentype.addGlyphNames
 * @param {opentype.Font}
 * @param {Object}
 */
export function addGlyphNames(font: any, opt: any): void;

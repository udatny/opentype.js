declare namespace _default {
    export { GlyphSet };
    export { glyphLoader };
    export { ttfGlyphLoader };
    export { cffGlyphLoader };
}
export default _default;
/**
 * A GlyphSet represents all glyphs available in the font, but modelled using
 * a deferred glyph loader, for retrieving glyphs only once they are absolutely
 * necessary, to keep the memory footprint down.
 * @exports opentype.GlyphSet
 * @class
 * @param {opentype.Font}
 * @param {Array}
 */
declare function GlyphSet(font: any, glyphs: any): void;
declare class GlyphSet {
    /**
     * A GlyphSet represents all glyphs available in the font, but modelled using
     * a deferred glyph loader, for retrieving glyphs only once they are absolutely
     * necessary, to keep the memory footprint down.
     * @exports opentype.GlyphSet
     * @class
     * @param {opentype.Font}
     * @param {Array}
     */
    constructor(font: any, glyphs: any);
    font: any;
    glyphs: {};
    length: any;
    /**
     * @param  {number} index
     * @return {opentype.Glyph | undefined}
     */
    get(index: number): opentype.Glyph | undefined;
    /**
     * @param  {number} index
     * @param  {Object}
     */
    push(index: number, loader: any): void;
}
/**
 * @alias opentype.glyphLoader
 * @param  {opentype.Font} font
 * @param  {number} index
 * @return {opentype.Glyph}
 */
declare function glyphLoader(font: opentype.Font, index: number): opentype.Glyph;
/**
 * Generate a stub glyph that can be filled with all metadata *except*
 * the "points" and "path" properties, which must be loaded only once
 * the glyph's path is actually requested for text shaping.
 * @alias opentype.ttfGlyphLoader
 * @param  {opentype.Font} font
 * @param  {number} index
 * @param  {Function} parseGlyph
 * @param  {Object} data
 * @param  {number} position
 * @param  {Function} buildPath
 * @return {opentype.Glyph}
 */
declare function ttfGlyphLoader(font: opentype.Font, index: number, parseGlyph: Function, data: Object, position: number, buildPath: Function): opentype.Glyph;
/**
 * @alias opentype.cffGlyphLoader
 * @param  {opentype.Font} font
 * @param  {number} index
 * @param  {Function} parseCFFCharstring
 * @param  {string} charstring
 * @return {opentype.Glyph}
 */
declare function cffGlyphLoader(font: opentype.Font, index: number, parseCFFCharstring: Function, charstring: string, version: any): opentype.Glyph;

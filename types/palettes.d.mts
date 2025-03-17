/**
 * @exports opentype.PaletteManager
 * @class
 * @param {opentype.Font}
 */
export class PaletteManager {
    /**
     * @type {integer} CPAL color used to (pre)fill unset colors in a palette.
     * Format 0xBBGGRRAA
     */
    /**
     *
     * @param {opentype.Font} font
     */
    constructor(font: opentype.Font);
    /**
    * @type {integer} CPAL color used to (pre)fill unset colors in a palette.
    * Format 0xBBGGRRAA
    */
    defaultValue: integer;
    font: opentype.Font;
    /**
     * Returns the font's cpal table object if present
     * @returns {Object}
     */
    cpal(): Object;
    /**
     * Returns an array of arrays of color values for each palette, optionally in a specified color format
     * @param {string} colorFormat
     * @returns {Array<Array>}
     */
    getAll(colorFormat: string): Array<any[]>;
    /**
     * Converts a color value string or array of color value strings to CPAL integer color value(s)
     * @param {string|Array<string></string>} color
     * @returns {integer}
     */
    toCPALcolor(color: any): integer;
    /**
     * Fills a set of palette colors (from palette index, or a provided array of CPAL color values) with a set of colors, falling back to the default color value, until a given count
     * @param {Array<string>|integer} palette Palette index integer or Array of colors to be filled
     * @param {Array<string|integer>} colors Colors to fill the palette with
     * @param {integer} _colorCount Number of colors to fill the palette with, defaults to the value of the numPaletteEntries field. Used internally by extend() and shouldn't be set manually
     * @returns
     */
    fillPalette(palette: Array<string> | integer, colors?: Array<string | integer>, _colorCount?: integer): any;
    /**
     * Extend existing palettes and numPaletteEntries by a number of color slots
     * @param {integer} num number of additional color slots to add to all palettes
     */
    extend(num: integer): void;
    /**
     * Get a specific palette by its zero-based index
     * @param {integer} paletteIndex
     * @param {string} [colorFormat='hexa']
     * @returns {Array}
     */
    get(paletteIndex: integer, colorFormat?: string): any[];
    /**
     * Get a color from a specific palette by its zero-based index
     * @param {integer} index
     * @param {integer} paletteIndex
     * @param {string} [colorFormat ='hexa']
     * @returns
     */
    getColor(index: integer, paletteIndex?: integer, colorFormat?: string): any;
    /**
     * Set one or more colors on a specific palette by its zero-based index
     * @param {integer} index zero-based color index to start filling from
     * @param {string|integer|Array<string|integer>} color color value or array of color values
     * @param {integer} paletteIndex
     * @returns
     */
    setColor(index: integer, colors: any, paletteIndex?: integer): void;
    /**
     * Add a new palette.
     * @param {Array} colors (optional) colors to add to the palette, differences to existing palettes will be filled with the defaultValue.
     * @returns
     */
    add(colors: any[]): void;
    /**
     * deletes a palette by its zero-based index
     * @param {integer} paletteIndex
     */
    delete(paletteIndex: integer): void;
    /**
     * Deletes a specific color index in all palettes and updates all layers using that color with the replacement index
     * @param {integer} colorIndex index of the color that should be deleted
     * @param {integer} replacementIndex index (according to the palette before deletion) of the color to replace in layers using the color to be to deleted
     */
    deleteColor(colorIndex: integer, replacementIndex: integer): void;
    /**
     * Makes sure that the CPAL table exists and is populated with default values.
     * @param {Array} colors (optional) colors to populate on creation
     * @returns {Boolean} true if it was created, false if it already existed.
     */
    ensureCPAL(colors: any[]): boolean;
    /**
     * Mainly used internally. Recalculates the colorRecordIndices array based on the numPaletteEntries and number of palettes
     */
    updateIndices(): void;
}

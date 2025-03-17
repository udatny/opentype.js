export default Position;
/**
 * @exports opentype.Position
 * @class
 * @extends opentype.Layout
 * @param {opentype.Font}
 * @constructor
 */
declare function Position(font: any): void;
declare class Position {
    /**
     * @exports opentype.Position
     * @class
     * @extends opentype.Layout
     * @param {opentype.Font}
     * @constructor
     */
    constructor(font: any);
    /**
     * Init some data for faster and easier access later.
     */
    init(): void;
    defaultKerningTables: object[] | undefined;
    /**
     * Find a glyph pair in a list of lookup tables of type 2 and retrieve the xAdvance kerning value.
     *
     * @param {integer} leftIndex - left glyph index
     * @param {integer} rightIndex - right glyph index
     * @returns {integer}
     */
    getKerningValue(kerningLookups: any, leftIndex: integer, rightIndex: integer): integer;
    /**
     * List all kerning lookup tables.
     *
     * @param {string} [script='DFLT'] - use font.position.getDefaultScriptName() for a better default value
     * @param {string} [language='dflt']
     * @return {object[]} The list of kerning lookup tables (may be empty), or undefined if there is no GPOS table (and we should use the kern table)
     */
    getKerningTables(script?: string, language?: string): object[];
}

export class LayerManager {
    constructor(font: any);
    font: any;
    /**
     * Mainly used internally. Ensures that the COLR table exists and is populated with default values
     * @returns the LayerManager's font instance for chaining
     */
    ensureCOLR(): any;
    /**
     * Gets the layers for a specific glyph
     * @param {integer} glyphIndex
     * @returns {Array<Object>} array of layer objects {glyph, paletteIndex}
     */
    get(glyphIndex: integer): Array<Object>;
    /**
     * Adds one or more layers to a glyph, at the end or at a specific position.
     * @param {integer} glyphIndex glyph index to add the layer(s) to.
     * @param {Array|Object} layers layer object {glyph, paletteIndex}/{glyphID, paletteIndex} or array of layer objects.
     * @param {integer?} position position to insert the layers at (will default to adding at the end).
     */
    add(glyphIndex: integer, layers: any[] | Object, position: integer | null): void;
    /**
     * Sets a color glyph layer's paletteIndex property to a new index
     * @param {integer} glyphIndex glyph in the font by zero-based glyph index
     * @param {integer} layerIndex layer in the glyph by zero-based layer index
     * @param {integer} paletteIndex new color to set for the layer by zero-based index in any palette
     */
    setPaletteIndex(glyphIndex: integer, layerIndex: integer, paletteIndex: integer): void;
    /**
     * Removes one or more layers from a glyph.
     * @param {integer} glyphIndex glyph index to remove the layer(s) from
     * @param {integer} start index to remove the layer at
     * @param {integer?} end (optional) if provided, removes all layers from start index to (and including) end index
     */
    remove(glyphIndex: integer, start: integer, end?: integer | null): void;
    /**
     * Mainly used internally. Mainly used internally. Updates the colr table, adding a baseGlyphRecord if needed,
     * ensuring that it's inserted at the correct position, updating numLayers, and adjusting firstLayerIndex values
     * for all baseGlyphRecords according to any deletions or insertions.
     * @param {integer} glyphIndex
     * @param {Array<Object>} layers array of layer objects {glyphID, paletteIndex}
     */
    updateColrTable(glyphIndex: integer, layers: Array<Object>): void;
}

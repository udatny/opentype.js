export default Glyph;
export type GlyphOptions = {
    unicode?: number | undefined;
    unicodes?: any[] | undefined;
    xMin?: number | undefined;
    yMin?: number | undefined;
    xMax?: number | undefined;
    yMax?: number | undefined;
    advanceWidth?: number | undefined;
    leftSideBearing?: number | undefined;
};
/**
 * @typedef GlyphOptions
 * @type Object
 * @property {string} [name] - The glyph name
 * @property {number} [unicode]
 * @property {Array} [unicodes]
 * @property {number} [xMin]
 * @property {number} [yMin]
 * @property {number} [xMax]
 * @property {number} [yMax]
 * @property {number} [advanceWidth]
 * @property {number} [leftSideBearing]
 */
/**
 * @exports opentype.Glyph
 * @class
 * @param {GlyphOptions}
 * @constructor
 */
declare function Glyph(options: any): void;
declare class Glyph {
    /**
     * @typedef GlyphOptions
     * @type Object
     * @property {string} [name] - The glyph name
     * @property {number} [unicode]
     * @property {Array} [unicodes]
     * @property {number} [xMin]
     * @property {number} [yMin]
     * @property {number} [xMax]
     * @property {number} [yMax]
     * @property {number} [advanceWidth]
     * @property {number} [leftSideBearing]
     */
    /**
     * @exports opentype.Glyph
     * @class
     * @param {GlyphOptions}
     * @constructor
     */
    constructor(options: any);
    /**
     * @param  {GlyphOptions}
     */
    bindConstructorValues(options: any): void;
    index: any;
    name: any;
    unicode: any;
    unicodes: any;
    xMin: any;
    yMin: any;
    xMax: any;
    yMax: any;
    advanceWidth: any;
    leftSideBearing: any;
    points: any;
    /**
     * @param {number}
     */
    addUnicode(unicode: any): void;
    /**
     * Calculate the minimum bounding box for this glyph.
     * @return {opentype.BoundingBox}
     */
    getBoundingBox(): opentype.BoundingBox;
    /**
     * Convert the glyph to a Path we can draw on a drawing context.
     * @param  {number} [x=0] - Horizontal position of the beginning of the text.
     * @param  {number} [y=0] - Vertical position of the *baseline* of the text.
     * @param  {number} [fontSize=72] - Font size in pixels. We scale the glyph units by `1 / unitsPerEm * fontSize`.
     * @param  {GlyphRenderOptions=} options - xScale, yScale to stretch the glyph.
     * @param  {opentype.Font} font if hinting is to be used, or CPAL/COLR / variation needs to be rendered, the font
     * @return {opentype.Path}
     */
    getPath(x?: number, y?: number, fontSize?: number, options?: GlyphRenderOptions | undefined, font: opentype.Font): opentype.Path;
    /**
     *
     * @param {opentype.Font} font
     * @returns {Array}
     */
    getLayers(font: opentype.Font): any[];
    /**
     * @param {opentype.Font} font
     * @returns {import('./svgimages.mjs').SVGImage | undefined}
     */
    getSvgImage(font: opentype.Font): import("./svgimages.mjs").SVGImage | undefined;
    /**
     * Split the glyph into contours.
     * This function is here for backwards compatibility, and to
     * provide raw access to the TrueType glyph outlines.
     * @param {Array|null} [transformedPoints=null] Use the supplied transformed points from a glyph variation instead of the regular glyph points
     * @return {Array}
     */
    getContours(transformedPoints?: any[] | null): any[];
    /**
     * Calculate the xMin/yMin/xMax/yMax/lsb/rsb for a Glyph.
     * @return {Object}
     */
    getMetrics(): Object;
    /**
     * Draw the glyph on the given context.
     * @param  {CanvasRenderingContext2D} ctx - A 2D drawing context, like Canvas.
     * @param  {number} [x=0] - Horizontal position of the beginning of the text.
     * @param  {number} [y=0] - Vertical position of the *baseline* of the text.
     * @param  {number} [fontSize=72] - Font size in pixels. We scale the glyph units by `1 / unitsPerEm * fontSize`.
     * @param  {Object=} options - xScale, yScale to stretch the glyph.
     * @param  {opentype.Font} font - if hinting is to be used, or CPAL/COLR / variation needs to be rendered, the font
     */
    draw(ctx: CanvasRenderingContext2D, x?: number, y?: number, fontSize?: number, options?: Object | undefined, font: opentype.Font): void;
    /**
     * Draw the points of the glyph.
     * On-curve points will be drawn in blue, off-curve points will be drawn in red.
     * @param  {CanvasRenderingContext2D} ctx - A 2D drawing context, like Canvas.
     * @param  {number} [x=0] - Horizontal position of the beginning of the text.
     * @param  {number} [y=0] - Vertical position of the *baseline* of the text.
     * @param  {number} [fontSize=72] - Font size in pixels. We scale the glyph units by `1 / unitsPerEm * fontSize`.
     * @param  {GlyphRenderOptions=} options
     * @param  {opentype.Font} font - used to get the default render options, may be needed for variable fonts in the future
     */
    drawPoints(ctx: CanvasRenderingContext2D, x?: number, y?: number, fontSize?: number, options?: GlyphRenderOptions | undefined, font: opentype.Font): void;
    /**
     * Draw lines indicating important font measurements.
     * Black lines indicate the origin of the coordinate system (point 0,0).
     * Blue lines indicate the glyph bounding box.
     * Green line indicates the advance width of the glyph.
     * @param  {CanvasRenderingContext2D} ctx - A 2D drawing context, like Canvas.
     * @param  {number} [x=0] - Horizontal position of the beginning of the text.
     * @param  {number} [y=0] - Vertical position of the *baseline* of the text.
     * @param  {number} [fontSize=72] - Font size in pixels. We scale the glyph units by `1 / unitsPerEm * fontSize`.
     */
    drawMetrics(ctx: CanvasRenderingContext2D, x?: number, y?: number, fontSize?: number): void;
    /**
     * Convert the Glyph's Path to a string of path data instructions
     * @param  {object|number} [options={decimalPlaces:2, optimize:true, variation:undefined}] - Options object (or amount of decimal places for floating-point values for backwards compatibility)
     * @param  {opentype.Font} font - A font object is required if variation is to be applied in order to get the variation data from the tables
     * @return {string}
     * @see Path.toPathData
     */
    toPathData(options?: object | number, font: opentype.Font): string;
    /**
     * Sets the path data from an SVG path element or path notation
     * @param  {string|SVGPathElement}
     * @param  {object}
     */
    fromSVG(pathData: any, options?: {}): any;
    /**
     * Convert the Glyph's Path to an SVG <path> element, as a string.
     * @param  {object|number} [options={decimalPlaces:2, optimize:true, variation:undefined}] - Options object (or amount of decimal places for floating-point values for backwards compatibility)
     * @param  {opentype.Font} font - A font object is required if variation is to be applied in order to get the variation data from the tables
     * @return {string}
     */
    toSVG(options?: object | number, font: opentype.Font): string;
    /**
     * Convert the path to a DOM element.
     * @param  {object|number} [options={decimalPlaces:2, optimize:true, variation:undefined}] - Options object (or amount of decimal places for floating-point values for backwards compatibility)
     * @param  {opentype.Font} font - A font object is required if variation is to be applied in order to get the variation data from the tables
     * @return {SVGPathElement}
     */
    toDOMElement(options?: object | number, font: opentype.Font): SVGPathElement;
}

export class VariationManager {
    constructor(font: any);
    font: any;
    process: VariationProcessor;
    getTransform: (glyph: opentype.Glyph | number, coords: Object) => opentype.Glyph;
    /**
     * Tries to determine the default instance and sets its variation data as the font.defaultRenderOptions.
     * If not defaultInstance can be determined, the default coordinates of all axes are used.
     */
    activateDefaultVariation(): void;
    /**
     * Retrieves the default coordinates for the font's variation axes.
     * @returns {Object} An object mapping axis tags to their default values.
     */
    getDefaultCoordinates(): Object;
    /**
     * Gets the index of the default variation instance or -1 if not able to determine
     * @returns {integer} default index or -1
     */
    getDefaultInstanceIndex(): integer;
    /**
     * Retrieves the index of the variation instance matching the coordinates object or -1 if not able to determine
     * @param {integer|Object} coordinates An object where keys are axis tags and values are the corresponding variation values.
     * @returns {integer} The index of the matching instance or -1 if no match is found.
     */
    getInstanceIndex(coordinates: integer | Object): integer;
    /**
     * Retrieves a variation instance by its zero-based index
     * @param {integer} index - zero-based index of the variation instance
     * @returns {Object} - variation instance or null if the index is invalid.
     */
    getInstance(index: integer): Object;
    /**
     * Set the variation coordinates to use by default for rendering in the font.defaultRenderOptions
     * @param {integer|Object} instanceIdOrObject Either the zero-based index of a variation instance or an object with axis tags as keys and variation values as values
     */
    set(instanceIdOrObject: integer | Object): void;
    /**
     * Returns the variation coordinates currently set in the font.defaultRenderOptions
     * @returns {Object}
     */
    get(): Object;
    /**
     * Helper method that returns the font's avar table if present
     * @returns {Object|undefined}
     */
    avar(): Object | undefined;
    /**
     * Helper method that returns the font's cvar table if present
     * @returns {Object|undefined}
     */
    cvar(): Object | undefined;
    /**
     * Helper method that returns the font's fvar table if present
     * @returns {Object|undefined}
     */
    fvar(): Object | undefined;
    /**
     * Helper method that returns the font's gvar table if present
     * @returns {Object|undefined}
     */
    gvar(): Object | undefined;
    /**
     * Helper method that returns the font's hvar table if present
     * @returns {Object|undefined}
     */
    hvar(): Object | undefined;
}
import { VariationProcessor } from './variationprocessor.mjs';

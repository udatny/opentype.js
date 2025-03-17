/**
 * Part of the code of this class was based on
 * https://github.com/foliojs/fontkit/blob/a5fe0a1834241dbc6eb02beea3b7414c118c5ac9/src/glyph/GlyphVariationProcessor.js
 * Copyright (c) 2014 Devon Govett
 * MIT License
 */
export class VariationProcessor {
    constructor(font: any);
    font: any;
    /**
     * Modifies a coords object to make sure that tags have a length of 4
     * @param {Object} coords - variation coordinates
     */
    normalizeCoordTags(coords: Object): void;
    /**
     * Normalizes the coordinates from the axis ranges to a range of -1 to 1.
     * @param {Object} coords - The coordinates object to normalize.
     * @returns {Array<number>} The normalized coordinates as an array
     */
    getNormalizedCoords(coords: Object): Array<number>;
    /**
     * Interpolates points within a glyph if deltas are not provided for all points.
     * @param {Array<Object>} points - The points to be interpolated.
     * @param {Array<Object>} glyphPoints - Reference points from the glyph.
     * @param {Object} deltaMap - A map indicating which points have deltas.
     */
    interpolatePoints(points: Array<Object>, glyphPoints: Array<Object>, deltaMap: Object): void;
    /**
     * Interpolates delta values between two points.
     * @param {number} p1 - Start point index for interpolation.
     * @param {number} p2 - End point index for interpolation.
     * @param {number} ref1 - Reference point index for the start delta.
     * @param {number} ref2 - Reference point index for the end delta.
     * @param {Array<Object>} glyphPoints - Reference points from the glyph.
     * @param {Array<Object>} points - The points to be adjusted.
     */
    deltaInterpolate(p1: number, p2: number, ref1: number, ref2: number, glyphPoints: Array<Object>, points: Array<Object>): void;
    /**
     * Applies a delta shift to a range of points based on a reference point.
     * @param {number} p1 - Start point index for shifting.
     * @param {number} p2 - End point index for shifting.
     * @param {number} ref - Reference point index.
     * @param {Array<Object>} glyphPoints - Reference points from the glyph.
     * @param {Array<Object>} points - The points to be shifted.
     */
    deltaShift(p1: number, p2: number, ref: number, glyphPoints: Array<Object>, points: Array<Object>): void;
    /**
     * Transforms glyph components based on variation data.
     * @param {Glyph} glyph - The composite glyph to transform.
     * @param {Array<Object>} transformedPoints - Points that are already transformed.
     * @param {Object} coords - Variation coordinates.
     * @param {Array<number>} tuplePoints - Points that are part of the tuple.
     * @param {Object} header - Header information from the variation data.
     * @param {number} factor - The scaling factor for the transformation.
     */
    transformComponents(glyph: Glyph, transformedPoints: Array<Object>, coords: Object, tuplePoints: Array<number>, header: Object, factor: number): void;
    applyTupleVariationStore(variationData: any, points: any, coords: any, flavor?: string, args?: {}): any;
    /**
     * Retrieves a transformed copy of a glyph based on the provided variation coordinates, or the glyph itself if no variation was applied
     * @param {opentype.Glyph|number} glyph - Glyph or index of glyph to transform.
     * @param {Object} coords - Variation coords object (will fall back to variation coords in the defaultRenderOptions)
     * @returns {opentype.Glyph} - The transformed glyph.
     */
    getTransform(glyph: opentype.Glyph | number, coords: Object): opentype.Glyph;
    getCvarTransform(coords: any): any;
    /**
     * Calculates the variable adjustment for a glyph property from variation data.
     * @param {number} gid - Glyph ID.
     * @param {string} tableName - The name of the variation data table.
     * @param {string} parameter - The property to adjust.
     * @param {Object} coords - Variation coordinates.
     * @returns {number} - The calculated adjustment.
     */
    getVariableAdjustment(gid: number, tableName: string, parameter: string, coords: Object): number;
    /**
     * Retrieves the delta value from a variation store.
     * @param {Object} itemStore - The item variation store.
     * @param {number} outerIndex - The outer index in the variation subtables.
     * @param {number} innerIndex - The inner index in the delta sets.
     * @param {Object} coords - Variation coordinates.
     * @returns {number} - The delta value.
     */
    getDelta(itemStore: Object, outerIndex: number, innerIndex: number, coords: Object): number;
    /**
     * Calculates the blend vector for a set of variation coordinates.
     * @param {Object} itemStore - The item variation store.
     * @param {number} itemIndex - Index of the current item in the variation subtables.
     * @param {Object} coords - Variation coordinates.
     * @returns {Array<number>} - The blend vector for the given coordinates.
     */
    getBlendVector(itemStore: Object, itemIndex: number, coords: Object): Array<number>;
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
import Glyph from './glyph.mjs';

export default FeatureQuery;
export type SubstitutionAction = {
    /**
     * feature tag
     */
    tag: string;
    /**
     * substitution value(s)
     */
    substitution: any;
};
export type FQuery = {};
/**
 * Create feature query instance
 * @param {Font} font opentype font instance
 */
export function FeatureQuery(font: Font): void;
export class FeatureQuery {
    /**
     * Create feature query instance
     * @param {Font} font opentype font instance
     */
    constructor(font: Font);
    font: Font;
    features: {};
    /**
     * Get default script features indexes
     */
    getDefaultScriptFeaturesIndexes(): any;
    /**
     * Get feature indexes of a specific script
     * @param {string} scriptTag script tag
     */
    getScriptFeaturesIndexes(scriptTag: string): any;
    /**
     * Map a feature tag to a gsub feature
     * @param {any} features gsub features
     * @param {string} scriptTag script tag
     */
    mapTagsToFeatures(features: any, scriptTag: string): void;
    /**
     * Get features of a specific script
     * @param {string} scriptTag script tag
     */
    getScriptFeatures(scriptTag: string): any;
    /**
     * Get substitution type
     * @param {any} lookupTable lookup table
     * @param {any} subtable subtable
     */
    getSubstitutionType(lookupTable: any, subtable: any): any;
    /**
     * Get lookup method
     * @param {any} lookupTable lookup table
     * @param {any} subtable subtable
     */
    getLookupMethod(lookupTable: any, subtable: any): (glyphIndex: any) => any;
    /**
     * [ LOOKUP TYPES ]
     * -------------------------------
     * Single                        1;
     * Multiple                      2;
     * Alternate                     3;
     * Ligature                      4;
     * Context                       5;
     * ChainingContext               6;
     * ExtensionSubstitution         7;
     * ReverseChainingContext        8;
     * -------------------------------
     *
     */
    /**
     * @typedef FQuery
     * @type Object
     * @param {string} tag feature tag
     * @param {string} script feature script
     * @param {ContextParams} contextParams context params
     */
    /**
     * Lookup a feature using a query parameters
     * @param {FQuery} query feature query
     */
    lookupFeature(query: FQuery): any[] | Error | null;
    /**
     * Checks if a font supports a specific features
     * @param {FQuery} query feature query object
     */
    supports(query: FQuery): any;
    /**
     * Get lookup table subtables
     * @param {any} lookupTable lookup table
     */
    getLookupSubtables(lookupTable: any): any;
    /**
     * Get lookup table by index
     * @param {number} index lookup table index
     */
    getLookupByIndex(index: number): any;
    /**
     * Get lookup tables for a feature
     * @param {string} feature
     */
    getFeatureLookups(feature: string): any;
    /**
     * Query a feature by it's properties
     * @param {any} query an object that describes the properties of a query
     */
    getFeature(query: any): any;
}
/**
 * @typedef SubstitutionAction
 * @type Object
 * @property {number} id substitution type
 * @property {string} tag feature tag
 * @property {any} substitution substitution value(s)
 */
/**
 * Create a substitution action instance
 * @param {SubstitutionAction} action
 */
export function SubstitutionAction(action: SubstitutionAction): void;
export class SubstitutionAction {
    /**
     * @typedef SubstitutionAction
     * @type Object
     * @property {number} id substitution type
     * @property {string} tag feature tag
     * @property {any} substitution substitution value(s)
     */
    /**
     * Create a substitution action instance
     * @param {SubstitutionAction} action
     */
    constructor(action: SubstitutionAction);
    id: any;
    tag: any;
    substitution: any;
}

export default Substitution;
/**
 * @exports opentype.Substitution
 * @class
 * @extends opentype.Layout
 * @param {opentype.Font}
 * @constructor
 */
declare function Substitution(font: any): void;
declare class Substitution {
    /**
     * @exports opentype.Substitution
     * @class
     * @extends opentype.Layout
     * @param {opentype.Font}
     * @constructor
     */
    constructor(font: any);
    /**
     * Create a default GSUB table.
     * @return {Object} gsub - The GSUB table.
     */
    createDefaultTable(): Object;
    /**
     * List all single substitutions (lookup type 1) for a given script, language, and feature.
     * @param {string} [script='DFLT']
     * @param {string} [language='dflt']
     * @param {string} feature - 4-character feature name ('aalt', 'salt', 'ss01'...)
     * @return {Array} substitutions - The list of substitutions.
     */
    getSingle(feature: string, script?: string, language?: string): any[];
    /**
     * List all multiple substitutions (lookup type 2) for a given script, language, and feature.
     * @param {string} [script='DFLT']
     * @param {string} [language='dflt']
     * @param {string} feature - 4-character feature name ('ccmp', 'stch')
     * @return {Array} substitutions - The list of substitutions.
     */
    getMultiple(feature: string, script?: string, language?: string): any[];
    /**
     * List all alternates (lookup type 3) for a given script, language, and feature.
     * @param {string} [script='DFLT']
     * @param {string} [language='dflt']
     * @param {string} feature - 4-character feature name ('aalt', 'salt'...)
     * @return {Array} alternates - The list of alternates
     */
    getAlternates(feature: string, script?: string, language?: string): any[];
    /**
     * List all ligatures (lookup type 4) for a given script, language, and feature.
     * The result is an array of ligature objects like { sub: [ids], by: id }
     * @param {string} feature - 4-letter feature name ('liga', 'rlig', 'dlig'...)
     * @param {string} [script='DFLT']
     * @param {string} [language='dflt']
     * @return {Array} ligatures - The list of ligatures.
     */
    getLigatures(feature: string, script?: string, language?: string): any[];
    /**
     * Add or modify a single substitution (lookup type 1)
     * Format 2, more flexible, is always used.
     * @param {string} feature - 4-letter feature name ('liga', 'rlig', 'dlig'...)
     * @param {Object} substitution - { sub: id, by: id } (format 1 is not supported)
     * @param {string} [script='DFLT']
     * @param {string} [language='dflt']
     */
    addSingle(feature: string, substitution: Object, script?: string, language?: string): void;
    /**
     * Add or modify a multiple substitution (lookup type 2)
     * @param {string} feature - 4-letter feature name ('ccmp', 'stch')
     * @param {Object} substitution - { sub: id, by: [id] } for format 2.
     * @param {string} [script='DFLT']
     * @param {string} [language='dflt']
     */
    addMultiple(feature: string, substitution: Object, script?: string, language?: string): void;
    /**
     * Add or modify an alternate substitution (lookup type 3)
     * @param {string} feature - 4-letter feature name ('liga', 'rlig', 'dlig'...)
     * @param {Object} substitution - { sub: id, by: [ids] }
     * @param {string} [script='DFLT']
     * @param {string} [language='dflt']
     */
    addAlternate(feature: string, substitution: Object, script?: string, language?: string): void;
    /**
     * Add a ligature (lookup type 4)
     * Ligatures with more components must be stored ahead of those with fewer components in order to be found
     * @param {string} feature - 4-letter feature name ('liga', 'rlig', 'dlig'...)
     * @param {Object} ligature - { sub: [ids], by: id }
     * @param {string} [script='DFLT']
     * @param {string} [language='dflt']
     */
    addLigature(feature: string, ligature: Object, script?: string, language?: string): void;
    /**
     * List all feature data for a given script and language.
     * @param {string} feature - 4-letter feature name
     * @param {string} [script='DFLT']
     * @param {string} [language='dflt']
     * @return {Array} substitutions - The list of substitutions.
     */
    getFeature(feature: string, script?: string, language?: string): any[];
    /**
     * Add a substitution to a feature for a given script and language.
     * @param {string} feature - 4-letter feature name
     * @param {Object} sub - the substitution to add (an object like { sub: id or [ids], by: id or [ids] })
     * @param {string} [script='DFLT']
     * @param {string} [language='dflt']
     */
    add(feature: string, sub: Object, script?: string, language?: string): void;
}

export default Layout;
/**
 * @exports opentype.Layout
 * @class
 */
declare function Layout(font: any, tableName: any): void;
declare class Layout {
    /**
     * @exports opentype.Layout
     * @class
     */
    constructor(font: any, tableName: any);
    font: any;
    tableName: any;
    searchTag: typeof searchTag;
    binSearch: typeof binSearch;
    getTable: (create: boolean) => Object;
    getScriptNames: () => any[];
    getDefaultScriptName: () => any;
    getScriptTable: (script?: string, create: boolean) => Object;
    getLangSysTable: (script?: string, language?: string, create: boolean) => Object;
    getFeatureTable: (script?: string, language?: string, feature: string, create: boolean) => Object;
    getLookupTables: (script?: string, language?: string, feature: string, lookupType: number, create: boolean) => Object[];
    getGlyphClass: (classDefTable: object, glyphIndex: number) => number;
    getCoverageIndex: (coverageTable: object, glyphIndex: number) => number;
    expandCoverage: (coverageTable: Object) => any[];
}
declare function searchTag(arr: any, tag: any): number;
declare function binSearch(arr: any, value: any): number;

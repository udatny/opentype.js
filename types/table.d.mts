declare namespace _default {
    export { Table };
    export { Table as Record };
    export { Coverage };
    export { ClassDef };
    export { ScriptList };
    export { FeatureList };
    export { LookupList };
    export { ushortList };
    export { tableList };
    export { recordList };
}
export default _default;
/**
 * @exports opentype.Table
 * @class
 * @param {string} tableName
 * @param {Array} fields
 * @param {Object} options
 * @constructor
 */
declare function Table(tableName: string, fields: any[], options: Object): void;
declare class Table {
    /**
     * @exports opentype.Table
     * @class
     * @param {string} tableName
     * @param {Array} fields
     * @param {Object} options
     * @constructor
     */
    constructor(tableName: string, fields: any[], options: Object);
    tableName: string;
    fields: any[];
    /**
     * Encodes the table and returns an array of bytes
     * @return {Array}
     */
    encode(): any[];
    /**
     * Get the size of the table.
     * @return {number}
     */
    sizeOf(): number;
}
/**
 * @exports opentype.Coverage
 * @class
 * @param {opentype.Table}
 * @constructor
 * @extends opentype.Table
 */
declare function Coverage(coverageTable: any): void;
declare class Coverage {
    /**
     * @exports opentype.Coverage
     * @class
     * @param {opentype.Table}
     * @constructor
     * @extends opentype.Table
     */
    constructor(coverageTable: any);
}
/**
 * @exports opentype.ClassDef
 * @class
 * @param {opentype.Table}
 * @param {Object}
 * @constructor
 * @extends opentype.Table
 *
 * @see https://learn.microsoft.com/en-us/typography/opentype/spec/chapter2#class-definition-table
 */
declare function ClassDef(classDefTable: any): void;
declare class ClassDef {
    /**
     * @exports opentype.ClassDef
     * @class
     * @param {opentype.Table}
     * @param {Object}
     * @constructor
     * @extends opentype.Table
     *
     * @see https://learn.microsoft.com/en-us/typography/opentype/spec/chapter2#class-definition-table
     */
    constructor(classDefTable: any);
}
declare function ScriptList(scriptListTable: any): void;
declare class ScriptList {
    constructor(scriptListTable: any);
}
/**
 * @exports opentype.FeatureList
 * @class
 * @param {opentype.Table}
 * @constructor
 * @extends opentype.Table
 */
declare function FeatureList(featureListTable: any): void;
declare class FeatureList {
    /**
     * @exports opentype.FeatureList
     * @class
     * @param {opentype.Table}
     * @constructor
     * @extends opentype.Table
     */
    constructor(featureListTable: any);
}
/**
 * @exports opentype.LookupList
 * @class
 * @param {opentype.Table}
 * @param {Object}
 * @constructor
 * @extends opentype.Table
 */
declare function LookupList(lookupListTable: any, subtableMakers: any): void;
declare class LookupList {
    /**
     * @exports opentype.LookupList
     * @class
     * @param {opentype.Table}
     * @param {Object}
     * @constructor
     * @extends opentype.Table
     */
    constructor(lookupListTable: any, subtableMakers: any);
}
/**
 * @private
 */
declare function ushortList(itemName: any, list: any, count: any): any[];
/**
 * @private
 */
declare function tableList(itemName: any, records: any, itemCallback: any): any[];
/**
 * @private
 */
declare function recordList(itemName: any, records: any, itemCallback: any): {
    name: string;
    type: string;
    value: any;
}[];

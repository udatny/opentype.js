declare namespace _default {
    export { getByte };
    export { getByte as getCard8 };
    export { getUShort };
    export { getUShort as getCard16 };
    export { getShort };
    export { getUInt24 };
    export { getULong };
    export { getFixed };
    export { getTag };
    export { getOffset };
    export { getBytes };
    export { bytesToString };
    export { Parser };
}
export default _default;
declare function getByte(dataView: any, offset: any): any;
declare function getUShort(dataView: any, offset: any): any;
declare function getShort(dataView: any, offset: any): any;
declare function getUInt24(dataView: any, offset: any): any;
declare function getULong(dataView: any, offset: any): any;
declare function getFixed(dataView: any, offset: any): any;
declare function getTag(dataView: any, offset: any): string;
declare function getOffset(dataView: any, offset: any, offSize: any): number;
declare function getBytes(dataView: any, startOffset: any, endOffset: any): any[];
declare function bytesToString(bytes: any): string;
export function Parser(data: any, offset: any): void;
export class Parser {
    constructor(data: any, offset: any);
    data: any;
    offset: any;
    relativeOffset: number;
    parseByte(): any;
    parseChar(): any;
    parseCard8: any;
    parseUShort(): any;
    parseCard16: any;
    parseSID: any;
    parseOffset16: any;
    parseShort(): any;
    parseF2Dot14(): number;
    parseUInt24(): any;
    parseULong(): any;
    parseLong(): any;
    parseOffset32: any;
    parseFixed(): any;
    parseString(length: any): string;
    parseTag(): string;
    parseLongDateTime(): any;
    parseVersion(minorBase: any): any;
    skip(type: any, amount: any): void;
    parseULongList(count: any): any[];
    parseOffset16List: (count: any) => any[];
    parseUShortList(count: any): any[];
    parseShortList(count: any): any[];
    parseByteList(count: any): any[];
    /**
     * Parse a list of items.
     * Record count is optional, if omitted it is read from the stream.
     * itemCallback is one of the Parser methods.
     */
    parseList(count: any, itemCallback: any): any[];
    parseList32(count: any, itemCallback: any): any[];
    /**
     * Parse a list of records.
     * Record count is optional, if omitted it is read from the stream.
     * Example of recordDescription: { sequenceIndex: Parser.uShort, lookupListIndex: Parser.uShort }
     */
    parseRecordList(count: any, recordDescription: any): any[];
    parseRecordList32(count: any, recordDescription: any): any[];
    parseTupleRecords(tupleCount: any, axisCount: any): number[][];
    parseStruct(description: any): any;
    /**
     * Parse a GPOS valueRecord
     * https://docs.microsoft.com/en-us/typography/opentype/spec/gpos#value-record
     * valueFormat is optional, if omitted it is read from the stream.
     */
    parseValueRecord(valueFormat: any): {
        xPlacement: any;
        yPlacement: any;
        xAdvance: any;
        yAdvance: any;
        xPlaDevice: any;
        yPlaDevice: any;
        xAdvDevice: any;
        yAdvDevice: any;
    } | undefined;
    /**
     * Parse a list of GPOS valueRecords
     * https://docs.microsoft.com/en-us/typography/opentype/spec/gpos#value-record
     * valueFormat and valueCount are read from the stream.
     */
    parseValueRecordList(): any[];
    parsePointer(description: any): any;
    parsePointer32(description: any): any;
    /**
     * Parse a list of offsets to lists of 16-bit integers,
     * or a list of offsets to lists of offsets to any kind of items.
     * If itemCallback is not provided, a list of list of UShort is assumed.
     * If provided, itemCallback is called on each item and must parse the item.
     * See examples in tables/gsub.mjs
     */
    parseListOfLists(itemCallback: any): any[];
    parseCoverage(): {
        format: number;
        glyphs: any[];
        ranges?: undefined;
    } | {
        format: number;
        ranges: any[];
        glyphs?: undefined;
    };
    parseClassDef(): {
        format: number;
        startGlyph: any;
        classes: any[];
        ranges?: undefined;
    } | {
        format: number;
        ranges: any[];
        startGlyph?: undefined;
        classes?: undefined;
    } | {
        format: any;
        startGlyph?: undefined;
        classes?: undefined;
        ranges?: undefined;
    };
    parseScriptList(): any;
    parseFeatureList(): any;
    parseLookupList(lookupTableParsers: any): any;
    parseFeatureVariationsList(): any;
    parseVariationStore(): {
        itemVariationStore: {
            format: any;
            variationRegions: never[];
            itemVariationSubtables: never[];
        };
    };
    parseItemVariationStore(): {
        format: any;
        variationRegions: never[];
        itemVariationSubtables: never[];
    };
    parseVariationRegionList(): any[];
    parseItemVariationSubtable(): {
        regionIndexes: any[];
        deltaSets: never[][];
    };
    parseDeltaSetIndexMap(): {
        format: any;
        entryFormat: any;
        map?: undefined;
    } | {
        format: any;
        entryFormat: any;
        map: {
            outerIndex: number;
            innerIndex: number;
        }[];
    };
    parseDeltaSets(itemCount: any, wordDeltaCount: any, regionIndexCount: any): never[][];
    parseTupleVariationStoreList(axisCount: any, flavor: any, glyphs: any): {};
    parseTupleVariationStore(tableOffset: any, axisCount: any, flavor: any, glyphs: any, glyphIndex: any): {
        headers: {
            variationDataSize: any;
            peakTuple: number[] | undefined;
            intermediateStartTuple: number[] | undefined;
            intermediateEndTuple: number[] | undefined;
            flags: {
                embeddedPeakTuple: boolean;
                intermediateRegion: boolean;
                privatePointNumbers: boolean;
            };
        }[];
    };
    parseTupleVariationHeader(axisCount: any, flavor: any): {
        variationDataSize: any;
        peakTuple: number[] | undefined;
        intermediateStartTuple: number[] | undefined;
        intermediateEndTuple: number[] | undefined;
        flags: {
            embeddedPeakTuple: boolean;
            intermediateRegion: boolean;
            privatePointNumbers: boolean;
        };
    };
    parsePackedPointNumbers(): number[];
    parsePackedDeltas(expectedCount: any): any[];
}
export namespace Parser {
    function list(count: any, itemCallback: any): () => any;
    function list32(count: any, itemCallback: any): () => any;
    function recordList(count: any, recordDescription: any): () => any;
    function recordList32(count: any, recordDescription: any): () => any;
    function pointer(description: any): () => any;
    function pointer32(description: any): () => any;
    let tag: any;
    let byte: any;
    let uShort: any;
    let offset16: any;
    let uShortList: any;
    let uInt24: any;
    let uLong: any;
    let offset32: any;
    let uLongList: any;
    let fixed: any;
    let f2Dot14: any;
    let struct: any;
    let coverage: any;
    let classDef: any;
}

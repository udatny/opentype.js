/**
 * @private
 */
export const eightBitMacEncodings: {
    'x-mac-croatian': string;
    'x-mac-cyrillic': string;
    'x-mac-gaelic': string;
    'x-mac-greek': string;
    'x-mac-icelandic': string;
    'x-mac-inuit': string;
    'x-mac-ce': string;
    macintosh: string;
    'x-mac-romanian': string;
    'x-mac-turkish': string;
};
export namespace decode {
    /**
     * @param {DataView} data
     * @param {number} offset
     * @param {number} numBytes
     * @returns {string}
     */
    function UTF8(data: DataView, offset: number, numBytes: number): string;
    /**
     * @param {DataView} data
     * @param {number} offset
     * @param {number} numBytes
     * @returns {string}
     */
    function UTF16(data: DataView, offset: number, numBytes: number): string;
    /**
     * Decodes an old-style Macintosh string. Returns either a Unicode JavaScript
     * string, or 'undefined' if the encoding is unsupported. For example, we do
     * not support Chinese, Japanese or Korean because these would need large
     * mapping tables.
     * @param {DataView} dataView
     * @param {number} offset
     * @param {number} dataLength
     * @param {string} encoding
     * @returns {string}
     */
    function MACSTRING(dataView: DataView, offset: number, dataLength: number, encoding: string): string;
}
export namespace encode {
    /**
     * Convert an 8-bit unsigned integer to a list of 1 byte.
     * @param {number}
     * @returns {Array}
     */
    export function BYTE(v: any): any[];
    /**
     * Convert a 8-bit signed integer to a list of 1 byte.
     * @param {string}
     * @returns {Array}
     */
    export function CHAR(v: any): any[];
    /**
     * Convert an ASCII string to a list of bytes.
     * @param {string}
     * @returns {Array}
     */
    export function CHARARRAY(v: any): any[];
    /**
     * Convert a 16-bit unsigned integer to a list of 2 bytes.
     * @param {number}
     * @returns {Array}
     */
    export function USHORT(v: any): any[];
    /**
     * Convert a 16-bit signed integer to a list of 2 bytes.
     * @param {number}
     * @returns {Array}
     */
    export function SHORT(v: any): any[];
    /**
     * Convert a 24-bit unsigned integer to a list of 3 bytes.
     * @param {number}
     * @returns {Array}
     */
    export function UINT24(v: any): any[];
    /**
     * Convert a 32-bit unsigned integer to a list of 4 bytes.
     * @param {number}
     * @returns {Array}
     */
    export function ULONG(v: any): any[];
    /**
     * Convert a 32-bit unsigned integer to a list of 4 bytes.
     * @param {number}
     * @returns {Array}
     */
    export function LONG(v: any): any[];
    /**
     * Convert a 64-bit JavaScript float to a 32-bit signed fixed-point number (16.16)
     */
    export function FLOAT(v: any): any[];
    import FIXED = ULONG;
    export { FIXED };
    import FWORD = SHORT;
    export { FWORD };
    import UFWORD = USHORT;
    export { UFWORD };
    export function F2DOT14(v: any): any[];
    /**
     * Convert a 32-bit Apple Mac timestamp integer to a list of 8 bytes, 64-bit timestamp.
     * @param {number}
     * @returns {Array}
     */
    export function LONGDATETIME(v: any): any[];
    /**
     * Convert a 4-char tag to a list of 4 bytes.
     * @param {string}
     * @returns {Array}
     */
    export function TAG(v: any): any[];
    import Card8 = BYTE;
    export { Card8 };
    import Card16 = USHORT;
    export { Card16 };
    import OffSize = BYTE;
    export { OffSize };
    import SID = USHORT;
    export { SID };
    /**
     * Convert a numeric operand or charstring number to a variable-size list of bytes.
     * @param {number}
     * @returns {Array}
     */
    export function NUMBER(v: any): any[];
    /**
     * Convert a signed number between -32768 and +32767 to a three-byte value.
     * This ensures we always use three bytes, but is not the most compact format.
     * @param {number}
     * @returns {Array}
     */
    export function NUMBER16(v: any): any[];
    /**
     * Convert a signed number between -(2^31) and +(2^31-1) to a five-byte value.
     * This is useful if you want to be sure you always use four bytes,
     * at the expense of wasting a few bytes for smaller numbers.
     * @param {number}
     * @returns {Array}
     */
    export function NUMBER32(v: any): any[];
    /**
     * @param {number}
     * @returns {Array}
     */
    export function REAL(v: any): any[];
    import NAME = CHARARRAY;
    export { NAME };
    import STRING = CHARARRAY;
    export { STRING };
    /**
     * Convert a JavaScript string to UTF16-BE.
     * @param {string}
     * @returns {Array}
     */
    export function UTF16(v: any): any[];
    /**
     * Encodes an old-style Macintosh string. Returns a byte array upon success.
     * If the requested encoding is unsupported, or if the input string contains
     * a character that cannot be expressed in the encoding, the function returns
     * 'undefined'.
     * @param {string} str
     * @param {string} encoding
     * @returns {Array}
     */
    export function MACSTRING(str: string, encoding: string): any[];
    /**
     * Encode a list of variation adjustment deltas.
     *
     * Variation adjustment deltas are used in ‘gvar’ and ‘cvar’ tables.
     * They indicate how points (in ‘gvar’) or values (in ‘cvar’) get adjusted
     * when generating instances of variation fonts.
     *
     * @see https://www.microsoft.com/typography/otspec/gvar.htm
     * @see https://developer.apple.com/fonts/TrueType-Reference-Manual/RM06/Chap6gvar.html
     * @param {Array}
     * @return {Array}
     */
    export function VARDELTAS(deltas: any): any[];
    /**
     * @param {Array} l
     * @returns {Array}
     */
    export function INDEX(l: any[]): any[];
    /**
     * Convert an object to a CFF DICT structure.
     * The keys should be numeric.
     * The values should be objects containing name / type / value.
     * @param {Object} m
     * @returns {Array}
     */
    export function DICT(m: Object): any[];
    /**
     * @param {number}
     * @returns {Array}
     */
    export function OPERATOR(v: any): any[];
    /**
     * @param {Array} v
     * @param {string}
     * @returns {Array}
     */
    export function OPERAND(v: any[], type: any): any[];
    import OP = BYTE;
    export { OP };
    /**
     * Convert a list of CharString operations to bytes.
     * @param {Array}
     * @returns {Array}
     */
    export function CHARSTRING(ops: any): any[];
    /**
     * Convert an object containing name / type / value to bytes.
     * @param {Object}
     * @returns {Array}
     */
    export function OBJECT(v: any): any[];
    /**
     * Convert a table object to bytes.
     * A table contains a list of fields containing the metadata (name, type and default value).
     * The table itself has the field values set as attributes.
     * @param {opentype.Table}
     * @returns {Array}
     */
    export function TABLE(table: any): any[];
    import RECORD = TABLE;
    export { RECORD };
    export function LITERAL(v: any): any;
}
export namespace sizeOf {
    export let BYTE: number;
    export let CHAR: number;
    /**
     * @param {Array}
     * @returns {number}
     */
    export function CHARARRAY(v: any): number;
    export let USHORT: number;
    export let SHORT: number;
    export let UINT24: number;
    export let ULONG: number;
    export let LONG: number;
    import FLOAT = ULONG;
    export { FLOAT };
    import FIXED_1 = ULONG;
    export { FIXED_1 as FIXED };
    import FWORD_1 = SHORT;
    export { FWORD_1 as FWORD };
    import UFWORD_1 = USHORT;
    export { UFWORD_1 as UFWORD };
    import F2DOT14 = USHORT;
    export { F2DOT14 };
    export let LONGDATETIME: number;
    export let TAG: number;
    import Card8_1 = BYTE;
    export { Card8_1 as Card8 };
    import Card16_1 = USHORT;
    export { Card16_1 as Card16 };
    import OffSize_1 = BYTE;
    export { OffSize_1 as OffSize };
    import SID_1 = USHORT;
    export { SID_1 as SID };
    /**
     * @param {number}
     * @returns {number}
     */
    export function NUMBER(v: any): number;
    export let NUMBER16: number;
    export let NUMBER32: number;
    /**
     * @param {number}
     * @returns {number}
     */
    export function REAL(v: any): number;
    import NAME_1 = CHARARRAY;
    export { NAME_1 as NAME };
    import STRING_1 = CHARARRAY;
    export { STRING_1 as STRING };
    /**
     * @param {string}
     * @returns {number}
     */
    export function UTF16(v: any): number;
    /**
     * @param {string} str
     * @param {string} encoding
     * @returns {number}
     */
    export function MACSTRING(str: string, encoding: string): number;
    /**
     * @param {Array}
     * @returns {number}
     */
    export function INDEX(v: any): number;
    /**
     * @param {Object}
     * @returns {number}
     */
    export function DICT(m: any): number;
    import OP_1 = BYTE;
    export { OP_1 as OP };
    /**
     * @param {Array}
     * @returns {number}
     */
    export function CHARSTRING(ops: any): number;
    /**
     * @param {Object}
     * @returns {number}
     */
    export function OBJECT(v: any): number;
    /**
     * @param {opentype.Table}
     * @returns {number}
     */
    export function TABLE(table: any): number;
    import RECORD_1 = TABLE;
    export { RECORD_1 as RECORD };
    export function LITERAL(v: any): any;
}

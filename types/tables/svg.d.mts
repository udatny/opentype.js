declare namespace _default {
    export { makeSvgTable as make };
    export { parseSvgTable as parse };
}
export default _default;
export type SVGTable = Map<number, Uint8Array>;
/**
 * @param {SVGTable} svgTable
 * @returns {opentype.Table}
 */
declare function makeSvgTable(svgTable: SVGTable): opentype.Table;
/**
 * @typedef {Map<number, Uint8Array>} SVGTable
 */
/**
 * @param {DataView} data
 * @param {number} offset
 * @returns {SVGTable}
 */
declare function parseSvgTable(data: DataView, offset: number): SVGTable;

declare namespace _default {
    export { makeHvarTable as make };
    export { parseHvarTable as parse };
}
export default _default;
declare function makeHvarTable(): void;
declare function parseHvarTable(data: any, start: any): {
    version: any[];
    itemVariationStore: any;
    advanceWidth: any;
    lsb: any;
    rsb: any;
};

declare namespace _default {
    export { makeGvarTable as make };
    export { parseGvarTable as parse };
}
export default _default;
declare function makeGvarTable(): void;
declare function parseGvarTable(data: any, start: any, fvar: any, glyphs: any): {
    version: any[];
    sharedTuples: any;
    glyphVariations: {};
};

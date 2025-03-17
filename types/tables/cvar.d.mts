declare namespace _default {
    export { makeCvarTable as make };
    export { parseCvarTable as parse };
}
export default _default;
declare function makeCvarTable(): void;
declare function parseCvarTable(data: any, start: any, fvar: any, cvt: any): {
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
    version: any[];
};

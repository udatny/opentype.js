export default Hinting;
declare function Hinting(font: any): void;
declare class Hinting {
    constructor(font: any);
    font: any;
    getCommands: (hPoints: any) => any[];
    _fpgmState: State | undefined;
    _prepState: State | undefined;
    _errorState: number;
    exec(glyph: any, ppem: any): any;
}
declare function State(env: any, prog: any): void;
declare class State {
    constructor(env: any, prog: any);
    env: any;
    stack: any[];
    prog: any;
    zp0: number | undefined;
    zp1: number | undefined;
    zp2: number | undefined;
    rp0: number | undefined;
    rp1: number | undefined;
    rp2: number | undefined;
    fv: {
        x: number;
        y: number;
        axis: string;
        distance: (p1: any, p2: any, o1: any, o2: any) => number;
        interpolate: (p: any, rp1: any, rp2: any, pv: any) => void;
        normalSlope: number;
        setRelative: (p: any, rp: any, d: any, pv: any, org: any) => void;
        slope: number;
        touch: (p: any) => void;
        touched: (p: any) => any;
        untouch: (p: any) => void;
    } | undefined;
    pv: {
        x: number;
        y: number;
        axis: string;
        distance: (p1: any, p2: any, o1: any, o2: any) => number;
        interpolate: (p: any, rp1: any, rp2: any, pv: any) => void;
        normalSlope: number;
        setRelative: (p: any, rp: any, d: any, pv: any, org: any) => void;
        slope: number;
        touch: (p: any) => void;
        touched: (p: any) => any;
        untouch: (p: any) => void;
    } | undefined;
    dpv: {
        x: number;
        y: number;
        axis: string;
        distance: (p1: any, p2: any, o1: any, o2: any) => number;
        interpolate: (p: any, rp1: any, rp2: any, pv: any) => void;
        normalSlope: number;
        setRelative: (p: any, rp: any, d: any, pv: any, org: any) => void;
        slope: number;
        touch: (p: any) => void;
        touched: (p: any) => any;
        untouch: (p: any) => void;
    } | undefined;
    round: typeof roundToGrid | undefined;
}
declare function roundToGrid(v: any): number;

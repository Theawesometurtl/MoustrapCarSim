import { PIXEL_SCALAR } from "./constants";
export { cmToPixels };

const cmToPixels = (cm: number): number => {
    return cm*PIXEL_SCALAR;
};
import { ctx, canvas } from "../"
import { trackDistance } from "./draw";
import { coordinate, xydimension } from "./types";
export { RaceTrack}

class RaceTrack {
    static groundLevel: number;
    static startDimensions: xydimension = [50, 50];
    static endDimensions: xydimension  = [50, 50];
    static startPosition: number = 0;
    static endPosition: number = -50;
    constructor() {
    }


    draw() {
        ctx.fillStyle = "beige";
        ctx.fillRect(0, RaceTrack.groundLevel, canvas.width, canvas.height);
        ctx.fillStyle = "green";
        ctx.fillRect(0, RaceTrack.groundLevel-RaceTrack.endDimensions[1], RaceTrack.startDimensions[0], RaceTrack.startDimensions[1]);
        ctx.fillStyle = "red";
        ctx.fillRect(canvas.width + RaceTrack.endPosition, RaceTrack.groundLevel-RaceTrack.endDimensions[1], RaceTrack.endDimensions[0], RaceTrack.endDimensions[1]);
    }
    static cmToPixels(cm: number): number {
        let width
        let distance
        if (document.readyState === 'complete') {
            width = canvas.width;
            distance = Number(trackDistance.value);
        } else {
            width = 500
            distance = 500
        }
        let scalar = (width - this.startDimensions[0] - this.endDimensions[0]) / (distance * 100);
        return cm * scalar;
    };
}
import { ctx, canvas } from "./setUp"
export { RaceTrack}

class RaceTrack {
    static groundLevel: number;
    constructor() {
    }


    draw() {
        ctx.fillStyle = "beige";
        ctx.fillRect(0, RaceTrack.groundLevel, canvas.width, canvas.height);
    }
}
import { ctx, canvas } from "./setUp"
export { RaceTrack}

class RaceTrack {
    static groundLevel: number;
    constructor() {
    }


    draw() {
        ctx.fillStyle = "beige";
        ctx.fillRect(0, RaceTrack.groundLevel, canvas.width, canvas.height);
        ctx.fillStyle = "green";
        ctx.fillRect(0, RaceTrack.groundLevel-50, 50, 50);
        ctx.fillStyle = "red";
        ctx.fillRect(canvas.width - 200, RaceTrack.groundLevel-50, 50, 50);

    }
}
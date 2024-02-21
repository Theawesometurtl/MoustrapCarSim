import { coordinate } from "./types";
import { ctx } from "./setUp"
export {Wheel}


class Wheel {
    position: coordinate;
    radius: number;
    axleRadius: number;

    constructor(position: coordinate, radius: number, axleRadius: number) {
        this.position = position;
        this.radius = radius;
        this.axleRadius = axleRadius;
    }
    update(position: coordinate, radius: number) {
        this.position = position;
        this.radius = radius;
    }

    draw(colour: string = 'yellow', lineWidth: number = 0) {
        ctx.fillStyle = colour;
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(...this.position, this.radius, 0, 2 * Math.PI, false);
        ctx.fill();
    }
}

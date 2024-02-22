import { coordinate } from "./types";
import { ctx } from "../"
import { MousetrapCar } from "./mousetrapCar";
export {Wheel}


class Wheel {
    position: coordinate;
    radius: number;
    axleRadius: number;
    mousetrapCar: MousetrapCar

    constructor(position: coordinate, radius: number, axleRadius: number, mousetrapCar: MousetrapCar) {
        this.mousetrapCar = mousetrapCar;
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
        let pos = <[number, number]> this.mousetrapCar.rotate(this.position)
        ctx.beginPath();
        ctx.arc(...pos, this.radius, 0, 2 * Math.PI, false);
        ctx.fill();
    }
}

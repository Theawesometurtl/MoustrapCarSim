import { coordinate, xydimension } from "./types";
import { ctx } from "./setUp";
export {Chassis}

class Chassis {
    position: coordinate; //swivel position
    chassisDimensions: xydimension;

    constructor(position: coordinate, chassisLength: number) {
        this.position = position;
        this.chassisDimensions = [chassisLength, 10];
    }

    draw() {
        ctx.strokeStyle = 'black';
        // ctx.fillStyle = 'gray';
        // let axleCoords = this.chassisAxleCoords()
        // let pos1 = <[number, number]> 
        // let pos2 = <[number, number]> 
        // let pos3 = <[number, number]> 
        // let pos4 = <[number, number]> 
        // ctx.beginPath();
        // ctx.moveTo(...pos1);
        // ctx.lineTo(...pos2);
        // ctx.lineTo(...pos3);
        // ctx.lineTo(...pos4);
        // ctx.stroke();
        // ctx.fill();

    }

    chassisAxleCoords(frontWheelRadius: number, backWheelRadius: number): [coordinate, coordinate] {
        let wheelHeightDiff = backWheelRadius - frontWheelRadius;
        let xDisplacement = this.position[0] + this.chassisDimensions[0]**2 -wheelHeightDiff**2;
        return [[this.position[0] - xDisplacement, this.position[1]],[this.position[0] + xDisplacement, this.position[1] + wheelHeightDiff]]
    }
}

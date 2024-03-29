import { coordinate, xydimension } from "./types";
import { ctx } from "../";
import { MousetrapCar } from "./mousetrapCar";
export {Chassis}

class Chassis {
    position: coordinate; //swivel position
    chassisDimensions: xydimension;
    chassisAxleCoords: [coordinate, coordinate]
    frontWheelRadius: number;
    backWheelRadius: number;
    mousetrapCar: MousetrapCar

    constructor(position: coordinate, chassisLength: number, frontWheelRadius: number, backWheelRadius: number, mousetrapCar: MousetrapCar) {
        this.mousetrapCar = mousetrapCar;
        this.position = position;
        this.chassisDimensions = [chassisLength, 10];
        this.frontWheelRadius = frontWheelRadius;
        this.backWheelRadius = backWheelRadius;
        this.chassisAxleCoords = this.getChassisAxleCoords(backWheelRadius, frontWheelRadius);
    }

    update(position: coordinate, chassisLength: number, frontWheelRadius: number, backWheelRadius: number) {
        this.position = position;
        this.chassisDimensions = [chassisLength, chassisLength/50];
        this.frontWheelRadius = frontWheelRadius;
        this.backWheelRadius = backWheelRadius;
        this.chassisAxleCoords = this.getChassisAxleCoords(backWheelRadius, frontWheelRadius);
    }

    draw() {
        ctx.strokeStyle = 'gray';
        ctx.fillStyle = 'gray';
        let pos1 = <[number, number]> [this.chassisAxleCoords[0][0], this.chassisAxleCoords[0][1] + this.chassisDimensions[1]/2];
        let pos2 = <[number, number]> [this.chassisAxleCoords[0][0], this.chassisAxleCoords[0][1] - this.chassisDimensions[1]/2];
        let pos3 = <[number, number]> [this.chassisAxleCoords[1][0], this.chassisAxleCoords[1][1] - this.chassisDimensions[1]/2];
        let pos4 = <[number, number]> [this.chassisAxleCoords[1][0], this.chassisAxleCoords[1][1] + this.chassisDimensions[1]/2];
        pos1 = <[number, number]> this.mousetrapCar.rotate(pos1);
        pos2 = <[number, number]> this.mousetrapCar.rotate(pos2);
        pos3 = <[number, number]> this.mousetrapCar.rotate(pos3);
        pos4 = <[number, number]> this.mousetrapCar.rotate(pos4);
        ctx.beginPath();
        ctx.moveTo(...pos1);
        ctx.lineTo(...pos2);
        ctx.lineTo(...pos3);
        ctx.lineTo(...pos4);
        ctx.stroke();
        ctx.fill();

    }

    getChassisAxleCoords(backWheelRadius: number, frontWheelRadius: number): [coordinate, coordinate] {
        let wheelHeightDiff = backWheelRadius - frontWheelRadius;
        let xDisplacement = Math.sqrt((this.chassisDimensions[0]**2) - (wheelHeightDiff**2));
        return [[this.position[0] - xDisplacement/2, this.position[1]],[this.position[0] + xDisplacement/2, this.position[1] + wheelHeightDiff]]
    }
    getChassisAngle(backWheelRadius: number, frontWheelRadius: number) : number {
        let wheelHeightDiff = backWheelRadius - frontWheelRadius;
        let angle = Math.asin(wheelHeightDiff/ this.chassisDimensions[0]);
        return angle;
    }
}

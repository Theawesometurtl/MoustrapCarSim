import { coordinate, xydimension } from "./types";
import { ctx } from "../";
import { MousetrapCar } from "./mousetrapCar";
export {Arm}

class Arm {
    position: coordinate; //swivel position
    armDimensions: xydimension;
    armRotation: number;
    mousetrapCar: MousetrapCar

    constructor(position: coordinate, armLength: number, armRotation: number, mousetrapCar: MousetrapCar) {
        this.mousetrapCar = mousetrapCar;
        this.position = position;
        this.armDimensions = [armLength, 10];
        this.armRotation = armRotation; 
    }

    update(position: coordinate, armLength: number, armRotation: number) {
        this.position = position;
        this.armDimensions = [armLength, (armLength/2)**0.3];
        this.armRotation = armRotation; 
    }
    
    getStringAttachmentCoord(): coordinate {
        let cord = <[number, number]> [this.position[0] + Math.cos(this.armRotation) * this.armDimensions[0], this.position[1] + Math.sin(this.armRotation) * this.armDimensions[0]];
        return cord;
    }

    draw() {
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'gray';
        ctx.lineWidth = this.armDimensions[1]
        let pos1 = <[number, number]> [this.position[0] -(this.armDimensions[1]/2) * Math.cos(this.armRotation), this.position[1] -(this.armDimensions[1]/2) * Math.sin(this.armRotation)]
        let pos2 = <[number, number]> [this.position[0] +(this.armDimensions[1]/2) * Math.cos(this.armRotation), this.position[1] +(this.armDimensions[1]/2) * Math.sin(this.armRotation)]
        let pos3 = <[number, number]> [pos2[0] + Math.cos(this.armRotation) * this.armDimensions[0], pos2[1] + Math.sin(this.armRotation) * this.armDimensions[0]];
        let pos4 = <[number, number]> [pos1[0] + Math.cos(this.armRotation) * this.armDimensions[0], pos1[1] + Math.sin(this.armRotation) * this.armDimensions[0]];
        pos1 = <[number, number]> this.mousetrapCar.rotate(pos1);
        pos2 = <[number, number]> this.mousetrapCar.rotate(pos2);
        pos3 = <[number, number]> this.mousetrapCar.rotate(pos3);
        pos4 = <[number, number]> this.mousetrapCar.rotate(pos4);
        ctx.beginPath();
        ctx.moveTo(...pos1);
        ctx.lineTo(...pos2);
        ctx.lineTo(...pos3);
        ctx.lineTo(...pos4);
        ctx.fill();
        ctx.stroke();
        // console.log(pos1, pos2, pos3, pos4);
        // console.log(this.position, this.armRotation)
    }
}

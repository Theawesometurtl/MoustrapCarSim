import { coordinate, xydimension } from "./types";
import { ctx } from "./setUp";
export {Arm}

class Arm {
    position: coordinate; //swivel position
    armDimensions: xydimension;
    armRotation: number;

    constructor(position: coordinate, armLength: number, armRotation: number) {
        this.position = position;
        this.armDimensions = [armLength, 10];
        this.armRotation = armRotation; 
    }
    
    getStringAttachmentCoord(): coordinate {
        let cord = <[number, number]> [this.position[0] + Math.cos(this.armRotation) * this.armDimensions[0], this.position[1] + Math.sin(this.armRotation) * this.armDimensions[0]];
        return cord;
    }

    draw() {
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'gray';
        ctx.lineWidth = 5
        let pos1 = <[number, number]> [this.position[0] -(this.armDimensions[1]/2) * Math.cos(this.armRotation), this.position[1] -(this.armDimensions[1]/2) * Math.sin(this.armRotation)]
        let pos2 = <[number, number]> [this.position[0] +(this.armDimensions[1]/2) * Math.cos(this.armRotation), this.position[1] +(this.armDimensions[1]/2) * Math.sin(this.armRotation)]
        let pos3 = <[number, number]> [pos2[0] + Math.cos(this.armRotation) * this.armDimensions[0], pos2[1] + Math.sin(this.armRotation) * this.armDimensions[0]];
        let pos4 = <[number, number]> [pos1[0] + Math.cos(this.armRotation) * this.armDimensions[0], pos1[1] + Math.sin(this.armRotation) * this.armDimensions[0]];
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

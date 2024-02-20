import { coordinate, xydimension } from "./types"
import { Arm } from "./arm";
import { Wheel } from "./wheel";
import { ctx, canvas } from "./setUp";
export {MousetrapCar}


class MousetrapCar {
    frontWheel: Wheel;
    backWheel: Wheel;
    arm: Arm;
    chassisDimensions: xydimension; chassisPostion: coordinate;
    armLength: number; armAngle: number;
    mousetrapPosition: coordinate; mousetrapAngle: number;
    constructor() {
        this.chassisDimensions = [500, 50];
        this.chassisPostion = [300, 200];
        this.armLength = 0;
        this.armAngle = 0;
        this.mousetrapPosition = [...this.chassisPostion];
        this.mousetrapAngle = (180 + 45)*2*Math.PI/360;
        this.frontWheel = new Wheel([this.chassisPostion[0] - this.chassisDimensions[0]/2, this.chassisPostion[1]], 50, 0);
        this.backWheel = new Wheel([this.chassisPostion[0] + this.chassisDimensions[0]/2, this.chassisPostion[1]], 30, 0);
        this.arm = new Arm(this.mousetrapPosition, 300, this.mousetrapAngle);
      
    }
    update() {
    }
    draw(lineWidth: number = 5) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.arm.draw();
        this.backWheel.draw();
        this.frontWheel.draw();


        // drawWheel('red', frontWheelPosition, frontWheelRadius, lineWidth); // back wheel
        // drawWheel('red', backWheelPosition, backWheelRadius, lineWidth); // front wheel
        // ctx.fillStyle = 'yellow';
        // ctx.lineWidth = lineWidth;
        // ctx.strokeStyle = 'black';
        // ctx.fillRect(chassisPostion[0], chassisPostion[1], chassisDimensions[0], chassisDimensions[1]);//chassis
        // drawMousetrap(moustrapPosition, mousetrapAngle)
        // ctx.moveTo(chassisPostion[0], chassisPostion[1]);
    }
}
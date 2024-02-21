import { coordinate, xydimension } from "./types"
import { Arm } from "./arm";
import { Wheel } from "./wheel";
import { Chassis } from "./chassis";
import { ctx, canvas } from "./setUp";
export {MousetrapCar}


class MousetrapCar {
    frontWheel: Wheel;
    frontWheelRadius: number;
    backWheel: Wheel;
    backWheelRadius: number;
    arm: Arm;
    chassis: Chassis;
    chassisLength: number; chassisPostion: coordinate;
    armLength: number; armAngle: number;
    mousetrapPosition: coordinate; mousetrapAngle: number;
    
    constructor() {
        this.chassisLength = 500;
        this.chassisPostion = [300, 400];
        this.armLength = 0;
        this.armAngle = 0;
        this.mousetrapPosition = [...this.chassisPostion];
        this.mousetrapAngle = (180 + 45)*2*Math.PI/360;
        this.frontWheelRadius = 30
        this.backWheelRadius = 50
        this.frontWheel = new Wheel([this.chassisPostion[0] + this.chassisLength/2, this.chassisPostion[1] + this.backWheelRadius -this.frontWheelRadius], this.frontWheelRadius, 0);
        this.backWheel = new Wheel([this.chassisPostion[0] - this.chassisLength/2, this.chassisPostion[1]], this.backWheelRadius, 0);
        this.arm = new Arm(this.mousetrapPosition, 300, this.mousetrapAngle);
        this.chassis = new Chassis(this.chassisPostion, this.chassisLength,this.frontWheelRadius, this.backWheelRadius)
      
    }
    update() {
    }
    draw(lineWidth: number = 5) {
        this.arm.draw();
        this.backWheel.draw();
        this.frontWheel.draw();
        this.chassis.draw();
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(...this.arm.getStringAttachmentCoord())
        ctx.lineTo(...(this.chassis.getChassisAxleCoords(this.backWheelRadius, this.frontWheelRadius)[0]));
        ctx.stroke();

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
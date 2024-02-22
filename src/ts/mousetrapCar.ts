import { coordinate, xydimension } from "./types"
import { Arm } from "./arm";
import { Wheel } from "./wheel";
import { Chassis } from "./chassis";
import { ctx, canvas } from "../";
import { RaceTrack } from "./raceTrack";
export { MousetrapCar }


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
    mouseTrapCarAngle: number;
    
    constructor(chassisLength: number) {
        this.mouseTrapCarAngle = 0;
        this.chassisLength = RaceTrack.cmToPixels(chassisLength);
        this.chassisPostion = [300, 400];
        this.armLength = 0;
        this.armAngle = 0;
        this.mousetrapPosition = [...this.chassisPostion];
        this.mousetrapAngle = (180 + 45)*2*Math.PI/360;
        this.frontWheelRadius = 30
        this.backWheelRadius = 100
        this.frontWheel = new Wheel([this.chassisPostion[0] + this.chassisLength/2, this.chassisPostion[1] + this.backWheelRadius -this.frontWheelRadius], this.frontWheelRadius, 0, this);
        this.backWheel = new Wheel([this.chassisPostion[0] - this.chassisLength/2, this.chassisPostion[1]], this.backWheelRadius, 0, this);
        this.arm = new Arm(this.mousetrapPosition, 300, this.mousetrapAngle, this);
        this.chassis = new Chassis(this.chassisPostion, this.chassisLength,this.frontWheelRadius, this.backWheelRadius, this)
      
    }
    update(position: coordinate) {
        this.mousetrapPosition = [position[0], position[1] - (this.backWheelRadius)];
        this.frontWheel.update([this.mousetrapPosition[0] + this.chassisLength/2, this.mousetrapPosition[1] + this.backWheelRadius -this.frontWheelRadius], this.frontWheelRadius)
        this.backWheel.update([this.mousetrapPosition[0] - this.chassisLength/2, this.mousetrapPosition[1]], this.backWheelRadius);
        this.chassis.update(this.mousetrapPosition, this.chassisLength,this.frontWheelRadius, this.backWheelRadius);
        this.arm.update([position[0], position[1] - (this.frontWheelRadius + this.backWheelRadius)/2], this.armLength, this.mousetrapAngle + this.chassis.getChassisAngle(this.backWheelRadius, this.frontWheelRadius));
    }

    draw(lineWidth: number = 5) {
        this.arm.draw();
        this.backWheel.draw();
        this.frontWheel.draw();
        this.chassis.draw();


        ctx.lineWidth = 2;
        let pos1 = <[number, number]> this.rotate(this.arm.getStringAttachmentCoord())
        let pos2 = <[number, number]> this.rotate((this.chassis.getChassisAxleCoords(this.backWheelRadius, this.frontWheelRadius)[0]))
        ctx.beginPath();
        ctx.moveTo(...pos1);
        ctx.lineTo(...pos2);
        ctx.stroke();

    }

    rotate(coordinates: coordinate) {
        if (this.mousetrapAngle != 0) {     
            let x = coordinates[0];
            let y = coordinates[1];
            let cx = this.mousetrapPosition[0];
            let cy = this.mousetrapPosition[1];
            let cos = Math.cos(this.mouseTrapCarAngle);
            let sin = Math.sin(this.mouseTrapCarAngle);
            let nx = (cos * (x - cx)) + (sin * (y - cy)) + cx;
            let ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
            return [nx, ny];
        } else {
            return coordinates
        }
    }
}
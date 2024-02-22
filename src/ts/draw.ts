import { ctx, canvas } from "./setUp";
import { MousetrapCar } from "./mousetrapCar";
import { RaceTrack } from "./raceTrack";
import { cmToPixels } from "./cmToPixels";
import { PIXEL_SCALAR, PIXEL_SCALAR_STATIC } from "./constants";
export { main };

let mousetrapCar = new MousetrapCar(10);
let staticMousetrapCar = new MousetrapCar(10);
let raceTrack = new RaceTrack();
let raceTime = 100;

const totalMass = (<HTMLInputElement>document.getElementById('formTotalMass'));
const driveWheelDiameter = (<HTMLInputElement>document.getElementById('formDriveWheelDiameter'));
const axleDiameter = (<HTMLInputElement>document.getElementById('formAxleDiameter'));
const armLength = (<HTMLInputElement>document.getElementById('formArmLength'));
const frontWheelDiameter = (<HTMLInputElement>document.getElementById('formFrontWheelDiameter'));
const chassisLength = (<HTMLInputElement>document.getElementById('formChassisLength'));



function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    RaceTrack.groundLevel = canvas.height - 70;
    raceTrack.draw();
    mousetrapCar.armLength =                cmToPixels(Number(armLength.value))             ;
    mousetrapCar.chassisLength =            cmToPixels(Number(chassisLength.value))         ;
    mousetrapCar.frontWheelRadius =         cmToPixels(Number(frontWheelDiameter.value)/2)  ;
    mousetrapCar.backWheelRadius =          cmToPixels(Number(driveWheelDiameter.value)/2)  ; 
    mousetrapCar.mousetrapAngle += Math.PI/raceTime;
    mousetrapCar.update([mousetrapCar.mousetrapPosition[0] + (canvas.width-200)/raceTime, RaceTrack.groundLevel]);
    mousetrapCar.draw();

    staticMousetrapCar.armLength =          PIXEL_SCALAR_STATIC*(Number(armLength.value));
    staticMousetrapCar.chassisLength =      PIXEL_SCALAR_STATIC*(Number(chassisLength.value));
    staticMousetrapCar.frontWheelRadius =   PIXEL_SCALAR_STATIC*(Number(frontWheelDiameter.value)/2);
    staticMousetrapCar.backWheelRadius =    PIXEL_SCALAR_STATIC*(Number(driveWheelDiameter.value)/2); 
    staticMousetrapCar.mousetrapAngle += Math.PI/raceTime;
    staticMousetrapCar.update([canvas.width - staticMousetrapCar.chassisLength/2 -100, 300]);
    staticMousetrapCar.draw();
    if (mousetrapCar.mousetrapAngle > 2*Math.PI) {
        mousetrapCar.mousetrapAngle = Math.PI;
        mousetrapCar.update([mousetrapCar.chassisLength/2 + mousetrapCar.backWheelRadius, RaceTrack.groundLevel])
        staticMousetrapCar.mousetrapAngle = Math.PI;
    }
}

import { ctx, canvas } from "./setUp";
import { MousetrapCar } from "./mousetrapCar";
import { RaceTrack } from "./raceTrack";
import { cmToPixels } from "./cmToPixels";
export { main };

let mousetrapCar = new MousetrapCar(10);
let raceTrack = new RaceTrack();

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
    mousetrapCar.armLength = cmToPixels(Number(armLength.value));
    mousetrapCar.chassisLength = cmToPixels(Number(chassisLength.value));
    mousetrapCar.frontWheelRadius = cmToPixels(Number(frontWheelDiameter.value)/2);
    mousetrapCar.backWheelRadius = cmToPixels(Number(driveWheelDiameter.value)/2); 
    mousetrapCar.mousetrapAngle += 0.1;
    mousetrapCar.update([mousetrapCar.mousetrapPosition[0] + 10, RaceTrack.groundLevel]);
    mousetrapCar.draw();
    if (mousetrapCar.mousetrapAngle > 2*Math.PI) {
        mousetrapCar.mousetrapAngle = Math.PI;
        mousetrapCar.update([500, RaceTrack.groundLevel])
    }
}

import { ctx, canvas } from "../";
import { MousetrapCar } from "./mousetrapCar";
import { RaceTrack } from "./raceTrack";
import { DELAY_PER_FRAME, PIXEL_SCALAR, PIXEL_SCALAR_STATIC } from "./constants";
export { main };

let mousetrapCar = new MousetrapCar(10);
let staticMousetrapCar = new MousetrapCar(10);
let raceTrack = new RaceTrack();
let raceTime = 100;
let raceFrames = (raceTime * 1000) / DELAY_PER_FRAME
let flipHeight = 0;
let flip = false;

const totalMass = (<HTMLInputElement>document.getElementById('formTotalMass'));
const driveWheelDiameter = (<HTMLInputElement>document.getElementById('formDriveWheelDiameter'));
const axleDiameter = (<HTMLInputElement>document.getElementById('formAxleDiameter'));
const armLength = (<HTMLInputElement>document.getElementById('formArmLength'));
const frontWheelDiameter = (<HTMLInputElement>document.getElementById('formFrontWheelDiameter'));
const chassisLength = (<HTMLInputElement>document.getElementById('formChassisLength'));
export const trackDistance = (<HTMLInputElement>document.getElementById('formTrackDistance'));
const lapTime = (<HTMLInputElement>document.getElementById('formLapTime'));
const mouseTrapForce = (<HTMLInputElement>document.getElementById('formMousetrapForce'));



function main() {
    raceTime = Number(lapTime.value);
    raceFrames = (raceTime * 1000) / DELAY_PER_FRAME
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    RaceTrack.groundLevel = canvas.height - 70;
    
    staticMousetrapCar.armLength =          PIXEL_SCALAR_STATIC*(Number(armLength.value));
    staticMousetrapCar.chassisLength =      PIXEL_SCALAR_STATIC*(Number(chassisLength.value));
    staticMousetrapCar.frontWheelRadius =   PIXEL_SCALAR_STATIC*(Number(frontWheelDiameter.value)/2);
    staticMousetrapCar.backWheelRadius =    PIXEL_SCALAR_STATIC*(Number(driveWheelDiameter.value)/2); 
    staticMousetrapCar.mousetrapAngle += Math.PI/raceFrames;
    staticMousetrapCar.update([canvas.width - staticMousetrapCar.chassisLength/2 -100, 200]);
    staticMousetrapCar.draw();

    raceTrack.draw();
    mousetrapCar.armLength =                RaceTrack.cmToPixels(Number(armLength.value))             ;
    mousetrapCar.chassisLength =            RaceTrack.cmToPixels(Number(chassisLength.value))         ;
    mousetrapCar.frontWheelRadius =         RaceTrack.cmToPixels(Number(frontWheelDiameter.value)/2)  ;
    mousetrapCar.backWheelRadius =          RaceTrack.cmToPixels(Number(driveWheelDiameter.value)/2)  ; 
    mousetrapCar.mousetrapAngle += Math.PI/raceFrames;
    if (flip) {
        mousetrapCar.mouseTrapCarAngle+= 0.75
        mousetrapCar.update([mousetrapCar.mousetrapPosition[0] + (canvas.width+RaceTrack.endPosition)/raceFrames, RaceTrack.groundLevel - flipHeight]);
        flipHeight+=3;
    
    } else {
        mousetrapCar.update([mousetrapCar.mousetrapPosition[0] + (canvas.width+RaceTrack.endPosition)/raceFrames, RaceTrack.groundLevel]);
    }
    mousetrapCar.draw();

    if (mousetrapCar.mousetrapAngle > 2*Math.PI) {
        mousetrapCar.mousetrapAngle = Math.PI;
        mousetrapCar.update([mousetrapCar.chassisLength/2 + mousetrapCar.backWheelRadius, RaceTrack.groundLevel])
        staticMousetrapCar.mousetrapAngle = Math.PI;
        flipHeight = 0;
    }
}

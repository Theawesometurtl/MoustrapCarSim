import { ctx, canvas } from "./setUp"
import { MousetrapCar } from "./mousetrapCar" 
import { RaceTrack } from "./raceTrack";
export {main}

let mousetrapCar = new MousetrapCar();
let raceTrack = new RaceTrack();



function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    RaceTrack.groundLevel = canvas.height - 70;
    raceTrack.draw();
    mousetrapCar.chassisPostion = [100, RaceTrack.groundLevel];
    mousetrapCar.armLength = 50;
    mousetrapCar.mousetrapAngle += 0.1;
    mousetrapCar.draw();
    
}



function drawMousetrap(position: [number, number], trapAngle: number, scale: number = 20) {
    ctx.fillStyle = 'yellow';
    ctx.strokeStyle = '#ffffff';
    ctx.fillRect(...position, 15 * scale, 1* scale);
    ctx.lineWidth = 1 * scale;
    ctx.moveTo(...position);
    ctx.beginPath();
    ctx.lineTo(Math.cos(trapAngle), Math.sin(trapAngle));
}
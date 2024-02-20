import { ctx, canvas } from "./setUp"
import { MousetrapCar } from "./mousetrapCar" 
export {main}

let mousetrapCar = new MousetrapCar()


function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    mousetrapCar.chassisPostion = [100, 100];
    mousetrapCar.armLength = 50;
    mousetrapCar.mousetrapAngle += 0.1;
    mousetrapCar.draw();


    // drawWheel('red', frontWheelPosition, frontWheelRadius, lineWidth); // back wheel
    // drawWheel('red', backWheelPosition, backWheelRadius, lineWidth); // front wheel
    // ctx.fillStyle = 'yellow';
    // ctx.lineWidth = lineWidth;
    // ctx.strokeStyle = 'black';
    // ctx.fillRect(chassisPostion[0], chassisPostion[1], chassisDimensions[0], chassisDimensions[1]);//chassis
    // drawMousetrap(moustrapPosition, mousetrapAngle)
    // ctx.moveTo(chassisPostion[0], chassisPostion[1]);
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
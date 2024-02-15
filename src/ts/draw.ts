import { ctx, canvas } from "./setUp"
export {draw, drawWheel}

function draw(frontWheelPosition: number[], frontWheelRadius: number,
     backWheelPosition: number[], backWheelRadius: number, 
     chassisDimensions: number[], chassisPostion: number[],
     armDimensions: number[], armAngle: number,
     moustrapPosition: number[], mousetrapAngle: number,
      lineWidth: number = 5) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawWheel('red', frontWheelPosition, frontWheelRadius, lineWidth); // back wheel
    drawWheel('red', backWheelPosition, backWheelRadius, lineWidth); // front wheel
    ctx.fillStyle = 'yellow';
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = 'black';
    ctx.fillRect(chassisPostion[0], chassisPostion[1], chassisDimensions[0], chassisDimensions[1]);//chassis
    drawMousetrap(moustrapPosition, mousetrapAngle)
    ctx.moveTo(chassisPostion[0], chassisPostion[1]);
}

function drawWheel(colour: string, position: number[], radius: number, lineWidth: number) {
    ctx.fillStyle = colour;
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(position[0], position[1], radius, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
}

function drawMousetrap(position: number[], trapAngle: number, scale: number = 20) {
    ctx.fillStyle = 'yellow';
    ctx.strokeStyle = '#ffffff';
    ctx.fillRect(position[0], position[1], 15 * scale, 1* scale);
    ctx.lineWidth = 1 * scale;
    ctx.moveTo(position[0], position[1]);
    ctx.beginPath();
    ctx.lineTo(Math.cos(trapAngle), Math.sin(trapAngle));
}
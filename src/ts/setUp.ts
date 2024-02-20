import { main } from "./draw";
export {start, ctx, canvas};

const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth/1.3;
    canvas.height = window.innerHeight/1.3;

function start() {

    console.log('hello');
    



    let totalMass = (<HTMLInputElement>document.getElementById('formTotalMass')).value;
    let driveWheelDiameter = (<HTMLInputElement>document.getElementById('formDriveWheelDiameter')).value;
    let axleDiameter = (<HTMLInputElement>document.getElementById('formAxleDiameter')).value;
    let armLength = (<HTMLInputElement>document.getElementById('formArmLength')).value;




    setInterval(main, 1000);

}
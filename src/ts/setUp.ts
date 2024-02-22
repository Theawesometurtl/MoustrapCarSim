import { main } from "./draw";
export {start,};



function start() {
    
    



    let totalMass = (<HTMLInputElement>document.getElementById('formTotalMass')).value;
    let driveWheelDiameter = (<HTMLInputElement>document.getElementById('formDriveWheelDiameter')).value;
    let axleDiameter = (<HTMLInputElement>document.getElementById('formAxleDiameter')).value;
    let armLength = (<HTMLInputElement>document.getElementById('formArmLength')).value;




    setInterval(main, 40);

}
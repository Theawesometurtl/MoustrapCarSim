export {start, ctx, canvas};

const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

function start() {
    console.log('hello');
    



    let totalMass = (<HTMLInputElement>document.getElementById('formTotalMass')).value;
    let driveWheelDiameter = (<HTMLInputElement>document.getElementById('formDriveWheelDiameter')).value;
    let axleDiameter = (<HTMLInputElement>document.getElementById('formAxleDiameter')).value;
    let armLength = (<HTMLInputElement>document.getElementById('formArmLength')).value;


    function main() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = .5;
    }


    setInterval(main, 100);

}
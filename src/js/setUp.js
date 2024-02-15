export {start};

function start() {
    
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const scale = 7

    const errorMessage = document.getElementById('errorMessage');

    window.totalMass = document.getElementById('formTotalMass').value;
    window.driveWheelDiameter = document.getElementById('formDriveWheelDiameter').value;
    window.axleDiameter = document.getElementById('formAxleDiameter').value;
    window.armLength = document.getElementById('formArmLength').value;


    function main() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = .5;
    }


    setInterval(main, 100);

}
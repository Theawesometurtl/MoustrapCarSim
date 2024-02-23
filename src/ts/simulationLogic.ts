

export function simulate(friction: number, springTorque: number, 
    armLength: number, axleRadius: number, mass: number, 
    driveWheelRadius: number, driveWheelMass: number,
    gravity: number = 9.81, t1: number = 0): number {
    //time accelerating
t1;
//coefficient of friction
let cf = friction;
//gravity
let g = gravity;
//torque of spring
let Ts = springTorque;
//Length of arm
let L = armLength;
//radius of axle
let r = axleRadius;
//total mass
let Tm = mass;
//radius of drive wheel
let R = driveWheelRadius;
//mass of drive wheel
let m2 = driveWheelMass;

let Ffmax = cf * m2 * g

let a = ((2*(Ts/L)*r)-(cf*Tm*g*R))/(m2*R);

if (cf * g < a) {
    console.log("slip")
}
else {

    let d1 = 0.5*t1*(a);
    let d2 = (2*(t1*(a)**2))/(cf*g);

    let d = d1 + d2;
    return d; //in meters
}
}
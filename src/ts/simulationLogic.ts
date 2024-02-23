

export function simulate( 
    armLength: number, axleRadius: number, mass: number, 
    driveWheelRadius: number, driveWheelMass: number,
    gravity: number = 9.81, t1: number = 0.3, friction: number = 1, springTorque: number = 0.15,): [number, number] {
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
// let deceleration = -((t1*a)**2)/(d2*2)
console.log(t1, cf, g, Ts, L, r, Tm, R, m2)
console.log(a);

// if (cf * g < a) {
//     console.log("slip")
// }
// else {

    let d1 = 0.5*t1*(a);
    let d2 = (2*(t1*(a)**2))/(cf*g);

    let d = d1 + d2;

    let t2 = -(t1*a)
    console.log(t2)
    console.log((t1*a)**2 - (2*cf*g*(d-d1)))
    t2 += Math.sqrt((t1*a)**2 - (2*cf*g*(d-d1)))/(cf*g)
    console.log(t2)
    let totalTime = t1 + t2;

    console.log(t1, cf, t2, d, d1, d2, totalTime, a, Ffmax, m2, R, Ts);
    return [d, totalTime]; //in meters
}
// }
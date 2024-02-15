import { coordinate, xydimension } from "./types"

class Wheel {
    position: coordinate;
    radius: number;

    constructor(position: coordinate, radius: number) {
        this.position = position;
        this.radius = radius;
    }
}

class MousetrapCar {
    frontWheel: Wheel;
    backWheel: Wheel;
    chassisDimensions: xydimension; chassisPostion: coordinate;
    armDimensions: xydimension; armAngle: number;
    moustrapPosition: coordinate; mousetrapAngle: number;
    constructor() {
        this.frontWheel = new Wheel([0, 0], 0);
        this.backWheel = new Wheel([0, 0], 0);
        this.chassisDimensions = [0, 0];
        this.chassisPostion = [0, 0];
        this.armDimensions = [0, 0];
        this.armAngle = 0;
        this.moustrapPosition = [0, 0];
        this.mousetrapAngle = 0;
      
    }
    update() {
        this.frontWheelPosition
    }
}
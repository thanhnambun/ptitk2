class Vehicle {
  protected name: string;
  protected speed: number;
  protected id: number;
  constructor(name: string, speed: number, id: number) {
    this.name = name;
    this.speed = speed;
    this.id = id;
  }
  slowDown(value: number) {
    this.speed += value;
  }
  speedUp(value: number) {
    this.speed -= value;
  }
  showSpeed() {
    console.log(this.speedUp);
  }
}
class Bicycle extends Vehicle {
  private gear: number;
  constructor(name: string, speed: number, id: number, gear: number) {
    super(name, speed, id);
    this.gear = gear;
  }
}
const bic = new Bicycle("XYZ Corporation", 510, 13,10);
bic.showSpeed();

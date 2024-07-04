interface Door {
  getWidth(): number;
  getHeight(): number;
}

class WoodenDoor implements Door {
  width: number;
  height: number;
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }
}

class DoorFactory {
  static makeDoor(width, height): Door {
    return new WoodenDoor(width, height);
  }
}

let door = DoorFactory.makeDoor(10, 20);

console.log(door.getHeight());
console.log(door.getHeight());

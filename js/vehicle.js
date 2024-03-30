class Vehicle {
    start() {
        console.log("Vehicle is starting.");
    }

    stop() {
        console.log("Vehicle is stopping.");
    }
}

class Car extends Vehicle {
    accelerate() {
        console.log("Car is accelerating.");
    }

    brake() {
        console.log("Car is braking.");
    }
}

class Bike extends Vehicle {
    pedal() {
        console.log("Bike is pedaling.");
    }

    ringBell() {
        console.log("Bike is ringing bell.");
    }
}

class Truck extends Car {
    start() {
        console.log("Truck's engine is starting.");
    }

    stop() {
        console.log("Truck's engine is stopping.");
    }
}

class Sedan extends Car {
    start() {
        console.log("Sedan's engine is starting.");
    }

    stop() {
        console.log("Sedan's engine is stopping.");
    }
}

class SportBike extends Bike {
    wheelie() {
        console.log("SportBike is doing a wheelie.");
    }

    drift() {
        console.log("SportBike is drifting.");
    }
}

class Scooter extends Bike {
    cruise() {
        console.log("Scooter is cruising smoothly.");
    }

    park() {
        console.log("Scooter is parked.");
    }
}

const car = new Car();
car.start();
car.accelerate();

const truck = new Truck();
truck.start();
truck.accelerate();

const sportBike = new SportBike();
sportBike.start();
sportBike.pedal();
sportBike.wheelie();
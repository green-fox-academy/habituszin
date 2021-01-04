'use strict';

import { Car } from "./car";
import { Station } from "./station";

let station = new Station;
let car = new Car;

station.refill(car);

console.log(station);
console.log(car);


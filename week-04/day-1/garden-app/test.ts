'use strict';

import { Garden } from "./garden";

let myGarden = new Garden;

myGarden.plantFlower('yellow');
myGarden.plantFlower('blue');
myGarden.plantTree('purple');
myGarden.plantTree('orange');

myGarden.gardenStatus();

myGarden.wateredPlants(40);

myGarden.wateredPlants(70);

'use strict';

import { Carrier } from "./aircraft-carrier";
import { F16 } from "./f16";
import { F35 } from "./f35";

let carrierOne = new Carrier(2500, 1500);
let carrierTwo = new Carrier(1000, 5000);

carrierOne.addAircraft(new F35);
carrierOne.addAircraft(new F35);
carrierOne.addAircraft(new F35);
carrierOne.addAircraft(new F16);
carrierOne.addAircraft(new F16);

carrierOne.getStatus();

carrierOne.fill();

carrierOne.getStatus();

carrierOne.fightOtherCarrier(carrierTwo);

carrierTwo.getStatus();
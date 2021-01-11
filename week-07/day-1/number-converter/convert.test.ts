'use strict';

import * as test from 'tape';
import {calculator} from './convert';

test('Check working', t => {
  const actual = calculator(2,2,2,1,1);
  const expected = 51.6;

  t.equal(actual, expected);
  t.end();
})
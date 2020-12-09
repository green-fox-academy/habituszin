'use strict';
import * as test from 'tape';
import { Basket } from "./apple";

test('check string', t => {

  const basket = new Basket;

  let actual = basket.getApple();
  let expected = 'apple';

  t.equal(actual, expected);
  t.end();
});


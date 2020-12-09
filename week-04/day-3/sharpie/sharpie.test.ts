'use strict';

import * as test from "tape";
import { Sharpie } from "../../../week-03/day-3/sharpie/sharpie";

test('test get color', t => {
  let sharpie = new Sharpie('yellow', 5);

  let actual = sharpie.color;
  let extend = 'yellow';

  t.equal(actual, extend);
  t.end();
})

test('test inklevel', t => {
  let sharpie = new Sharpie('yellow', 5);

  let actual = sharpie.inklevel;
  let extend = 100;

  t.equal(actual, extend);
  t.end();
})

test('test use', t => {
  let sharpie = new Sharpie('yellow', 5);
  sharpie.use(80);
  let actual = sharpie.inklevel;
  let extend = 20;

  t.equal(actual, extend);
  t.end();
})

test('test use when input is null', t => {
  let sharpie = new Sharpie('yellow', 5);
  sharpie.use(null);
  let actual = sharpie.inklevel;
  let extend = 100;

  t.equal(actual, extend);
  t.end();
})

test('test use when input is undifined', t => {
  let sharpie = new Sharpie('yellow', 5);
  sharpie.use(undefined);
  let actual = sharpie.inklevel;
  let extend = 100;

  t.equal(actual, extend);
  t.end();
})
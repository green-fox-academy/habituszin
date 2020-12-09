'use strict';

import * as test from 'tape';
import { Animal } from "../../../week-03/day-3/animal/animal";

test('test get hunger', t => {
  let animal = new Animal;
  let actual = animal.hunger;
  let expected = 50;

  t.equal(actual, expected);
  t.end();
});

test('test get thirst', t => {
  let animal = new Animal;
  let actual = animal.thirst;
  let expected = 50;

  t.equal(actual, expected);
  t.end();
});

test('test eat', t => {
  let animal = new Animal;
  animal.eat();
  let actual = animal.hunger;
  let expected = 49;

  t.equal(actual, expected);
  t.end();
});

test('test drink', t => {
  let animal = new Animal;
  animal.drink();
  let actual = animal.thirst;
  let expected = 49;

  t.equal(actual, expected);
  t.end();
});

test('test drink', t => {
  let animal = new Animal;
  animal.play();
  let actual = animal.animalStatus();
  let expected = console.log(51) ; console.log(51);
  ;

  t.equal(actual, expected);
  t.end();
});
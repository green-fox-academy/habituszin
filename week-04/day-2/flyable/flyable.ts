'use strict';

export interface flyable {
  land(): void;
  fly(): void;
  takeOff(): void;
}
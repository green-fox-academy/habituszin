'use strict';

import { Reservationy } from "./reservationy ";

export class Reservation implements Reservationy {


  constructor() {
  }

  public getDowBooking(): string {
    let daysOfWeek: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
    let choosenDay: string = daysOfWeek[(Math.random() * 7).toFixed()];
    return choosenDay
  }

  public getCodeBooking(): string {
    let codaBase: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';    
    let finalCode: string = '';
    for (let i: number = 0; i < 8; i++) {
      finalCode += codaBase.charAt(Math.random() * codaBase.length)     
    }
    return finalCode;
  }

  public makeReservation(): void {
    console.log(`Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}.`);    
  }
}

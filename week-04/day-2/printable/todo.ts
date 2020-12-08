'use strict';

import { Printable } from "./printable";

export class Todo implements Printable {
  protected _task: string;
  protected _priority: string;
  protected _isDone: boolean;

  constructor() {

  }

  public printAllFields(): void {
    console.log(`Task: ${this._task} | Priority: ${this._priority} | Done: ${this._isDone}`);
  }
}
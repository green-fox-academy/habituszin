'use strict';

class PostIt {
  _backgroundColor: string;
  _text: string;
  _textColor: string;

  constructor(backgroundColor: string, text: string, textColor: string){
    this._backgroundColor = backgroundColor;
    this._text = text;
    this._textColor = textColor;
  }
}

let orange = new PostIt('blue', 'Idea 1', 'orange');
let pink = new PostIt('black', 'Awesome', 'pink');
let yeloow = new PostIt('green', 'Superb!', 'yellow');


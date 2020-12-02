'use strict';

class BlogPost {
  private _authorName: string;
  private _title: string;
  private _text: string;
  private _publicationDate: string;

  constructor(authorName: string, publicationDate: string, title?: string, text?:string) {
    this._authorName = authorName;
    this._publicationDate = publicationDate;
    this._title = title;
    this._text = text;
  };

  public set titleName(title: string) {
    this._title = title;
  };

  public set textContent(text: string) {
    this._text = text;
  };

  public blogPost(): void {
    console.log(`"${this._title}" tilted by ${this._authorName} post at ${this._publicationDate}\n ${this._text}`);

  };
}

let firstPost = new BlogPost('John Doe', '2000.05.04.');
firstPost.titleName = 'Lorem Ipsum'
firstPost.textContent = 'Lorem ipsum dolor sit amet.';

let secondPost = new BlogPost('Tim Urban', '2010.10.10.');
secondPost.titleName = 'Wait but why';
secondPost.textContent = 'A popular long-form, stick-figure-illustrated blog about almost everything.';

let thirdPost = new BlogPost('William Turton', '2017.03.28.');
thirdPost.titleName = 'One Engineer Is Trying to Get IBM to Reckon With Trump';
thirdPost.textContent = 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.';

firstPost.blogPost();
secondPost.blogPost();
thirdPost.blogPost();

'use strict';

import { BlogPost } from "../../day-3/blog-post/blog-post";

class Blog {
  private _listOfBlogPost: BlogPost[];

  constructor() {
    this._listOfBlogPost = [];
  }

  public addBlogPost(blogPost: BlogPost): void {
    this._listOfBlogPost.push(blogPost);
  }

  public delete(index: number): void {
    this._listOfBlogPost.splice(index, 1)
  }

}

let blog = new Blog;

let firstPost = new BlogPost('John Doe', '2000.05.04.');
firstPost.titleName = 'Lorem Ipsum'
firstPost.textContent = 'Lorem ipsum dolor sit amet.';

let secondPost = new BlogPost('Tim Urban', '2010.10.10.');
secondPost.titleName = 'Wait but why';
secondPost.textContent = 'A popular long-form, stick-figure-illustrated blog about almost everything.';

let thirdPost = new BlogPost('William Turton', '2017.03.28.');
thirdPost.titleName = 'One Engineer Is Trying to Get IBM to Reckon With Trump';
thirdPost.textContent = 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.';

blog.addBlogPost(firstPost);
blog.addBlogPost(secondPost);
blog.addBlogPost(thirdPost);

console.log(blog);

blog.delete(1);

console.log(blog);

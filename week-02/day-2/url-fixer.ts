'use strict';

// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crucial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

function repairUrl(url: string): string {
  let newUrl: string;
  newUrl = url.replace('bots', 'odds');
  newUrl = newUrl.replace('https', 'https:')
  return newUrl
}

console.log(repairUrl(url));
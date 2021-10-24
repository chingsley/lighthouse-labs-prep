import React from 'react'; //optional
import Tweet from './Tweet';

const tweets = [
  {
    avatar: 'https://i.imgur.com/73hZDYK.png',
    firstName: 'Isaac',
    lastName: 'Newton',
    handle: '@SirIsaac',
    body: 'If I have seen further it is by standing on the shoulders of giants',
    age: '10 days ago',
  },
  {
    avatar: 'https://i.imgur.com/nlhLi3I.png',
    firstName: 'Renne',
    lastName: 'Descartes',
    handle: '@rd',
    body: 'Je pense , donc je suis',
    age: '10 days ago',
  },
];

function TweetList() {
  return (
    <section className='tweets'>
      {tweets.map((tweet) => (
        <Tweet key={tweet.handle} tweet={tweet} />
      ))}
    </section>
  );
}

export default TweetList;

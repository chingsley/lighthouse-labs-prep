import React from 'react';

export default function Tweet({ tweet }) {
  const { avatar, lastName, handle, body, age } = tweet;
  return (
    <article className='tweet'>
      <header className='tweet--header'>
        <img className='tweet--avatar' src={avatar} alt='tweet-avatar' />
        <h2 className='tweet--name'>{lastName}</h2>
        <small className='tweet--handle'>{handle}</small>
      </header>

      <div className='tweet--body'>
        <p>{body}</p>
      </div>

      <footer className='tweet--footer'>
        <small className='footer--age'>
          {age}
          <small>
            <span className='footer--actions'>
              <a href='#'>
                <i className='fa fa-flag'></i>
              </a>
              <a href='#'>
                <i className='fa fa-retweet'></i>
              </a>
              <a href='#'>
                <i className='fa fa-heart'></i>
              </a>
              '
            </span>
          </small>
        </small>
      </footer>
    </article>
  );
}

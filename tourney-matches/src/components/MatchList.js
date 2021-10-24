import React from 'react';
import Match from './Match';

export default function MatchList({ matchData }) {
  const parsedMatches = matchData.map((match) => (
    <Match key={match.matchNumber} {...match} />
  ));

  return (
    <section className='PlayerList MatchList'>
      <h1>Match list</h1>
      {parsedMatches}
    </section>
  );
}

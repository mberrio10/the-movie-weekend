import React from 'react';
import './HomeScreen.css';
import requests from '../Requests';
import Rows from '../Row';

function HomeScreen() {
  return (
    <div className='homeScreen'>
      <Rows
        title='Netflix Originals'
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Rows title='Trending Now' fetchURL={requests.fetchTrending} />
      <Rows title='Top Rated' fetchURL={requests.fetchTopRated} />
      <Rows title='Action Movies' fetchURL={requests.fetchAction} />
      <Rows title='Comedy Movies' fetchURL={requests.fetchComedy} />
      <Rows title='Horror Movies' fetchURL={requests.fetchHorror} />
      <Rows title='Romance Movies' fetchURL={requests.fetchRomance} />
      <Rows title='Documentaries' fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;

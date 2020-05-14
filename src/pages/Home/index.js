import React from 'react';

import { Container } from './styles';

import LatestPostsList from '../../components/LatestPostsList';

function Home() {
  return (
    <>
      <Container>
        <LatestPostsList />
      </Container>
    </>
  );
}

export default Home;

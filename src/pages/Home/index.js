import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from './styles';

import LatestPostsList from '../../components/LatestPostsList';
import ListPost from '../../components/ListPost';
import * as postAction from '../../store/Post/actions';
import * as authorAction from '../../store/Author/actions';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postAction.getPosts());
    dispatch(authorAction.getAuthors());
  }, []);

  return (
    <Container>
      <LatestPostsList />
      <ListPost />
    </Container>
  );
}

export default Home;

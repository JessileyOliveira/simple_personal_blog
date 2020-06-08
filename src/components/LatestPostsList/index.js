import React from 'react';
import { useSelector } from 'react-redux';
import { Container, List, Title } from './styles';

import Loader from '../Loader';
import manipulateData from '../../helper/manipulatePostData';

function LatestPostsList() {
  const statePost = useSelector((state) => manipulateData(state.post));
  return (
    <Container>
      <Title>Últimas Publicações</Title>
      <List>
        {!statePost.loading &&
          statePost.data.slice(0, 3).map((post, index) => (
            <li key={String(index)}>
              {post.title}
              <div>{post.formatedPublishedAt}</div>
            </li>
          ))}
      </List>
      {statePost.loading ? (
        <Loader testid="latestListLoader" width={28} border={4} />
      ) : null}
    </Container>
  );
}

export default LatestPostsList;

import React from 'react';
import pt from 'date-fns/locale/pt-BR';
import { useSelector } from 'react-redux';
import { formatDistance } from 'date-fns';
import { Container, List, Title } from './styles';

import Loader from '../Loader';

function LatestPostsList() {
  const statePost = useSelector((state) => state.post);
  return (
    <Container>
      <Title>Últimas Publicações</Title>
      <List>
        {statePost.data &&
          statePost.data
            .sort((a, b) => b.metadata.publishedAt - a.metadata.publishedAt)
            .slice(0, 3)
            .map((post, index) => (
              <li key={index.toString()}>
                {post.title}
                <div>
                  {formatDistance(
                    new Date(post.metadata.publishedAt),
                    new Date(),
                    {
                      addSuffix: true,
                      locale: pt,
                    }
                  )}
                </div>
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

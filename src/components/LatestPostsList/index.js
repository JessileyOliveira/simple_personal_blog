import React from 'react';
import pt from 'date-fns/locale/pt-BR';
import { useSelector } from 'react-redux';
import { formatDistance } from 'date-fns';
import { Container, List, Title } from './styles';

function LatestPostsList() {
  const listPost = useSelector((state) => state.post);
  return (
    <Container>
      <Title>Últimas Publicações</Title>
      <List>
        {listPost.data &&
          listPost.data.slice(0, 3).map((post, index) => (
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
    </Container>
  );
}

export default LatestPostsList;

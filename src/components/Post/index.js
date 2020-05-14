import React from 'react';
import PropTypes from 'prop-types';

import pt from 'date-fns/locale/pt-BR';
import { formatDistance } from 'date-fns';

import { Container, Details } from './styles';

function Post(props) {
  const { post } = props;
  return (
    <Container>
      <div id="title">{post.title}</div>
      <div id="body">{post.body}</div>
      <Details>
        <div>{post.metadata.authorId}</div>
        <div>
          {formatDistance(new Date(post.metadata.publishedAt), new Date(), {
            addSuffix: true,
            locale: pt,
          })}
        </div>
      </Details>
    </Container>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    metadata: PropTypes.shape({
      publishedAt: PropTypes.number,
      authorId: PropTypes.number,
    }),
  }).isRequired,
};

export default Post;

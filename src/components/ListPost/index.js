import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Container, Filter, SelectContainer, Select, Error } from './styles';

import Loader from '../Loader';
import Post from '../Post';

function Home() {
  const statePost = useSelector((state) => state.post);
  const stateAuthors = useSelector((state) => state.author);
  const [filter, setFilter] = useState({ author: '', order: 'new' });
  const posts = useMemo(
    () =>
      statePost.data.length && stateAuthors.data.length
        ? (filter.author !== ''
            ? statePost.data.filter(
                (post) => post.metadata.authorId === Number(filter.author)
              )
            : statePost.data
          )
            .sort((a, b) =>
              filter.order === 'new'
                ? b.metadata.publishedAt - a.metadata.publishedAt
                : a.metadata.publishedAt - b.metadata.publishedAt
            )
            .map((post) => {
              const authorName = stateAuthors.data.find(
                (author) => author.id === post.metadata.authorId
              ).name;
              return {
                ...post,
                author: authorName,
              };
            })
        : [],
    [statePost, stateAuthors, filter]
  );

  return (
    <Container data-testid="postContainer">
      <Filter>
        <SelectContainer>
          <label htmlFor="author">Autor</label>
          <Select
            id="author"
            value={filter.author}
            onChange={(e) => setFilter({ ...filter, author: e.target.value })}
          >
            <option value="">Todos</option>
            {stateAuthors.data.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </Select>
        </SelectContainer>
        <SelectContainer width={120}>
          <label htmlFor="order">Ordem</label>
          <Select
            id="order"
            value={filter.order}
            onChange={(e) => setFilter({ ...filter, order: e.target.value })}
          >
            <option value="new">Mais recentes</option>
            <option value="old">Mais antigos</option>
          </Select>
        </SelectContainer>
      </Filter>
      {!stateAuthors.erro &&
        !statePost.error &&
        posts.map((post, index) => <Post key={index.toString()} post={post} />)}
      {statePost.error && <Error>{statePost.errorMessage}</Error>}
      {stateAuthors.error && <Error>{stateAuthors.errorMessage}</Error>}
      {stateAuthors.loading || statePost.loading ? (
        <Loader testid="postLoader" />
      ) : null}
    </Container>
  );
}

export default Home;

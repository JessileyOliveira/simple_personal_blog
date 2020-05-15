import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  PostContainer,
  Filter,
  SelectContainer,
  Select,
} from './styles';

import LatestPostsList from '../../components/LatestPostsList';
import * as postAction from '../../store/Post/actions';
import * as authorAction from '../../store/Author/actions';
import Post from '../../components/Post';

function Home() {
  const statePost = useSelector((state) => state.post);
  const listAuthors = useSelector((state) => state.author);
  const [filter, setFilter] = useState({ author: '', order: 'new' });
  const posts = useMemo(
    () =>
      statePost.data.length && listAuthors.data.length
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
              const authorName = listAuthors.data.find(
                (author) => author.id === post.metadata.authorId
              ).name;
              return {
                ...post,
                author: authorName,
              };
            })
        : [],
    [statePost, listAuthors, filter]
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postAction.getPosts());
    dispatch(authorAction.getAuthors());
  }, []);

  return (
    <>
      <Container>
        <LatestPostsList />
        <PostContainer data-testid="postContainer">
          <Filter>
            <SelectContainer>
              <label htmlFor="author">Autor</label>
              <Select
                id="author"
                value={filter.author}
                onChange={(e) =>
                  setFilter({ ...filter, author: e.target.value })
                }
              >
                <option value="">Todos</option>
                {listAuthors.data.map((author) => (
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
                onChange={(e) =>
                  setFilter({ ...filter, order: e.target.value })
                }
              >
                <option value="new">Mais recentes</option>
                <option value="old">Mais antigos</option>
              </Select>
            </SelectContainer>
          </Filter>
          {posts.map((post, index) => (
            <Post key={index.toString()} post={post} />
          ))}
        </PostContainer>
      </Container>
    </>
  );
}

export default Home;

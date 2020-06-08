import { useSelector } from 'react-redux';

import pt from 'date-fns/locale/pt-BR';
import { formatDistance } from 'date-fns';

export default function manipulateData(postList) {
  const stateAuthors = useSelector((state) => state.author);
  const list = postList;

  return {
    ...list,
    data: stateAuthors.data.length
      ? list.data
          .sort((a, b) => b.metadata.publishedAt - a.metadata.publishedAt)
          .map((post) => {
            const authorName = stateAuthors.data.find(
              (author) => author.id === post.metadata.authorId
            ).name;
            return {
              ...post,
              author: authorName,
              formatedPublishedAt: formatDistance(
                new Date(post.metadata.publishedAt),
                new Date(),
                {
                  addSuffix: true,
                  locale: pt,
                }
              ),
            };
          })
      : [],
  };
}

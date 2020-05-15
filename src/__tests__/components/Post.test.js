import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Post from '../../components/Post';

describe('Post tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should show a post', async () => {
    const objectPost = {
      title: 'Post Title',
      body: 'Post Body',
      author: 'Post Author',
      metadata: {
        publishedAt: 1492004832000,
        authorId: 1,
      },
    };
    const { getByText } = render(<Post post={objectPost} />);

    expect(getByText('Post Title')).toBeDefined();
    expect(getByText('Post Body')).toBeDefined();
    expect(getByText('Post Author')).toBeDefined();
  });
});

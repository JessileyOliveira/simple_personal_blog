import React from 'react';
import PropTypes from 'prop-types';

import { Container, Loading } from './styles';

function Loader(props) {
  const { width, border, testid } = props;
  return (
    <Container data-testid={testid}>
      <Loading width={width} border={border} />
    </Container>
  );
}

Loader.propTypes = {
  width: PropTypes.number,
  border: PropTypes.number,
  testid: PropTypes.string,
};

Loader.defaultProps = {
  width: 60,
  border: 8,
  testid: '',
};

export default Loader;

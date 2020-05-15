import React from 'react';
import PropTypes from 'prop-types';

import { Container, Loading } from './styles';

function Loader(props) {
  const { width, border } = props;
  return (
    <Container>
      <Loading width={width} border={border} />
    </Container>
  );
}

Loader.propTypes = {
  width: PropTypes.number,
  border: PropTypes.number,
};

Loader.defaultProps = {
  width: 60,
  border: 8,
};

export default Loader;

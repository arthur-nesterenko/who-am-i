import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  text-align: center;
`;

const BannerCredit = ({ name, link }) => {
  return (
    <Container>
      Photo by:{' '}
      <a target="_blank" href={link}>
        {name}
      </a>
    </Container>
  );
};

BannerCredit.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default BannerCredit;

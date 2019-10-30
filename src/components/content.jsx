import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Content = styled.div`
  p {
    font-size: 1.15rem;
    color: ${p => p.theme.colors[p.darkContent ? 'dark' : 'white']};
    line-height: 1.5;
    font-family: ${p => p.theme.fontFamily};
    font-weight: 400;
    padding: 10px 0;
    margin-bottom: 1.45rem;
  }
`;

Content.defaultProps = {
  darkContent: true,
};

Content.propTypes = {
  darkContent: PropTypes.bool,
};

export default Content;

import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Content = styled.div`
  p {
    color: ${p => p.theme.colors[p.darkContent ? 'dark' : 'white']};
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
